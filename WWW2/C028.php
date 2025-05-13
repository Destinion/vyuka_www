<?php
//pomocí cyklu for mi vygenerujte pole obsahující násobky čísla 7 od 0 do 5000. hodnoty uložte do pole a následně je pomocí cyklu for each nechte vydělit dvěma
$pole = [];
$j = 0;
for ($i = 0; $i < 5001; $i++){
    if ($i%7==0){
        $pole[$j] = $i;
        $j++;
    }
}
$k = 0;
foreach ($pole as $hodnota){
    $hodnota = $hodnota / 2;

    $pole[$k] = $hodnota;
    $k++;
}

print_r($pole);

?>