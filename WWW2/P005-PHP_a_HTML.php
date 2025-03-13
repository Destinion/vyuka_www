<?php
//Zde se php píše v momentě, kdy chcete zpracovat kod při spuštění stránky - login, omezení přístupu, redirect
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP a HTML</title>
</head>
<body>
    <h1>Ukázka připojení PHP k HTML</h1>
    <?php
    //Zde se php píše v momentě, kdy chcete zpracovat kod který má být na stránce vidět nebo je aktivně závislý na body HTML - prvky, data, výpisy, interaktivita
    ?>

    <h2>
        Zde je:
        <?php
            echo "Text vygenerovaný pomocí PHP příkazu echo";
        ?>
    </h2>
</body>
</html>

<?php
//Zde se php píše v momentě, kdy chcete zpracovat kod po spuštění stránky - odeslání frm, zpracování dat, double check, redirect
?>