<?php
    declare(strict_types=1);
    require_once("funcoes.php");
    //$aluno = (array) $_POST[];
    $nome = isset($_POST["nome"]) ? strtoupper($_POST["nome"]):null;
    $nota1 = isset($_POST["nota1"]) ? floatval($_POST["nota1"]):null;
    $nota2 = isset($_POST["nota2"]) ? floatval($_POST["nota2"]):null;
    if($nome && $nota1 && $nota2){
        $media = obtemMedia($nota1,$nota2);
        $grau = "";
        preencheGrau($media, $grau);
        //header("Content-Type:text/html;charset=utf-8");
        echo "<h2>Dados do aluno:</h2><hr/>";
        echo "Nome: $nome<BR/>";
        echo "Nota 1: $nota1<BR/>";
        echo "Nota 2: $nota2<BR/>";
        echo "Média: $media<BR/>";
        echo "Grau: $grau<BR/>";
    }else
        die("Não foram recebidos todos os valores esperados<BR/>");
?>