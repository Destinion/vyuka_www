<?php
 // Pomocí cyklu for vyrobte jednorozměrné pole obsahující čísla od 0 do 100

 //Následně na pole aplikujte níže vypsané metody a výstup vypište

 //počet prvků v poli, řazení pole sestupně, nechte pole vypsat jako řetězec oddělený ,

    $pole = [];

    for ($i = 0; $i < 101;$i++){
        $pole[$i] = $i;
    }
    print_r($pole);

    echo "<br>";
    echo count($pole);

    rsort($pole);
    echo "<br>";
    echo implode(", ", $pole);
?>