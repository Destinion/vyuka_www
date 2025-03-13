<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C020 - 2D pole pro generaci obsahu</title>
    <style>
        .blok{
            width: 200px;
            height: 200px;
            background-color: #cc11ff;
            border: 1px solid black;
        }
        .radek{
            padding: 10px;
            background-color: blue;
            display: flex;
            justify-content: space-evenly;
            margin: 10px;
            height: 33vh;
            align-items: center;
        }
    </style>
</head>
<body>
    <form action="#" method="post">
        <input type="number" min="1" name="radky">Zadej počet řádků<br>
        <input type="number" min="1" name="sloupce">Zadej počet sloupců<br>
        <input type="submit">
    </form>
    <main>
        <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST"){
                $radek = $_POST["radky"];
                $sloupce = $_POST["sloupce"];
                for ($i = 0; $i < $radek; $i++){
                    echo "<div class='radek'>";
                    
                    for ($j = 0; $j < $sloupce; $j++){
                        echo "<div class='blok'></div>";
                    }
                    echo "</div>";
                }
            }
        ?>
    </main>
    
</body>
</html>