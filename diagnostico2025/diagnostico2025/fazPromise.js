function fazPromise ( metodo, url, cbSucesso, cbErro, dados = null) {
    const promise = new Promise(function (resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open(metodo, url);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send(JSON.stringify(dados)); //Serializa o objeto p/ ser enviado com texto JSON
        // Monitore a mudança de estado da requisição
        xhr.onload = () => {
            if (xhr.status >= 400 && xhr.status < 500) {
                reject('Erro de domínio ' + xhr.status + ' - ' + xhr.statusText);
            }
            else if (xhr.status >= 500) {
                reject('Erro no servidor ' + xhr.status + ' - ' + xhr.statusText);
            }
            else if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204 || xhr.status === 304) {
                let resposta = JSON.parse(xhr.responseText);
                resolve(resposta);
            }
            else {
                reject('Erro desconhecido ' + xhr.status + ' - ' + xhr.statusText);
            }
        }
    })
    .then(resposta => cbSucesso(resposta))
    .catch(erro => cbErro(erro));
    console.log(promise);
}

export {fazPromise};