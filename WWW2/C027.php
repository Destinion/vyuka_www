<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C027 - výběr z menu</title>
</head>
<body>
    <form action="" method="GET">
        <select name="vyber">
            <option value=""></option>
            <option value="1">Výpis čísel pomocí for</option>
            <option value="2">Výpis jmen pomocí foreach</option>
            <option value="3">Počítání dolů pomocí while</option>
            <option value="4">Počítání nahoru pomocí do...while</option>
            <option value="5">Ověření přístupu - if</option>
            <option value="6">Výběr v týdnu - switch</option>
        </select>
        <input type="submit" value="Odeslat">
    </form>
</body>
</html>

<?php
    if ($_SERVER["REQUEST_METHOD"] == "GET"){
        $vyber = $_POST['vyber'];

        switch($vyber){
            case 1:
                for($i = 1; $i < 11; $i++){
                    echo $i."<br>";
                }
                break;
            case 2:
                $pole = ["Vojta", "Pavel", "Dobrýdžus", "Burger"];
                foreach ($pole as $hodnota){
                    echo $hodnota.", ";
                }
                break;
            case 3:
                $j = 10;
                while($j >= 0){
                    echo $j."<br>";
                    $j--;
                }
                break;
            case 4:
                $k = 0;
                do{
                    echo $k.", ";
                    $k++;
                }while($k < 10);

                break;
            case 5:
                echo "<form method='post' action=''>";
                echo "<input type='password' name='heslo'>";
                echo "<input type='submit'>";
                echo "</form>";
                if ($_SERVER["REQUEST_METHOD"] == "POST"){
                    $heslo = $_POST['heslo'];
                    if ($heslo=='abcd123'){
                        echo "Heslo je správně";
                    }
                }
                break;
            case 6:
                $den = "pondělí";
                switch($den){
                    case "pondělí":
                        echo "je pondělí";
                        break;
                }
                break;
            default:
                echo "špatná volba";
                break;
        }
    }
?>