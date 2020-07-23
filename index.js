require('dotenv').config()

const fs   = require('fs');
const request = require('request');
const yaml = require('js-yaml');
const Feed = require('rss-to-json');

const token = process.env.GITHUB_TOKEN;
const user = process.env.GITHUB_USER;
const organizationList = process.env.ORGANIZATION.split(',');


const githubGqlRequest = (query) => {
  return new Promise((resolve, reject) => {
    request({
			method: 'POST',
      url: `https://api.github.com/graphql`,
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent': user,
        'Accept': 'application/vnd.github.v3+json'
      },
			json: true,
			body: query
    }, (err, response, body) => {
      if (err) {
				return reject(err);
      }

      resolve(response.body)
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
    getPage(organization, filePath, "");
}

function cursorText(cursor) {
	if (cursor.length > 0 ) {
		return `, after: "${cursor}"`
	} else {
		return ""
	}
}

function getPage(organization, filePath, cursor) {
  let last = false;
	let nextCursor = ""

	let query = {query: `
		{ organization(login: "${organization}") {
			repositories(first: 100${cursorText(cursor)}) {
				pageInfo {
					endCursor
					hasNextPage
				}
				nodes {
					name
					ready: object(expression: "master:ready.yml") {
						oid
						... on Blob {
							text
						}
					}
				}
			}
		}
	}
	`}

  githubGqlRequest(query)
	.then((values) => {
		let repos = values.data.organization.repositories

		if (repos.pageInfo.hasNextPage) {
			nextCursor = repos.pageInfo.endCursor
		} else {
			last = true
		}

		let readyRepos = repos.nodes.filter(repo => repo.ready)

		readyRepos.forEach((repo) => retrievedData[organization].push(yaml.safeLoad(repo.ready.text)))

		if (last) {
	      // on last page, write to file
      fs.writeFileSync(filePath, JSON.stringify(retrievedData[organization], null, 2));
      console.log('Data written to ' + filePath + ", num items: " + retrievedData[organization].length);
    } else {
      // get data from next page
      getPage(organization, filePath, nextCursor);
    }
  })
  .catch((err) => console.error(err));
}


// Extract data from Deskpro RSS feed and save to data folder. 

const rssList = [
	'storage-and-backup',
	'ccv-website-articles'
]

const getRssList = (rssList) => {
	const promises = rssList.map(feed => Feed.load(`https://ithelp.brown.edu/kb/${feed}.rss`, (err, rss) =>
		rss
	));
	return promises
}

Promise.all(getRssList(rssList)).then(
	arr => {
		fs.writeFileSync('data/kb_articles.json', JSON.stringify(arr, null, 3))
		console.log('Data written to data/kb_articles.json');
	}
);



