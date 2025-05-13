<?php
$csvFile = "prispevky.csv";
$chyby = array();

// Zpracování formuláře
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $text = '';
    $autor = '';
    $barva = '';
    $datum = date('Y-m-d H:i:s'); // aktuální datum a čas

    if (isset($_POST['text'])) {
        $text = trim($_POST['text']);
    }

    if (isset($_POST['autor'])) {
        $autor = trim($_POST['autor']);
    }

    if (isset($_POST['barva'])) {
        $barva = $_POST['barva'];
    }

    if ($text === '') {
        $chyby[] = "Text nesmí být prázdný.";
    }

    if ($autor === '') {
        $chyby[] = "Autor je povinný.";
    }

    $povolene_barvy = ['červená', 'zelená', 'modrá'];
    if (!in_array($barva, $povolene_barvy)) {
        $chyby[] = "Neplatná barva pozadí.";
    }

    if (count($chyby) === 0) {
        $f = fopen($csvFile, 'a');
        if ($f !== false) {
            fputcsv($f, array($text, $autor, $barva, $datum));
            fclose($f);
        }
        header("Location: " . $_SERVER["PHP_SELF"]);
        exit();
    }
}

// Načtení dat ze souboru
$prispevky = array();
if (file_exists($csvFile)) {
    $prispevky = array_map('str_getcsv', file($csvFile));
}
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Příspěvky uživatelů</title>
    <style>
        body {
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 40px;
            text-align: center;
        }
        form {
            max-width: 600px;
            margin: auto;
            background: #fff;
            padding: 25px;
            border-radius: 8px;
            border: 1px solid #ccc;
            margin-bottom: 40px;
        }
        input[type="text"], textarea, select {
            width: 100%;
            padding: 10px;
            margin: 10px 0 20px;
            box-sizing: border-box;
            font-size: 1em;
        }
        textarea {
            height: 100px;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 12px 20px;
            cursor: pointer;
            font-size: 1em;
            border-radius: 5px;
        }
        .error {
            color: red;
            margin-bottom: 20px;
        }
        .prispevek {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            color: white;
            border-radius: 10px;
        }
        .prispevek h1 {
            margin: 0 0 10px;
        }
        .prispevek small {
            display: block;
            margin-top: 15px;
            font-style: italic;
        }
    </style>
</head>
<body>

<h2>Zanechte svůj příspěvek</h2>

<?php
if (count($chyby) > 0) {
    echo '<div class="error"><ul>';
    foreach ($chyby as $err) {
        echo "<li>" . htmlspecialchars($err) . "</li>";
    }
    echo '</ul></div>';
}
?>

<form method="post">
    <label for="text">Text:</label>
    <textarea name="text" id="text" required></textarea>

    <label for="autor">Autor:</label>
    <input type="text" name="autor" id="autor" required>

    <label for="barva">Barva pozadí:</label>
    <select name="barva" id="barva" required>
        <option value="">-- Vyberte barvu --</option>
        <option value="červená">Červená</option>
        <option value="zelená">Zelená</option>
        <option value="modrá">Modrá</option>
    </select>

    <input type="submit" value="Odeslat příspěvek">
</form>

<?php
$barvy = array(
    "červená" => "#e74c3c", // dle value v selectu se přiřadí barva - lze i přes if
    "zelená" => "#27ae60",
    "modrá" => "#3498db"
);

foreach ($prispevky as $radek) {
    if (count($radek) === 4) { // kontrola počtu sloupců
        // Zde se předpokládá, že CSV má strukturu: text, autor, barva, datum
        $text = htmlspecialchars($radek[0]); // htmlspecialchars pro bezpečné zobrazení textu
        $autor = htmlspecialchars($radek[1]);
        if (isset($barvy[$radek[2]])) {
            $barva = $barvy[$radek[2]];
        } else {
            $barva = "#333"; // výchozí barva, pokud není nalezena
        }
        $datum = htmlspecialchars($radek[3]);

        echo '<div class="prispevek" style="background-color:' . $barva . ';">';
        echo '<h1>' . $autor . '</h1>';
        echo '<p>' . $text . '</p>';
        echo '<small>Odesláno: ' . $datum . '</small>';
        echo '</div>';
    }
}
?>

</body>
</html>
