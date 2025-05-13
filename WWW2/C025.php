<?php
    // pomocí while vytvořte program s proměnnou, do které zadáte číslo mezi 0 a 200
    // hodnota proměnné představuje podmínku cyklu.
    // cyklus while bude generovat nadpis h1 s číslem představující počet opakování
    // zajistěte, aby i při zadání opakování hodnoty 0 se cyklus alespoň jednou provedl

    $pocet_opakovani = 0;
    $i = 0;
    do{
        echo "<h1>".$i."</h1>";
        $i+=1;
    }while($i >= 0 and $i <= $pocet_opakovani)
?>