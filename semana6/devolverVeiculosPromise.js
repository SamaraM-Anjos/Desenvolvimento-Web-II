import { getJSON } from './funcoes/requisicaoPromise.js';
import { gerarElementoErro, gerarTabela, limparElementNode } from './funcoes/funcoes.js';

const btnCarregarFilmes = document.querySelector('#carregarVeiculos');

btnCarregarFilmes.addEventListener('click', async () => {
    const sectionVeiculos = document.querySelector('#veiculos');

    limparElementNode(sectionVeiculos);

    const veiculos = await getJSON( 'veiculosJson/veiculos.json' );
    const tabela = gerarTabela( veiculos );
    sectionVeiculos.appendChild( tabela );
});