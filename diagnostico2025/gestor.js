import { geraOpcoes, trataResposta } from "./util.js";
import { montarResultado } from "./gestorAlunoUtil.js";

const $formAluno = document.querySelector("#formAluno");
$formAluno.addEventListener('submit', event=>{
    event.preventDefault();
    let aluno = {
        nome: document.querySelector("#nome").value,
        nota1: document.querySelector("#nota1").value,
        nota2: document.querySelector("#nota2").value
    };

    const opcoes = geraOpcoes('POST', aluno);

    fetch("servidor/devolveResultado.php", opcoes)
    .then(resposta => {
        trataResposta(resposta);
        return resposta;
    })
    .then(resposta => resposta.json())
    .then(aluno =>{
        //Deu tudo certo
        const secResultado = document.querySelector('#resultado');
        montarResultado(secResultado, aluno, true  );
    })
    .catch(erro => document.querySelector("#erro").textContent = erro);
});