<?php
    declare(strict_types=1); // Essa função faz com que os tipos de dados sejam respeitados pelo programa e funções criadas
    require_once './funcoes.php';

    // Receberá os dados via JavaScript
    $alunoJSON = file_get_contents("php://input");
    $aluno = json_decode($alunoJSON, true); // Transforma uma matriz associativa em objeto PHP
    $nome =  isset ($aluno['nome']) ? strtoupper($aluno['nome']) : null;
    $nota1 = isset ($aluno['nota1']) ? floatval($aluno['nota1']) : null;
    $nota2 = isset ($aluno['nota2']) ? floatval($aluno['nota2']) : null;

    if ($nome && $nota1 && $nota2) {
        $media = obtemMedia($nota1, $nota2);
        $grau = '';
        preencheGrau($media, $grau);

        $aluno['media'] = $media;
        $aluno['grau'] = $grau;
        http_response_code (201);
        header("Content-Type:application/json; charset=utf-8");
        die(json_encode($aluno));
    }
    else{
        http_response_code (201);
        header("Content-Type:application/json; charset=utf-8");
        $resposta =['msgErro' => "Não foram recebidos todos os valores esperados"];
        die(json_encode($resposta));
    }
?>