const btnCarregarFilmes = document.querySelector('#carregarFilmes');

const realizarRequisicao = async () => {
    try {
        let respostaJSON = await fetch('../filmesJson/filmes.json');
        let resposta = await respostaJSON.json();
        let filmes = resposta.filmes;
        return filmes;
    }
    catch (erro) {
        console.error('Erro:', erro);
    }
};

btnCarregarFilmes.addEventListener('click', () => {
    alert('Clicou');
    realizarRequisicao();
});

export {realizarRequisicao};