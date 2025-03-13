<!-- Vytvořte formulář pro registraci počtu uživatelů na akci

Vstupní pole:
Počet osob - dospělý (200/osoba), děti(100/osoba)
Sleva - 0%, 25%, 50%
V C011.php se vypíše počet vstupenek, sleva a celková cena -->

<!-- formulář a výstup graficky upravte -->



























<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Získání hodnot z formuláře
    $dospeli = isset($_POST['dospeli']) ? (int)$_POST['dospeli'] : 0;
    $deti = isset($_POST['deti']) ? (int)$_POST['deti'] : 0;
    $sleva = isset($_POST['sleva']) ? (float)$_POST['sleva'] : 0;

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
            <p><strong>Počet dospělých:</strong> <?php echo $dospeli; ?></p>
            <p><strong>Počet dětí:</strong> <?php echo $deti; ?></p>
            <p><strong>Sleva:</strong> <?php echo $sleva; ?>%</p>
            <p><strong>Celková cena:</strong> <?php echo number_format($celkova_cena, 2, ',', ' ') . " Kč"; ?></p>
            <p><strong>Sleva:</strong> <?php echo number_format($sleva_cena, 2, ',', ' ') . " Kč"; ?></p>
            <p><strong>Po slevě:</strong> <?php echo number_format($finalni_cena, 2, ',', ' ') . " Kč"; ?></p>
        </div>

        <br>
        <a href="C011_form.php">Zpět na formulář</a>
    </div>
</body>
</html>
