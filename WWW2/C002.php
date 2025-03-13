<?php

/* 
Deklaruj pole s prvky "pes", "kočka", "králík".
Přidej do pole nový prvek "papoušek".
Vyber a vypiš první a poslední prvek z pole.
Vypiš celé pole pomocí print_r().
 */

 $pole = ["pes", "kočka", "králík"];
 $pole[] = "papoušek";
 echo $pole[0];
 echo $pole[3];

 print_r($pole);
?>