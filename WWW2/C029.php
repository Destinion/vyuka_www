<?php

//větvení - IF

//podmínka - true/false
if (7 > 3){
    //splněná podmínka
    echo "7 je větší než 3";
} elseif (3 > 7){
    echo "První podmínka neplatí, ale druhá ano";
} else{
    echo "Tento kod je vidět pokud neplatí žádná z předchozích podmínek IF - (3 == 7)";
}
echo "<br>";
$a = 20;
$b = 11;
if ($a > $b || $b > $a){
    echo "Díky použití OR stačí, když platí alespoň jedna podmínka";
} elseif($a == 20 && $b == 11){
    echo "Tento text vidět pouze v případě, že platí obě části podmínky";
}

// Konstrukce SWITCH
echo "<br>";

$volba = 1;
switch ($volba){
    case "a":
        //kod...
        echo "proměnná má hodnotu a";
        break;
    case "1":
        echo "volba je rovna textu 1";
        break;
    case 1:
        echo "volba je rovna celemu cislu 1";
        break;
    default:
        echo "Tento text je vidět, pouze pokud neplatí žádný case u switche";
        break;
}

// cykly for, foreach, while, do..while - vždycky se opakují, dokud platí podmínka

echo "<br>";
//CYKLUS FOR - (počáteční hodnota, podmínka, inkrement)
for ($i = 0; $i < 5; $i++){
    // při každém opakování se zvýší hodnota $i o +1
    // jakmile je $i rovna 5, tak se cyklus ukončí
    // počáteční hodnota $i je 0
    echo "Číslo: ". $i. ", ";
}
echo "<br>";
// FOR a pole
$pole = [];
for ($j = 0; $j < 5; $j++){
    $pole[$j] = $j + 1;
}
print_r($pole);

//cyklus foreach - pole, objekty
//foreach ($pole/$objekt as $docasna_promenna){}
echo "<br>";
foreach ($pole as $pomocna){
    $index = $pomocna - 1;
    $pomocna = $pomocna * 2;
    echo "Dvojnásobek položky s indexem ". $index . " je roven ". $pomocna . "<br>";
}

echo "<br>";
//while a do...while
$cislo = 10;
while($cislo > 0){
    echo "Současné číslo je: ". $cislo. "<br>";
    $cislo--;
}

echo "<br>";
$podminka = 1;
do{
    echo "Hodnota je: ". $podminka;
    $podminka--;
}while($podminka > 1)
?>