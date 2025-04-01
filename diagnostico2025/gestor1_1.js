import { fazXMLHTTPRequest } from "./fazXMLHTTPRequest.js";
import { montarResultado } from "./gestorAlunoUtil.js";

const $formAluno = document.querySelector('#formAluno');

$formAluno.addEventListener('submit', event => {
    event.preventDefault();
    let aluno = {
        nome: document.querySelector("#nome").value,
        nota1: document.querySelector("#nota1").value,
        nota2: document.querySelector("#nota2").value
    };
    fazXMLHTTPRequest('POST', 'servidor/devolveResultado.php', fcSucesso, fcErro, aluno);
});

function fcSucesso (aluno) {
    const $secResultado = document.querySelector("#resultado");
    montarResultado($secResultado, aluno, false);
}

function fcErro(erroMsg) {
    document.querySelector('#erro').textContent = erroMsg;
}