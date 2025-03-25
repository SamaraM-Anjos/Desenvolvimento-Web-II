<?php

    function obtemMedia (float $nota1, float $nota2):float {
        return ($nota1 + $nota2)/2;
    }

    function preencheGrau (float $media, string &$grauAluno):void {
        if ($media > 8) 
            $grauAluno = 'A';
        elseif ($media >= 6)
            $grauAluno = 'B';
        elseif ($media >= 4)
            $grauAluno = 'C';
        elseif ($media > 2)
            $grauAluno = 'D';
        else
            $grauAluno = 'E';
    }