const chalk = require('chalk');
const catchFiles = require('./index');
const validateURLs = require('./http-validacao');

const caminho = process.argv;

async function processText(path) {
  const resultado = await catchFiles(path[2]);
  if (caminho[3] === 'validate') {
    console.log(chalk.yellow('links validados'), await validateURLs(resultado));
  } else {
    console.log(chalk.yellow('lista de links'), resultado);
  }
}

processText(caminho);