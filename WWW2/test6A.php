<?php
$pole = [];
$pozice = 0;
for ($i = 1; $i < 101; $i+=1){
    if ($i %2 == 1){
        $pole[$pozice] = $i;
        $pozice = $pozice+1;
    }
    
}
$soucet = 0;

foreach ($pole as $alias){
    $soucet += $alias;
}
echo "Součet lichých čísel je: ". $soucet. "<br>";

$vysledek = $soucet / count($pole);
echo "Průměr hodnot je: ". $vysledek;
?>