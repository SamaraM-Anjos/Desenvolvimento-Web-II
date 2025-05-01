const getJSON = (url) => {
    return new Promise (( resolve, reject ) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = () => {

            if ( xhr.status >= 200 || xhr.status <= 300) {
                resolve( JSON.parse(xhr.responseText) );
            }
            else {
                reject( `Erro de requisição: ${xhr.status}` );
            }
        };
        xhr.onerror = () => reject( 'Erro de rede' );

        xhr.send();
    });
};

export { getJSON };