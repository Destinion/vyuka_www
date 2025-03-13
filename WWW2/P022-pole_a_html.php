<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>2D pole pro generaci obsahu</title>
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
    <main>
        <?php
            for ($i = 0; $i < 3; $i++){
                echo "<div class='radek'>";
                
                for ($j = 0; $j < 3; $j++){
                    echo "<div class='blok'></div>";
                }
                echo "</div>";
            }
        ?>
    </main>
    
</body>
</html>