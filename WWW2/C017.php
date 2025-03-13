<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="POST">
        <input type="number" name="mesic" required>
        <input type="submit">
    </form>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $mesic = $_POST['mesic'];

        if ($mesic > 12 or $mesic <= 0){
            echo "NEEXISTUJE!";
        } else{
            switch($mesic){
                case 1:
                    echo "Leden<br>";
                    break;
            }
            if ($mesic == 1 or $mesic == 2 or $mesic == 12){
                echo "Je to Zima!";
            }
        }
    }
    ?>
</body>
</html>