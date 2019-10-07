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
const githubRequest = (path) => {
  return new Promise((resolve, reject) => {
    request({
      url: `https://api.github.com/${path}`,
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent': user,
        'Accept': 'application/vnd.github.v3+json'
      }
    }, (err, response) => {
      resolve(JSON.parse(response.body));
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
for (let i = 0; i < totalOrgs; i++) {
    let organization = organizationList[i];
    let filePath = 'data/info-' + organization + '.json';
    
    githubRequest(`orgs/${organization}/repos?per_page=100`).then((values) => {
      // gets the contents of the repos
      return Promise.all(values.map((repo) => {
        // console.log(repo.name)
        return githubRequest(`repos/${organization}/${repo.name}/contents`)
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
        return githubRequest(`repos/${organization}/${item}/contents/ready.yml`);
      }))
    }).then((values) => {
      // decode and save readme content
      const str = values.map((item) => yaml.safeLoad(Base64.decode(item.content)));
      fs.writeFileSync(filePath, JSON.stringify(str, null, 2));
      console.log('Data written to ' + filePath);
    });
}
