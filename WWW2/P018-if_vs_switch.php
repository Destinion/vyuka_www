<?php
echo "<h1>Lepší IF než SWITCH</h1>";
$vek = 25;
if ($vek > 18 and $vek < 65){
    echo "Můžeme Vás zaměstnat";
}

switch($vek){
    case 19:
        echo "Můžeme Vás zaměstnat";
        break;
    case 20:
        echo "Můžeme Vás zaměstnat";
        break;
    case 21:
        echo "Můžeme Vás zaměstnat";
        break;
    default:
        echo "Tohle celé psát nebudu!";
        break;
}

echo "<h1>Lepší SWITCH než IF</h1>";
$den = "pondělí";
switch($den){
    case "pondělí":
        echo "Dnes je pondělí";
        break;
    case "úterý":
        echo "Dnes je úterý";
        break;
    case "středa":
        echo "Dnes je středa";
        break;
    case "čtvrtek":
        echo "Dnes je čtvrtek";
        break;
    case "pátek":
        echo "Dnes je pátek";
        break;
    case "sobota":
        echo "Dnes je sobota";
        break;
    case "neděle":
        echo "Dnes je neděle";
        break;
    default:
        echo "Toto není den";
        break;
}

if ($den == "pondělí") {
    echo "Dnes je pondělí";
} elseif ($den == "úterý") {
    echo "Dnes je úterý";
} elseif ($den == "středa") {
    echo "Dnes je středa";
} elseif ($den == "čtvrtek") {
    echo "Dnes je čtvrtek";
} elseif ($den == "pátek") {
    echo "Dnes je pátek";
} elseif ($den == "sobota") {
    echo "Dnes je sobota";
} elseif ($den == "neděle") {
    echo "Dnes je neděle";
} else {
    echo "Toto není den";
}

?>