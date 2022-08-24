const fetch = require('node-fetch');

function handleError(e) {
  throw new Error(e.message);
}

async function checkStatus(arrayURLs) {
  try {
    const arrayStatus = await Promise
      .all(arrayURLs
        .map(async url => {
          const res = await fetch(url)
          return res.status;
    }))
    return arrayStatus;
  } catch(e) {
    handleError(e);
  }
}

function generateURLArray(linkArray) {
  return linkArray
    .map(objetoLink => Object
      .values(objetoLink).join());
}

async function validateURLs(linkArray) {
  const links = generateURLArray(linkArray);
  const statusLinks = await checkStatus(links);
  
  const resultados = linkArray.map((objeto, indice) => ({
    ...objeto,
    status: statusLinks[indice]
  }))
  return resultados;
}

module.exports = validateURLs;