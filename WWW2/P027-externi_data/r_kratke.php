<?php

$soubor = "data.csv";
$vypis = fopen($soubor, "r"); 

$radek = fgetcsv($vypis);
echo $radek;

foreach ($radek as $bunka){
    echo $bunka.", "; //vypíše hodnotu v poli řádku;
}

?>