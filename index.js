const chalk = require('chalk');
const fs = require('fs');

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const resultArray = [];
  let temp;
  while((temp = regex.exec(text)) !== null) {
    resultArray.push({ [temp[1]]: temp[2] })
  }
  return resultArray.length === 0 ? 'No links in here' : resultArray;
}

function handleError(e) {
  throw new Error(chalk.red(e.code, 'No files in this path'));
}

async function catchFiles(path) {
  const encoding = 'utf-8';
  try {
    const text = await fs.promises.readFile(path, encoding)
    return extractLinks(text);
  } catch(e) {
    handleError(e);
  }
}

module.exports = catchFiles;