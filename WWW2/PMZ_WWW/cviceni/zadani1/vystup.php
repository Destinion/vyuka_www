<?php
// $_SERVER['REQUEST_METHOD'] - kontroluje, zda byl formulář odeslán metodou POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Získání údajů z formuláře
    if (isset($_POST['pocet_vstupenek'])) {
        $pocet_vstupenek = (int)$_POST['pocet_vstupenek'];
    } else {
        $pocet_vstupenek = 0;
    }
    
    if (isset($_POST['dny'])) {
        $vybrane_dny = $_POST['dny'];
    } else {
        $vybrane_dny = '';
    }
    
    if (isset($_POST['stan'])) {
        $rezervace_stan = true;
    } else {
        $rezervace_stan = false;
    }
    
    // Validace vstupních údajů
    if ($pocet_vstupenek < 1 || $pocet_vstupenek > 20) {
        echo "Počet vstupenek musí být mezi 1 a 20.";
        exit; // Zastaví skript, pokud je počet vstupenek mimo rozsah
    }
    if ($vybrane_dny == '') {
        echo "Musíte vybrat alespoň jeden den.";
        exit;
    }

    // Ceny vstupenek
    $cena_jeden_den = 900;  // Cena za jednu vstupenku na 1 den
    $cena_dva_dny = 1700;   // Cena za jednu vstupenku na 2 dny
    $cena_stan = 200;       // Cena za stan na den

    // Výpočet ceny vstupenek na základě vybraných dnů
    if ($vybrane_dny == 'oba') {
        $cena_vstupenky = $cena_dva_dny;  // Pokud vybral "Pátek a sobota", cena za 2 dny
    } else {
        $cena_vstupenky = $cena_jeden_den;  // Pokud vybral pouze pátek nebo sobotu, cena za 1 den
    }

    // Celková cena za vstupenky
    $celkova_cena = $pocet_vstupenek * $cena_vstupenky;

    // Pokud je rezervace na stan, přičteme cenu za stan
    if ($rezervace_stan) {
        $celkova_cena += $pocet_vstupenek * $cena_stan;
    }

    // Sleva 10% při 5 a více vstupenkách
    if ($pocet_vstupenek >= 5) {
        $sleva = 0.90; // Sleva 10%
    } else {
        $sleva = 1.00; // Bez slevy
    }

    // Cena po slevě
    $cena_sleva = $celkova_cena * $sleva;

    // Zobrazení výsledku
    ?>
    <!DOCTYPE html>
    <html lang="cs">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Potvrzení registrace</title>
        <link rel="stylesheet" href="vystup.css">
    </head>
    <body>

    <div class="potvrzeni_rezervace">
        <h2>Potvrzení registrace</h2>
        <p>
            <strong>Počet vstupenek:</strong> <?php echo $pocet_vstupenek; ?>
        </p>
        <p>
            <strong>Vybrané dny:</strong> <?php echo $vybrane_dny; ?>
        </p>
        <p>
            <strong>Rezervace na stan:</strong> <?php echo $rezervace_stan ? "Ano" : "Ne"; ?>
        </p> 
        <!--Ukázka ? - zkrácená podmínka, pokud je rezervace na stan (True), zobrazí se "Ano", jinak "Ne" - můžete přes if, nebo jen vypsat value podle zápisu -->
        <p>
            <strong>Cena bez slevy:</strong> <?php echo number_format($celkova_cena, 2); ?> Kč
        </p>
        <!-- Ukázka number_format pro formátování ceny na 2 desetinná místa -->
        <p>
            <strong>Cena se slevou:</strong> <?php echo number_format($cena_sleva, 2); ?> Kč
        </p>

        <form action="formular.html" method="get">
            <button type="submit" class="odeslani">Odeslat požadavek</button>
        </form>
    </div>

    </body>
    </html>
    <?php
}
?>
