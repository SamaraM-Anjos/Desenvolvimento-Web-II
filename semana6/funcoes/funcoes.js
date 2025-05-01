function getChavesObj ( objeto ) {
    return Object.keys(objeto);
}

function gerarLinhaTabela ( dados, corpoTabela = true) {
    const tr = document.createElement('tr');

    if ( corpoTabela ) {
        for (const chave in dados) {
            const td = document.createElement( 'td' );
            td.textContent = dados[chave];
            tr.appendChild( td );
        }
    }
    else{
        dados.forEach ( dado => {
            const th =  document.createElement('th');
            th.textContent = dado.toUpperCase();
        
            tr.appendChild( th );
        });
    }

    return tr;
}

function gerarTableBody ( dados ) {
    const tbody = document.createElement( 'tbody' );

    dados.forEach(dado => {
        tbody.appendChild ( gerarLinhaTabela( dado ) );
    });

    return tbody;
}

function gerarTableHead ( cabecalhos ) {
    const tHead = document.createElement('thead');
    
    tHead.appendChild( gerarLinhaTabela( cabecalhos, false ) );

    return tHead;
}

function gerarTabela ( dados ) {
    const tabela = document.createElement('table');
    const tHead = gerarTableHead( getChavesObj( dados[0] ) );
    const tbody = gerarTableBody( dados );

    const tCaption = document.createElement('caption');
    tCaption.textContent = 'Lista de veículos';
    
    tabela.append( tCaption, tHead, tbody, );

    return tabela;
}

const limparElementNode = ( elemento ) => {
    while ( elemento.firstChild )
        elemento.removeChild( elemento.firstChild );
}

const gerarElementoErro = ( erro ) => {
    const erroElemento = document.createElement( 'div' );
    erroElemento.classList.add('erro');

    const divBar = document.createElement('div');
    divBar.classList.add('erroBar');

    const p = document.createElement('p');
    p.textContent = erro;

    erroElemento.append( divBar, p );

    return erroElemento;
}

export { gerarTabela, limparElementNode, gerarElementoErro };