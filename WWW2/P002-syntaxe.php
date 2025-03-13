<?php
    //php soubor má koncovku .php
    //Je to server-side case-sensitive programovací interpretovany jazyk

    //prikaz pro vypis do HTML - zápis do uvozovek, ukončení strednikem
    echo "Výpis";
    echo "<br>";
    echo 9;

    /* chyba kodu
    asddd
    addslashesas
    */

    // Deklarace promenne
    $jmeno = "Ondrej Pacner";
    $vek = 26;
    $iq = 100.5;

    echo $jmeno;
    echo "<br>";

    //Práce s promennymi
    //Vypis promenne
    echo $vek;
    echo "<br>";

    //Zmena promenne
    $vek = 18;
    echo $vek;
    echo "<br>";

    //Ukázka manipulace s promenymi
    $vek2 = 15;
    $finalni_vek = $vek + $vek2;
    echo $finalni_vek;
?>