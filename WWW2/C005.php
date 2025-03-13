<?php
//1. cvičení
$mesta  = ["Praha", "Brno", "Ostrava"];
$mesta[] = "Plzeň";

array_push($mesta, "Liberec", "Olomouc");
print_r($mesta);

//3. cvičení
$soucet = [3, 7, 2, 8, 1];
echo array_sum($soucet);

//2. cvičení
$doprava = ["auto", "vlak", "letadlo", "loď"];
unset($doprava[1]);
array_pop($doprava);
print_r($doprava);
echo count($doprava);

//6. cvičení
$prvni = ["pondělí", "úterý", "středa"];
$druhy = ["čtvrtek", "pátek", "sobota", "neděle"];
$prvni = array_merge($prvni, $druhy);
print_r($prvni);

//4. cvičení
$duplicity = ["jablko", "hruška", "jablko", "pomeranč", "hruška"];
array_unique($duplicity);
print_r($duplicity);
//7. cvičení
$razeni = [5, 2, 9, 1, 7];
sort($razeni);
rsort($razeni);
print_r($razeni);

//10. cvičení
$textove_pole = ["Slovensko", "Česko", "Německo", "Polsko"];
echo implode(", ", $textove_pole);
?>