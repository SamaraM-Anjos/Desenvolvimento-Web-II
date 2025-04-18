/**
 * O que essa função faz:
 *  1. Essa função é responsável por fazer uma requisição para um arquivo .json que contém as informações dos filmes
 *  2. Depois da reqisição, a resposta é armazenada em uma variável
 *  3. Após armazenar os dados recebidos, essas informações (no formato JSON) serão convertidas para o formato de objeto literal JavaScript
 *  4. Depois, seleciona-se apenas as informações presentes na propriedade 'filmes' do objeto e retorna-se esse dado tratato
 * @return array filmes
 */

const realizarRequisicao = async () => {
    try {
        let respostaJSON = await fetch('filmesJson/filmes.json');
        let resposta = await respostaJSON.json();
        let filmes = resposta.filmes;
        return filmes;
    }
    catch (erro) {
        console.error('Erro:', erro);
    }
};

export { realizarRequisicao };