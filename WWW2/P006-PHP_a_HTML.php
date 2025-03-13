<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP a HTML - vkládání proměnných</title>
</head>
<body>
    <h1>Vkládání proměnných PHP do HTML</h1>
    <?php
        $jmeno = "Ondřej";
        $prijmeni = "Pacner";
    ?>

    <h2>Vítejte 
        <?php
            echo $jmeno." ".$prijmeni;
        ?>
    </h2>
</body>
</html>