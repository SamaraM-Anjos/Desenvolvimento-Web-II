import { geraOpcoes, trataResposta } from "./util.js";
import { montarResultado } from './gestorAlunoUtil.js';

const formAluno = document.querySelector('#formAluno');

formAluno.addEventListener('submit', event => {
    event.preventDefault();
    (async () => {
        try {
            let alunoJs = {
                nome: document.querySelector('#nome').value,
                nota1: document.querySelector('#nota1').value,
                nota2: document.querySelector('#nota2').value,
            };
            const opcoes = geraOpcoes('POST', alunoJs);
            let resposta = await fetch ('servidor/devolveResultado.php', opcoes);
            await trataResposta(resposta);
            let aluno = await resposta.json();
            const secResultado = document.querySelector('#resultado');
            alert('Vai montar resultado');
            await montarResultado(secResultado, aluno, true);
        }catch (erro) {
            document.querySelector('#erro').textContent = erro;
        }
    })();
});