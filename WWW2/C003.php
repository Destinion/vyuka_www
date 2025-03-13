<?php

/* 
Vytvoř pole s hodnotami "citron", "banán", "citron", "jablko".
Odeber duplicitní hodnoty z pole.
Vytvoř další pole s čísly (např. 5, 10, 15) a spočítej součet tohoto pole.
Vypiš výsledek operací.
 */

$pole_ovoce = array("citron", "banán", "citron", "jablko");
$pole_bez_duplikat = array_unique($pole_ovoce);
print_r($pole_bez_duplikat);

$pole_cisla = array(5, 10, 15);
echo "Součet: " . array_sum($pole_cisla);

?>