<?php
//Vytvořte pomocí cyklu for pole. které obsahuje 10 čísel, které jsou násobky 9. Nejnižší číslo může být 27
$pole = [];
$vysledek = 27;
for ($i = 0; $i < 10; $i++){
    $pole[$i] = $vysledek + 9;
}

print_r($pole);
?>