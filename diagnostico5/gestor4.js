import { obtemPromise } from "./obtemPromise.js";
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
            let aluno = await obtemPromise('POST', './servidor/devolveResultado.php', alunoJs);
            const secResultado = document.querySelector('#resultado');
            alert('Vai montar o resultdo');
            await montarResultado(secResultado, aluno, true);
        }    
        catch(erro){
            document.querySelector('#erro').textContent = erro;
        } 
    })();
});