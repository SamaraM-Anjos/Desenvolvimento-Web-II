// Importando a função que realizará a requisição dos filmes do arquivo filmes.js
import { realizarRequisicao } from './funcoes/requisicao.js';
// Importando outras funções para formatação e exibição dos dados para o usário
import { gerarLista } from './funcoes/funcoes.js';

const btnCarregarFilmes = document.querySelector('#carregarFilmes');

btnCarregarFilmes.addEventListener('click', async () => {
    const sectionFilmes = document.querySelector('#filmes');
    sectionFilmes.innerHTML = '';

    alert('Gerando lista de filmes!');

    const filmes = await realizarRequisicao();

    filmes.forEach(filme => {
        let ulFilme = gerarLista(filme);
        sectionFilmes.append(ulFilme, document.createElement('hr'));
    });
});

// Outra abordagem de pegar o click do botão:
// document.querySelector('#carregarFilmes').addEventListener('click', async () => {...});