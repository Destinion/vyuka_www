<?php

$pole = array(1, 5, 4, 6, 8, 9);
$pole2 = ['Ovoce', 'Zelenina', 'Maso'];

//Naplnění pole pomocí cyklu for
for ($i = 0; $i <= 100; $i++){
    $pole3[$i] = $i; //díky syntaxi cyklu for se dá využít hodnota $i k deklaraci indexu a zapisované hodnoty
    //$i = 0, $i = 1, ....
}

print_r($pole3);

echo "<h1>Manipulace s obsahem pole</h1>";
echo "<br>";
for ($i = 0; $i <= 100; $i++){
    $pole4[$i] = $i*2;
}
print_r($pole4);

echo "<h2>Pole se sudými čísly od 0 do 100 - přes modulo</h2>";
echo "<br>";
for ($i = 0; $i <= 100; $i++){
    if ($i%2==0){
        $pole5[$i/2] = $i;
    }
}
print_r($pole5);
?>