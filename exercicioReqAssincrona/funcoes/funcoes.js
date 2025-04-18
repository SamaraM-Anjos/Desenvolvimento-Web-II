const gerarItemDeLista = (dado) => {
    let li  = document.createElement('li');
    li.textContent = dado;
    
    return li;
}
function gerarListaDeGeneros (generosArray) {
    let ul = document.createElement('ul');
    generosArray.forEach(genero => {
        ul.appendChild(gerarItemDeLista(genero));
    });
    return ul;
}
function gerarListaDeAtores (elencoArray) {
    let ul = document.createElement('ul');
    elencoArray.forEach(elenco => {
        ul.appendChild(gerarItemDeLista(elenco.ator));
    });
    return ul;
}

function gerarLista (filme) {
    let [idLi, tituloLi, resumoLi, dataLancamentoLi, generosLi, elencoLi] = ['li','li', 'li', 'li', 'li', 'li'].map(tag => document.createElement(tag));
    idLi.innerHTML = `<strong>Id:</strong> ${filme.id}`;

    tituloLi.innerHTML = `<strong>Título:</strong> ${filme.titulo}`;

    resumoLi.innerHTML = `<strong>Resumo:</strong> ${filme.resumo}`;

    dataLancamentoLi.innerHTML = `<strong>Data de lançamento:</strong> ${filme.dataLancamento.dia} - ${filme.dataLancamento.pais}`;

    generosLi.innerHTML = `<strong>Gêneros:</strong>`;
    generosLi.appendChild(gerarListaDeGeneros(filme.generos))

    elencoLi.innerHTML = `<strong>Elenco:</strong>`;
    elencoLi.appendChild(gerarListaDeAtores(filme.elenco));

    let ulFilme = document.createElement('ul');
    ulFilme.append(idLi, tituloLi, resumoLi, dataLancamentoLi, generosLi, elencoLi)

    return ulFilme;
}

export {gerarLista};