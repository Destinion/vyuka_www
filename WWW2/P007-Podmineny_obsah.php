<?php
    $prihlasen = true;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP a HTML - práce s podmíněným obsahem</title>
</head>
<body>
    <h1>PHP a HTML - práce s podmíněným obsahem</h1>
    <?php
        if ($prihlasen) : 
    ?>
    <h2>Toto je vidět při přihlášení</h2>
    <?php
        else :
    ?>
    <h2>Přihlašte se prosím</h2>
    <?php
        endif;
    ?>
</body>
</html>