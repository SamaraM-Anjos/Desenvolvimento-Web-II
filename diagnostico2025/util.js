function geraOpcoes (metodo, dados = null) {
    const opcoes = {
        method: metodo,
        body: (dados != null) ? JSON.stringify(dados): "",
        headers: {
            "Content-Type" : "application/json;charset=UTF-8"
        }
    }
    return opcoes;
}

async function trataResposta (resp) {
    if (resp.status === 404)
        throw new Error ("Página não encontrada");
    if (resp.status >= 500) 
        throw new Error ("Erro do servidor. " + resp.statusText);
    if (!resp.ok) 
        throw new Error ("Erro de domínio. " + resp.statusText);
}

export {geraOpcoes, trataResposta};