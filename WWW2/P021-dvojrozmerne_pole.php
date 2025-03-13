<?php

$dpole = [  [1, 2, 3], 
            [4, 5, 6], 
            [7, 8, 9]
        ];

$dvojpole = []; //nelze deklarovat 2D pole přímo, musí se řešit cyklem
for ($i = 0; $i < 5; $i++){
    $dvojpole[$i] = [];
    for ($j = 0; $j < 5; $j++){
        $dvojpole[$i][$j] = 0;
    }
}

print_r($dvojpole);
?>