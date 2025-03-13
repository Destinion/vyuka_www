<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Proměnné v php</title>

</head>
<body>
    <h1>Datové typy proměnných</h1>
    <table border="1">
        <tr>
            <th>Datový typ</th>
            <th>Popis</th>
            <th>Příklad zápisu</th>
            <th>Deklarace proměnné</th>
        </tr>
        <tr>
            <td>String</td>
            <td>Textový řetězec</td>
            <td>
                "Ahoj světe"
            </td>
            <td>
                $text = "Ahoj světe";
            </td>
        </tr>
        <tr>
            <td>Integer</td>
            <td>Celé číslo</td>
            <td>
                42
            </td>
            <td>
                $cislo = 42;
            </td>
        </tr>
        <tr>
            <td>Float</td>
            <td>Desetinné číslo</td>
            <td>
                100.5
            </td>
            <td>
                $desetinne_cislo = 100.5;
            </td>
        </tr>
        <tr>
            <td>Boolean</td>
            <td>Pravdivost (pravda/nepravda)</td>
            <td>
                true
            </td>
            <td>
                $pravdivost = false;
            </td>
        </tr>
        <tr>
            <td>Array</td>
            <td>Pole hodnot</td>
            <td>
                [1, 2, 3]
            </td>
            <td>
                $pole = array(1, 2, 3);
            </td>
        </tr>
        <tr>
            <td>NULL</td>
            <td>Speciální hodnota NULL</td>
            <td>
                null
            </td>
            <td>
                $promenna = null;
            </td>
        </tr>
    </table>

    <h2>Ukázka php výstupu - datové typy</h2>
    <?php
        $text = "Ahoj světe";
        echo $text;
        echo "<br>";

        $cislo = 42;
        echo $cislo;
        echo "<br>";

        $desetinne_cislo = 100.5;
        echo $desetinne_cislo;
        echo "<br>";

        $pravdivost = false;
        echo $pravdivost;
        echo "<br>";

        $pole = array(1,2,3);
        echo $pole;
        echo "<br>";

        $promenna = null;
        echo $promenna;

        //Práce s proměnnými a operátory
        echo "<h2>Operátory</h2>";

        echo "<h3>Aritmetické operátory</h3>";
        //sčítání (+)
        $scitani = 5 + 9;
        $scitani = $cislo + $desetinne_cislo;

        //odčítání (-)
        $odcitani = 3 - 5;
        $odcitani = $cislo - $desetinne_cislo;
        echo $odcitani;

        //násobení (*)
        $nasobeni = 3 * 3;

        //dělení (/)
        $deleni = 8/2;

        echo "<br>";
        //Zbytek po dělení = MODULO (%)
        $modulo = 11%3;
        echo $modulo;

        echo "<br>";
        //exponent (**)
        $nadruhou = 3**2;
        echo $nadruhou;

        echo "<br>";
        //Spojení řetězců proměnných a hodnot (.)
        echo "Toto je ukázka spojení textu a proměnné ".$nadruhou.". Toto je další text";

        echo "<h3>Relační operátory - porovnávací</h3>";
        //slouží k porovnání hodnot - primárně se používají na podmínky
        //výstup je vždy true/false

        // rovno (==)
        $vek_kamarada = 18;
        if ($vek_kamarada == 18){
            echo "Všechno nejlepší!";
        };

        echo "<br>";

        // nerovno (!=)
        if ($vek_kamarada != 6){
            echo "Není ti 6 let";
        }

        echo "<br>";
        //větší než (>)
        if ($vek_kamarada > 18){
            echo "Můžu legálně pít alkohol";
        }

        echo "<br>";
        //menší než (<)
        if ($vek_kamarada < 18){
            echo "Nemůžu legálně pít alkohol";
        }

        //menší nebo rovno (<=)
        echo "<br>";
        if ($vek_kamarada <= 18){
            echo "Jsi závislý na tik toku a podporuješ Si Tin Pchina";
        }

        //větší nebo rovno (>=)
        echo "<br>";
        if ($vek_kamarada >= 65){
            echo "Jsi v důchodu";
        }

        echo "<br>";
        echo "<h3>Logické operátory</h3>";

        // slouží k logickým operacím (propojení, spojení nebo negace)

        //AND = a (&&)
        //a zároveň - pro true musí být splněny všechny podmínky
        $vek_kamarada = 16;
        $darek = "ano";
        $dresscode = "ano";

        if ($vek_kamarada > 16 && $darek == "ano" && $dresscode == "ano"){
            echo "Vítejte na párty!";
        }

        //OR = nebo (||)
        //nebo - stačí splnění jedné ze všech podmínek pro hodnotu true

        if ($vek_kamarada > 16 || $darek == "ano" || $dresscode == "ano"){
            echo "Vítejte na párty!";
        }

        echo "<br>";
        //NOT = negace (! - který se připojuje k dalšímu operátu)
        // nerovno (!<)
        if ($vek_kamarada = !6){
            echo "Není ti 6 let";
        }



    ?>
</body>
</html>