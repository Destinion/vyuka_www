<?php
$csvdata = 'data.csv';

// Funkce pro validaci datumu ve formátu YYYY-MM-DD
function isValidDate($date) {
    $d = DateTime::createFromFormat('Y-m-d', $date);
    return $d && $d->format('Y-m-d') === $date;
}

// Zpracování formuláře
$chyby = array();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $jmeno = '';
    if (isset($_POST['jmeno'])) {
        $jmeno = trim($_POST['jmeno']);
    }

    $prijmeni = '';
    if (isset($_POST['prijmeni'])) {
        $prijmeni = trim($_POST['prijmeni']);
    }

    $datum_narozeni = '';
    if (isset($_POST['datum_narozeni'])) {
        $datum_narozeni = trim($_POST['datum_narozeni']);
    }

    $vzdelani = '';
    if (isset($_POST['vzdelani'])) {
        $vzdelani = trim($_POST['vzdelani']);
    }

    // Validace vstupu
    if ($jmeno === '') {
        $chyby[] = "Jméno je povinné.";
    }
    if ($prijmeni === '') {
        $chyby[] = "Příjmení je povinné.";
    }
    if (!isValidDate($datum_narozeni)) {
        $chyby[] = "Datum narození musí být ve formátu RRRR-MM-DD.";
    }
    if ($vzdelani === '') {
        $chyby[] = "Vzdělání je povinné.";
    }

    // Pokud nejsou chyby, přidáme do CSV
    if (count($chyby) === 0) {
        $radky = array_map('str_getcsv', file($csvdata)); // Načte všechny řádky CSV souboru
        $posledni = end($radky); // poslední řádek CSV souboru
        $posledni_id = intval($posledni[0]); // poslední ID v CSV souboru

        $novyradek = array($posledni_id + 1, $jmeno, $prijmeni, $datum_narozeni, $vzdelani); // nový řádek s ID, jménem, příjmením, datem narození a vzděláním
        $f = fopen($csvdata, 'a');
        if ($f !== false) { 
            fputcsv($f, $novyradek); // Přidá nový řádek $novyradek do CSV souboru
            fclose($f);
        }

        header("Location: " . $_SERVER['PHP_SELF']); // Přesměrování na stejnou stránku, aby se formulář neodeslal znovu
        exit();
    }
}

// Načteme CSV data
$data = array_map('str_getcsv', file($csvdata)); //array_map - používá funkci str_getcsv na každý řádek CSV souboru
?>

<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <title>Seznam osob</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            background-color: #f5f5f5;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            background-color: #fff;
            margin-bottom: 30px;
        }
        th, td {
            padding: 12px;
            border: 1px solid #ccc;
        }
        th {
            background-color: #4CAF50;
            color: white;
        }
        h2 {
            color: #333;
        }
        form {
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ccc;
        }
        label {
            display: block;
            margin: 10px 0 4px;
        }
        input, select {
            padding: 8px;
            width: 100%;
            box-sizing: border-box;
        }
        .submit-btn {
            margin-top: 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer; /* kurzor myši */
        }
        .error {
            color: red;
            background-color: #ffe6e6;
            padding: 10px;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>

<h2>Seznam osob</h2>

<?php
echo "<table>";
if (count($data) > 0) {
    echo "<tr>";
    foreach ($data[0] as $hlavicka) {
        echo "<th>" . htmlspecialchars($hlavicka) . "</th>";
    }
    echo "</tr>";

    for ($i = 1; $i < count($data); $i++) {
        echo "<tr>";
        foreach ($data[$i] as $bunka) {
            echo "<td>" . htmlspecialchars($bunka) . "</td>"; // zobrazí text bez HTML tagů - lze i bez jen $bunka
        }
        echo "</tr>";
    }
}
echo "</table>";
?>

<h2>Přidat novou osobu</h2>

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
    <label for="jmeno">Jméno:</label>
    <input type="text" name="jmeno" required>

    <label for="prijmeni">Příjmení:</label>
    <input type="text" name="prijmeni" required>

    <label for="datum_narozeni">Datum narození (YYYY-MM-DD):</label>
    <input type="date" name="datum_narozeni" required>

    <label for="vzdelani">Vzdělání:</label>
    <select name="vzdelani" id="vzdelani" required>
        <option value="">-- Vyberte --</option>
        <option>Středoškolské bez maturity</option>
        <option>Středoškolské s maturitou</option>
        <option>Vyšší odborné</option>
        <option>Bakalářské</option>
        <option>Magisterské</option>
        <option>Doktorské</option>
    </select>

    <button type="submit" class="submit-btn">Přidat</button>
</form>

</body>
</html>

