<?php
    declare(strict_types=1); // Essa função faz com que os tipos de dados sejam respeitados pelo programa e funções criadas
    require_once './funcoes.php';

    
    // $aluno = (array) $_POST[];
    $nome =  isset ($_POST['nome']) ? strtoupper($_POST['nome']) : null;
    $nota1 = isset ($_POST['nota1']) ? floatval($_POST['nota1']) : null;
    $nota2 = isset ($_POST['nota2']) ? floatval($_POST['nota2']) : null;

    if ($nome && $nota1 && $nota2) {
        $media = obtemMedia($nota1, $nota2);
        $grau = '';
        preencheGrau($media, $grau);
        echo "<h2>Dados do aluno:</h2><hr>";
        echo "Nome: $nome</br>";
        echo "Nota 1: $nota1</br>";
        echo "Nota 2: $nota2</br>";
        echo "Média: $media</br>";
        echo "Grau: $grau</br>";
    }
    else{
        die("Não foram recebidos todos os valores esperados </br>");
    }
?>