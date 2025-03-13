<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Výstup formuláře na stejné stránce</title>
</head>
<body>
    <form action="" method="post"> <!--Pokud je action bez hodnoty, php běží na této stránce-->
        <input type="radio" name="pocasi" value="slunecno">Slunečno<br>
        <input type="radio" name="pocasi" value="dest">Déšť<br>
        <input type="radio" name="pocasi" value="snih">Sníh<br>
        <input type="radio" name="pocasi" value="jinak">Jinak<br>

        <input type="submit" value="Odeslat">
    </form>

    <?php
    /*
    Pro singlepage FRM se používá request_method, aby se zamezilo zpracování dat před odesláním formuláře
    */
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $pocasi = $_POST["pocasi"];

        if ($pocasi == "slunecno"){
            echo "Běž ven!";
        } elseif ($pocasi == "dest"){
            echo "Vezmi si deštník";
        } elseif ($pocasi == "snih"){
            echo "Stavíme sněhuláka";
        } else{
            echo "Zůstaň doma";
        }
    }
    
    ?>
</body>
</html>