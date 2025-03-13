<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Počasí</title>
</head>
<body>
    <form action="" method="POST">
        <input type="radio" name="pocasi" value="slunecno">Slunečno<br>
        <input type="radio" name="pocasi" value="dest">Déšť<br>
        <input type="radio" name="pocasi" value="snih">Sníh<br>
        <input type="radio" name="pocasi" value="jinak">Jinak<br>

        <input type="submit" value="Odeslat">
    </form>
</body>
</html>

<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pocasi = $_POST['pocasi'];

    echo $pocasi;
}
/* Zadání:

Napište program, který podle proměnné $pocasi doporučí aktivitu - aktivitu vybíráte ve formuláři:

"slunečno" → "Jdi na procházku."
"déšť" → "Vem si deštník."
"sníh" → "Postav sněhuláka."
Jinak → "Zůstaň doma."

 */
?>