<?php
//Název CSV souboru - pro následné přivolání
$soubor = "data.csv";

// Otevření souboru pro výpis dat
$vypis = fopen($soubor, "r"); 
//$vypis - dočasná proměnná, do které je uložena informace, že je soubor připojený pro čtení
// fopen(cesta_k_souboru, práva) 
//práva - r (read), w (write), a (append)

// Kontrola, zda se podařilo otevřít soubor
if ($vypis == true){
    echo "<table border = 1>";
    echo "<tr>
    <th>ID</th>
    <th>jmeno</th>
    <th>prijmeni</th>
    <th>Datum narození</th>
    <th>vzdelani</th>
    <th>Občan ČR</th>
    ";

    //Čtení souboru po řádcích
    while(($radek = fgetcsv($vypis)) == true){
        echo "<tr>";
        foreach ($radek as $bunka){
            echo "<td>" . htmlspecialchars($bunka) . "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";
    //fgetcsv - loaduje data do php souboru
    // Ukončení připojení souboru
    fclose($vypis);
}




?>