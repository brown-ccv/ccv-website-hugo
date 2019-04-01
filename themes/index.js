const Cite = require('citation-js');
const yaml = require('js-yaml');
const fs = require('fs');


function getCitations(pubList) {
  let pubAll = [];

  pubList.map((value) => {
    let pubJson = new Cite(value);
    let article = new Object();
    article.id = pubJson.data['0'].id
    article.type = pubJson.data['0'].type
    article.doi = pubJson.data['0'].DOI
    article.title = pubJson.data['0'].title
    article.author = pubJson.data['0'].author
    article.publisher = pubJson.data['0'].publisher
    article.page = pubJson.data['0'].page
    article.volume = pubJson.data['0'].volume
    try {
      article.pubyear = pubJson.data['0']['published-print']['date-parts'][0][0]
      article.pubmonth = pubJson.data['0']['published-print']['date-parts'][0][1]
    }
    catch (e){
      try {
        article.pubyear = pubJson.data['0']['journal-issue']['published-print']['date-parts'][0][0]
        article.pubmonth = pubJson.data['0']['journal-issue']['published-print']['date-parts'][0][1]
      }
      catch (e){
        article.pubyear = null
        article.pubmonth = null
      }
    }
    article.URL = pubJson.data['0'].URL
    article.ISSN = pubJson.data['0'].ISSN
    article.journal = pubJson.data['0']['container-title-short']
    pubAll.push(article);
    // console.log(pubJson.data['0']);
  });

  return pubAll;
}

// CCV Publications
const pubs = yaml.safeLoad(fs.readFileSync('data/_publications.yaml', 'utf8'));
const pubsJson = getCitations(pubs)
fs.writeFileSync('data/publications.json', JSON.stringify(pubsJson, null, 2));


// Other Citations
const citations = yaml.safeLoad(fs.readFileSync('data/_citations.yaml', 'utf8'));
const citationsJson = getCitations(citations)
fs.writeFileSync('data/citations.json', JSON.stringify(citationsJson, null, 2));
