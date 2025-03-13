<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP - Require a Include</title>
</head>
<body>
    <h1>Zde je níže umístěn obsah souboru P009-test_i.html</h1>
    <?php
        include 'P009-test_i.html'; 
        /*
            Vloží obsah souboru do skriptu. Pokud soubor neexistuje nebo ho nelze najít, php pouze hodí varování
        */
    ?>
    <h1>Zde je níže umístěn obsah souboru P009-test_r.php</h1>
    <?php
        require 'P009-test_r.php';
        /*
            Vloží obsah souboru do skriptu. Pokud soubor neexistuje nebo ho nelze najít, php ukončí celý skript
        */
    ?>
</body>
</html>