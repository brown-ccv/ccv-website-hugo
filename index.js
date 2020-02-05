require('dotenv').config()

const fs   = require('fs');
const request = require('request');
const Base64 = require('js-base64').Base64;
const _ = require('lodash');
const yaml = require('js-yaml');

const token = process.env.GITHUB_TOKEN;
const user = process.env.GITHUB_USER;
const organizationList = process.env.ORGANIZATION.split(',');

/**
 * Returns a promise that resolves to a Github API response.
 */
const githubRequest = (path, returnHeaders) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.github.com/${path}`,
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent': user,
        'Accept': 'application/vnd.github.v3+json'
      }
    }, (err, response) => {
      if (err) {
	return reject(err);
      }

      if (returnHeaders) {
        resolve(response); // send back headers + body
      } else {
        resolve(JSON.parse(response.body)); // just send back body
      }
    });
  });
};

/**
 * The procedure below gets a list of repositories for the organization using
 * the repos API, for each repo, it checks if there is a docs folder using the
 * contents API. If the repo has a docs folder, then we get the README file
 * content using the readme API.
 *
 */

let totalOrgs = organizationList.length;

// retrievedData : dictionary containing accumulated repo information from
//                 seen pages, info only written to file when all pages traversed

let retrievedData = {}  // (key: organization, value: [] of repos for that org)

for (let i = 0; i < totalOrgs; i++) {
    let organization = organizationList[i];
    let filePath = 'data/info-' + organization + '.json';

    retrievedData[organization] = [];
    getPage(`orgs/${organization}/repos?per_page=30`, organization, filePath);
}

function getPage(url, organization, filePath) {
  let last = false;
  let nextURL = "";

  githubRequest(url, true).then((values) => {

    if (values.headers['link']) {
      // if API paginated items
                                
      let linksDict = {}; // dictionary (key: rel | value: url)

      // parse returned header for link to next page
      let headerLinks = values.headers['link'].split(", "); // split previous, next, last links.
                                
      for (let linkI = 0; linkI < headerLinks.length; linkI++) {
        let linkRelSplit = headerLinks[linkI].split(">; rel=\"");
        let relExtracted = linkRelSplit[1].substring(0, linkRelSplit[1].length-1);
        let urlExtracted = linkRelSplit[0].substring(1);
        urlExtracted = urlExtracted.substring("https://api.github.com/".length);
        linksDict[relExtracted] = urlExtracted;
      }

      // traversing to next page handled below for synchronicity within organization, so needed
      // info passed over here.
      if ("next" in linksDict) {
        nextURL = linksDict["next"];
      } else {
        last = true;
      }

    } else {
      // if all data returned on single page
      last = true;
    }

    // gets the contents of the repos
    let body = JSON.parse(values.body);
                                
    return Promise.all(body.map((repo) => {
      return githubRequest(`repos/${organization}/${repo.name}/contents`, false)
    }));
  }).then((values) => {
    // checks if the repo contains the docs folder
    return _.compact(_.flatten(values.map((content) =>
      content.map((file) => {
        if (Object.values(file).includes('ready.yml')) return file.url.split('/')[5];
      })
    )));
  }).then((values) => {
    // gets contents from ready.yml of the repos that have docs folder
    return Promise.all(values.map((item) => {
      return githubRequest(`repos/${organization}/${item}/contents/ready.yml`, false);
    }))
  }).then((values) => {
    // decode and save readme content
    let existingDataList = retrievedData[organization];
    values.forEach((item) => existingDataList.push(yaml.safeLoad(Base64.decode(item.content))));
    retrievedData[organization] = existingDataList;

    if (last) {
      // on last page, write to file
      fs.writeFileSync(filePath, JSON.stringify(retrievedData[organization], null, 2));
      console.log('Data written to ' + filePath + ", num items: " + retrievedData[organization].length);
    } else {
      // get data from next page
      getPage(nextURL, organization, filePath);
    }
  }).catch((err) => console.error(err));
}
