// Importando a função que realizará a requisição dos filmes do arquivo filmes.js
import { getJSON } from './funcoes/requisicaoPromise.js';
// Importando outras funções para formatação e exibição dos dados para o usário
import { gerarLista } from './funcoes/funcoes.js';

const btnCarregarFilmes = document.querySelector('#carregarFilmes');

btnCarregarFilmes.addEventListener('click', async () => {
    const sectionFilmes = document.querySelector('#filmes');
    sectionFilmes.innerHTML = '';

    alert('Gerando lista de filmes!');
    let resposta = await getJSON('filmesJson/filmes.json');
    const filmes =  resposta.filmes;
    
    filmes.forEach(filme => {
        let ulFilme = gerarLista(filme);
        sectionFilmes.append(ulFilme, document.createElement('hr'));
    });
});