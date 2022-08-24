const catchFiles = require('../index');

const arrayResult = [
    {
       FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
] 

describe('catchFiles::', () => {
    it('Must return a result array', async () => {
        const result = await catchFiles('C:\/Users\/userlocal\/Downloads\/2299-lib-nodejs-markdown-aula-5\/2299-lib-nodejs-markdown-aula-5\/test\/arquivos_teste\/texto1teste.md');
        expect(result).toEqual(arrayResult);
    })
})
