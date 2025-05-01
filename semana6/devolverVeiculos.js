import { realizarRequisicao } from './funcoes/requisicao.js';
import { gerarElementoErro, gerarTabela, limparElementNode } from './funcoes/funcoes.js';

const btnCarregarFilmes = document.querySelector('#carregarVeiculos');

btnCarregarFilmes.addEventListener('click', async () => {
    const sectionVeiculos = document.querySelector('#veiculos');

    limparElementNode(sectionVeiculos);

    try{
        const veiculos = await realizarRequisicao();
        const tabela = gerarTabela( veiculos );
        sectionVeiculos.appendChild( tabela );
    }
    catch (erro) {
        sectionVeiculos.appendChild( gerarElementoErro(erro) );
    };
});