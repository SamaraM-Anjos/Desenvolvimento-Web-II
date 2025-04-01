export function fazXMLHTTPRequest (metodo, url, cbSucesso, cbErro, dados = null) {
    let xhr = new XMLHttpRequest();
    xhr.open (metodo, url);
    xhr.setRequestHeader ('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(JSON.stringify(dados)); // Serializa o objeto p/ ser enviado com texto JSON

    // Monitore a mudança de estado da requisição
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);
        // Quando o readyState da requisição dor 4 (completa), verifique seu status
        if (xhr.readyState === 4) {
            if (xhr.status >= 400 && xhr.status < 500) {
                cbErro('Erro de domínio ' + xhr.status + ' - ' + xhr.statusText);
            }
            else if (xhr.status >= 500)
                cbErro('Erro no servidor ' + xhr.status + ' - ' + xhr.statusText);
            else if (xhr.status === 200 || xhr.status === 201 || xhr.status === 204 || xhr === 304) {
                let resposta = JSON.parse(xhr.responseText);
                cbSucesso(resposta);
            }
            else {
                cbErro('Erro desconhecido ' + xhr.status + ' - ' + xhr.statusText);
            }
        }
    }
}