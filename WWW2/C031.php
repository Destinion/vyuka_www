<?php
//1. úloha
$pole = [];
$j = 0;
for ($i = 50; $i <= 100; $i++){
    $pole[$j] = $i;
    $j++;
}
print_r($pole);

echo "<br>";

$seznam = ["Daniel", "David", "Jan", "Karel"];
foreach ($seznam as $promenna){
    echo $promenna;
    if ($promenna == "David"){
        echo ". Ahoj ". $promenna . "e!";
    }
    echo "<br>";

}

$a = 5;
$b = 11;
$c = -3;
if ($a > $b && $a > $c){
    echo "<h1>Hodnota proměnné A je nejvyšší</h1>";
} elseif ($b > $a && $b > $c){
    echo "<h1>Hodnota proměnné B je nejvyšší</h1>";
} elseif ($c > $a && $c > $b){
    echo "<h1>Hodnota proměnné C je nejvyšší</h1>";
} else{
    // $a < c
}

$k = 1;
while ($k <= 10){
    $vysledek = 7 * $k;
    echo "Násobek čísla 7 * ". $k ." je: ". $vysledek.", ";
    $k++;
}

$znamka = 3;
switch ($znamka){
    case 1:
        echo "Výborný";
        break;
    case 2:
        echo "Chvalitebný";
        break;
    case 3:
        echo "Dobrý";
        break;
    default:
        echo "Nedostatečný";
        break;
}
?>