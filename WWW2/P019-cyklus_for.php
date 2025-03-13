<?php
//Cyklus FOR

//používá pro opakování kodu určitý početkrát

for ($i = 0; $i < 5; $i++){
    echo "Vaše číslo je: ".$i."<br>"; // Tento kod se provede při každém opakování cyklu
}

/* for (počáteční hodnota; podmínka; iterace (co se stane při každém opakování cyklu)){
    ...běžící kod...
} */

echo "<h1>Práce s cyklem FOR</h1>";
//Práce s cyklem for
for ($i = 5; $i > 0; $i--){
    echo "Vaše číslo je: ".$i."<br>";
}

echo "<h2>Uživatelský vstup - zadá nejvyšší hodnotu, cyklus vypíše sudá čísla do 0</h2>";
$uzivatel = 100;
for ($uzivatel; $uzivatel > 0; $uzivatel--){
    if ($uzivatel%2 == 0){
        echo "Sudé číslo: ".$uzivatel."<br>";
    }
}
?>