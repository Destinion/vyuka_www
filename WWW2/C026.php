<?php

/* 2. Sudá čísla (while)
Napište program, který pomocí cyklu while vypíše všechna sudá čísla od 2 do 20.
 */
$i = 2;
while($i <= 20){
    echo $i." ";
    $i +=2;
}


/* 3. Součet čísel (while)
Napište program, který pomocí cyklu while sečte čísla od 1 do 10 a zobrazí jejich součet. */

$j = 1;
while($j <= 10){
    $soucet += $j;
    $j += 1;
}
echo "<br>".$soucet;

/*
10. Tabulka násobků (do while)
Napište program, který pomocí cyklu do while vypíše tabulku násobků pro číslo 7 od 7 × 1 až po 7 × 10.
*/

echo "<table>";
$nasobek = 1;
do{
    $vysledek = 7 *$nasobek;
    echo "<tr><td>7</td><td>".$vysledek."</td>";
    $nasobek += 1;
}while ($nasobek <= 10)
echo "</table>";
?>