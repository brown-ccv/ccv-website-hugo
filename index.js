const Cite = require('citation-js');
const yaml = require('js-yaml');
const fs = require('fs');

const pubs = yaml.safeLoad(fs.readFileSync('data/publications.yaml', 'utf8'));

let pubAll = [];

pubs.map((value) => {
  let pubJson = new Cite(value);
  let article = new Object();
  article.type = pubJson.data['0'].type
  article.doi = pubJson.data['0'].DOI
  article.title = pubJson.data['0'].title
  article.author = pubJson.data['0'].author
  article.publisher = pubJson.data['0'].publisher
  article.volume = pubJson.data['0'].volume
  article.URL = pubJson.data['0'].URL
  article.ISSN = pubJson.data['0'].ISSN
  article.journal = pubJson.data['0']['container-title-short']
  pubAll.push(article);
  // console.log(pubJson.data['0']);
});

fs.writeFileSync('data/publications.json', JSON.stringify(pubAll, null, 2));
