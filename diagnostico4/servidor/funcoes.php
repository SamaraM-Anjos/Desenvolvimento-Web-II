<?php
    function obtemMedia(float $n1, float $n2):float{
        return ($n1+$n2)/2;
    }

    function preencheGrau(float $med,string &$grauAlu):void{
        if($med > 8)
            $grauAlu = "A";
        elseif($med >= 6)
            $grauAlu = "B";
        elseif($med >= 4)
            $grauAlu = "C";
        elseif($med >2)
            $grauAlu = "D";
        else
            $grauAlu = "E";
    }
?>