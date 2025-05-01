export const realizarRequisicao = async () => {
    let respostaRequisicao = await fetch('veiculosJson/veiculos.json');

    if( !respostaRequisicao.ok ) {
        throw new Error('Ops! Ocorreu algum erro na requisição. Status: ' + respostaRequisicao.status + ' ' + respostaRequisicao.statusText);
    }
    else {
        let respostaJSON = await respostaRequisicao.json();

        return respostaJSON;
    } 
};