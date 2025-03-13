<?php
$vek = 18;

/* u podmínky if je vždy výstup TRUE nebo FALSE - pokud je výstup True, proběhne kod v složené závorce*/
/*U větvení se najde první podmínka s TRUE a provede se její obsah. Další větvení se neprovádí*/
if ($vek < 18){
    echo "Tento text je vidět pouze v případě, že je splněná podmínka";
} elseif ($vek > 65){
    echo "Je vám víc jak 65";
} elseif ($vek > 18){
    echo "Tento text je vidět, pokud se nesplní 1. podmínka, ale splní se podmínka u elseif";
} else{
    echo "Tento text je vidět. Pokud se nesplní žádná předchozí podmínka.";
}

echo "<br>";
echo "Další text";
echo "<br>";

echo "<h1>Více IF</h1>";
//Každé IF přestavuje separátní větvení
if ($vek > 18){
    echo "První IF<br>";
}
if ($vek > 65){
    echo "Druhý IF<br>";
}

echo "<h1>IF s vícero podmínkami</h1>";
// and - a zároveň (musí být splněno vše)
// or - nebo (stačí splněno alespoň jedno)
if ($vek >= 20 and $vek <= 30){
    echo "Tento text se vypíše pouze v případě, pokud je věk mezi 20 a zároveň 30 lety";
} elseif ($vek = 18 or $vek = 65 or $vek = 0){
    echo "Tento text se zobrazí, pouze v případě, pokud se splní alespoň jedna podmínka";
}

echo "<h1>Vnořená podmínka IF</h1>";
$puvod = "Česko";
$pohlavi = "žena";
$vek = 20;

if ($vek > 18 and $vek < 65){
    if ($pohlavi = "žena"){
        echo "Dobrý den ženo!<br>";
        if ($puvod = "Česko"){
            echo "Prosím o výpis z TR<br>";
        } else{
            echo "Vítejte v ČR<br>";
        }
    } else{
        echo "Vaše pohlaví je muž";
    }
} else{
    echo "Jste moc mladý";
}
?>