<?php

/* 
Vytvoř pole s hodnotami 10, 5, 8, 3, 12.
Seřaď pole od nejmenšího po největší a vypiš ho.
Vytvoř další pole s hodnotami 15, 6, 9.
Spoj obě pole dohromady a vypiš výsledek.
Seřaď spojené pole v opačném pořadí (od největšího po nejmenší) a opět vypiš pomocí implode.
 */

// 1. 
$pole = array(10, 5, 8, 3, 12);

//2.
sort($pole);
print_r($pole);

// 3. 
$pole_2 = array(15, 6, 9);

// 4.
$spojene_pole = array_merge($pole, $pole_2);
print_r($spojene_pole);

// 5. 
rsort($spojene_pole);
print_r($spojene_pole);

?>