<?php

/* while (podminka){
    ... kod co se opakuje dokud platí podmínka ...
} */

$i = 1;
while($i < 11){
    echo "Hodnota je: ".$i."<br>";
    $i +=1; /* Podmínka ukončení cyklu MUSÍ být v těle cyklu */
}

$cislo = 0;
while($cislo < 100){
    echo "<h3>Pepperoni</h3>";
    $cislo +=1;
}
?>