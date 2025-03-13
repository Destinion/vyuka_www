<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $radky = $_POST['radky'];
    $sloupce = $_POST['sloupce'];

    $tabulka = [];
    for ($i = 0; $i < $radky; $i++) {
        $radek_t = [];
        for ($j = 0; $j < $sloupce; $j++) {
            $radek_t[] = ["Předčasný odchod z výuky", "Jméno", "Datum", "Třída", "Podpis TU"];
        }
        $tabulka[] = $radek_t;
    }
}

if (!empty($tabulka)) {
    echo '<table>';
    foreach ($tabulka as $radek_t) {
        echo '<tr>';
        foreach ($radek_t as $bunka) {
            echo '<td>';
            echo '<h1>' . $bunka[0] . '</h1>';
            for ($i = 1; $i < count($bunka); $i++) {
                echo '<h2>' . $bunka[$i] . '</h2>';
            }
            echo '</td>';
        }
        echo '</tr>';
    }
    echo '</table>';
}
?>
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generování Tabulky</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse; 
        }
        td {
            border: 1px solid black;
            padding: 10px;
            text-align: center; 
        }
    </style>
</head>
<body>
    <form method="post">
        <label for="radky">Počet řádků:</label>
        <input type="number" id="radky" name="radky" min="1" required>
        <label for="sloupce">Počet sloupců:</label>
        <input type="number" id="sloupce" name="sloupce" min="1" required>
        <button type="submit">Generovat</button>
    </form>
</body>
</html>
