const $formAluno = document.querySelector('#formAluno');
$formAluno.addEventListener('submit', (event) =>{
    event.preventDefault();
    let aluno = {
        nome: document.querySelector('#nome').value,
        nota1: document.querySelector('#nota1').value,
        nota2: document.querySelector('#nota2').value
    };

    const opcoes = {
        method: 'POST',
        body: (aluno != null) ? JSON.stringify(aluno) : '',
        headers: {
            "Content-type": "application/JSON; charset=UTF-8"
        }
    }
    fetch('servidor/devolveResultado.php', opcoes) // Aqui haverá o tratamento de erros
    .then(resposta => {
        if (resposta.status === 404)
            throw new Error('Página não encontrada');
        if (resposta.status >= 500)
            throw new Error('Erro do servidor. ' + resposta.statusText);
        if (!resposta.ok)
            throw new Error ('Erro de domínio. ' + resposta.statusText);
        return resposta;
    }) // Aqui, a resposta será transformada em objeto literal JS para que possamos exibi-la
    .then (resposta => resposta.json())
    .then (aluno => { // Aqui é o local que iremos configurar a exibição do aluno
        // Deu tudo certo
        const $sectionResultado = document.querySelector('#resultado');
        const $cabecalho = document.createElement('h2');
        $cabecalho.textContent = 'Dados do Aluno: ';

        $sectionResultado.append($cabecalho, document.createElement('hr'));

        const $ul = document.createElement('ul');
        $sectionResultado.append($ul);

        let $li = document.createElement('li');

        $li.innerHTML = '<strong>Nome: </strong>' + aluno.nome;
        $ul.appendChild($li);

        $li = document.createElement('li');
        $li.innerHTML = '<strong>Média: </strong>' + aluno.media;
        $ul.appendChild($li);

        $li = document.createElement('li');
        $li.innerHTML = '<strong>Grau: </strong>' + aluno.grau;
        $ul.appendChild($li);
    })
    .catch( erro => document.querySelector('#erro').textContent = erro);

    
});