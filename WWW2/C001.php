<!-- 
    Vytvořte soubor C001.php

    Vytvořte pole s názvem OVOCE - dejte do něj následující položky:

    Meloun, Banán, Rajče, Mrkev

    Dále aplikujte následující úpravy

    Vypište druhý prvek
    vymažte poslední položku z pole
    Vypište celkový počet položek v poli
    Nechte vypsat pole
 -->
<?php
 $ovoce = array('Meloun', 'Banán', 'Rajče', 'Mrkev');

 echo $ovoce[1];
 echo "<br>";
 array_pop($ovoce);
 echo count($ovoce);
 echo "<br>";
 print_r($ovoce);

 ?>