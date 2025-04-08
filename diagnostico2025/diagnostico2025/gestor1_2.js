import { fazPromise } from "./fazPromise.js";
import { montarResultado } from './gestorAlunoUtil.js';

const formAluno = document.querySelector('#formAluno');

formAluno.addEventListener('submit', event => {
    event.preventDefault();
    let aluno = {
        nome: document.querySelector('#nome').value,
        nota1: document.querySelector('#nota1').value,
        nota2: document.querySelector('#nota2').value,
    }
    fazPromise('POST', 'servidor/devolveResultado.php', fcSucesso, fcErro, aluno);
});

function fcSucesso (aluno) {
    const secResultado = document.querySelector('#resultado');
    montarResultado(secResultado, aluno, true);
};

function fcErro (erroMsg) {
    document.querySelector('#erro').textContent = erroMsg;
};