const getJSON = (url) => {
    return new Promise (( resolve, reject ) => {
        const xhr = new XMLHttpRequest(); // Criando um calback XMLHTTPRequest
        xhr.open('GET', url); // Abrindo uma requisição com o método GET e enviando o link que contém as informações requisitadas
        xhr.onload = () => { // Após abrir a resiquição, temos que verificar o andamento da requisicação. Olhando o status da requisição, enviamos os dados retornados ou algum erro
            if ( xhr.status >= 200 || xhr.status <= 300) {
                resolve( JSON.parse(xhr.responseText) ); // Se der um status ok para a requisição, envia-se os dados em forma de array
            }
            else {
                reject( `Erro de requisição: ${xhr.status}` ); // Se der erro, enviamos uma resposta de erro com o determinado status de erro.
            }
        };
        xhr.onerror = () => reject( 'Erro de rede' ); // Caso haja algum erro de rede, aciona-se essa função onerror() para tratar o ocorrido
        xhr.send(); // Enviando a requisição.
    });
};

export { getJSON };