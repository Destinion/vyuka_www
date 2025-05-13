<?php
//Fibonacciho posloupnost

$n = 10; // počet okapování posloupnosti, které chceme vypsat

//První dvě čísla F posloupnosti
$fib1 = 0;
$fib2 = 1;

//počáteční index
$i = 0;

while ($i < $n){
    echo $fib1." "; //výpis aktuálního čísla

    //Posun na další F číslo
    $dalsiF = $fib1 + $fib2;
    $fib1 = $fib2;
    $fib2 = $dalsiF;


    $i+=1;
}
?>