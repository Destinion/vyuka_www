
<?php
$volba = 3;

/*
IF pracuje s rozsahy hodnot
SWITCH pracuje s konkrétní hodnotou
-----

switch(promenna){
    case hodnota:
        kod;
        break; - ukončení case
    default: - jiná hodnota než u case
}
*/
switch($volba){
    case 1:
        echo "volba je rovna 1";
        break;
    case 2:
        echo "volba je rovna 2";
        break;
    case 3:
        echo "volba je rovna 3";
        break; 
    default:
        echo "Jiná volba";
        break;
}
?>