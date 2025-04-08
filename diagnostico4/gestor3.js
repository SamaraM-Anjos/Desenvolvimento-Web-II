import { obtemPromise } from "./obtemPromise.js";
import { montarResultado } from './gestorAlunoUtil.js';

const formAluno = document.querySelector('#formAluno');

formAluno.addEventListener('submit', event => {
    event.preventDefault();
    let aluno = {
        nome: document.querySelector('#nome').value,
        nota1: document.querySelector('#nota1').value,
        nota2: document.querySelector('#nota2').value,
    };
    obtemPromise('POST', './servidor/devolveResultado.php', aluno)
    .then (aluno => {
        // Deu certo
        const secResultado = document.querySelector('#resultado');
        montarResultado(secResultado, aluno, true);
    })
    .catch(erro => document.querySelector('#erro').textContent = erro); 
});