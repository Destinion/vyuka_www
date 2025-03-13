<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Získání hodnot z formuláře
    $dospeli = $_POST['dospeli']; // Očekáváme, že bude vždy nějaká hodnota
    $deti = $_POST['deti'];       // Očekáváme, že bude vždy nějaká hodnota
    $sleva = $_POST['sleva'];     // Očekáváme, že bude vždy nějaká hodnota

    // Ceny
    $cena_dospeli = 200;
    $cena_deti = 100;

    // Výpočet celkové ceny
    $celkova_cena = ($dospeli * $cena_dospeli) + ($deti * $cena_deti);
    $sleva_cena = $celkova_cena * ($sleva / 100);
    $finalni_cena = $celkova_cena - $sleva_cena;

}
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Výsledky Registrace</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .result {
            margin-top: 20px;
            padding: 15px;
            background-color: #e0ffe0;
            border-radius: 5px;
        }
        .result p {
            margin: 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Výsledky Registrace</h1>

        <div class="result">
            <h2>Výsledky</h2>
            <p><strong>Počet dospělých:</strong> <?= $dospeli ?></p>
            <p><strong>Počet dětí:</strong> <?= $deti ?></p>
            <p><strong>Sleva:</strong> <?= $sleva ?>%</p>
            <p><strong>Celková cena:</strong> <?= $celkova_cena ?> Kč</p>
            <p><strong>Sleva:</strong> <?= $sleva_cena ?> Kč</p>
            <p><strong>Po slevě:</strong> <?= $finalni_cena ?> Kč</p>
        </div>

        <br>
        <a href="C011.html">Zpět na formulář</a>
    </div>
</body>
</html>
