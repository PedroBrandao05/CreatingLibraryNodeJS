const catchFiles = require('../index');

const arrayResult = [
    {
       FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
] 

describe('catchFiles::', () => {
    it('Must return a result array', async () => {
        const result = await catchFiles('test\/arquivos_teste\/texto1teste.md');
        expect(result).toEqual(arrayResult);
    })
    it('Must return message "No links in here"', async () => {
       const result = await 
       catchFiles('C:\/cursoNODE\/CreatingLibraryNodeJS\/test\/arquivos_teste\/texto1_sem_links.md')
       expect(result).toBe('No links in here')})
})
gi