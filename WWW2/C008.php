<?php
    require 'C008-data.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            color: <?php echo $barva?>
        }
    </style>
</head>
<body>
    <!--ze souboru C008-data.php budete načítat údaje a data-->
    <!--Vytvořte logiku pro připojení, která říká, že pokud uživatel není přihlášen, neuvidím obsah stránky. V dokumentu PHP bokem bude také proměnná $barva - která určuje hlavní barvu písma pro všechny prvky HTML.-->
    <?php
        if ($prihlasen) :
    ?>
    <h1>Obsah stránky</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ipsa! Veniam, necessitatibus. Cupiditate pariatur dignissimos quibusdam laborum eius, incidunt sunt error aliquid dolorum explicabo omnis quidem atque doloremque ea sed.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aliquid labore qui quisquam voluptas vel sequi nulla quae recusandae, accusamus deleniti id, voluptatum libero eum. Necessitatibus culpa quidem debitis ipsum.
    </p>
    <?php
        else :
    ?>
    <h1>Nepřihlášen!</h1>
    <?php
        endif;
    ?>
</body>
</html>