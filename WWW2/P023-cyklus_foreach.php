<?php
//foreach - používá se k iteraci přes pole nebo objekty
// -> jeho základní syntaxe slouží k projetí všech prvků v objektu nebo poli


$pole = [1, 5, 8, 9, 11, 22, 50, 71];

foreach ($pole as $polozka){
    echo "Současná hodnota proměnné $"."polozka je: ". $polozka . "<br>";
}

foreach ($pole as $polozka){
    if ($polozka %2 == 0){
        $polozka += 1;
    } 
}
print_r($pole);

?>