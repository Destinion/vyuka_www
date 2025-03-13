<!-- Cvičení 3: Jednoduchý výpočet pomocí PHP
Použijte PHP pro výpočet jednoduché operace a zobrazte výsledek na stránce.

Vytvořte proměnné $a a $b a přiřaďte jim čísla (např. 5 a 10).
Vypočítejte jejich součet a zobrazte na stránce výsledek ve formátu: "Součet čísel $a a $b je $vysledek."


Cvičení 4: Zobrazení dnešního data pomocí PHP
Použijte PHP k zobrazení aktuálního data na stránce.

Použijte funkci date() k zobrazení dnešního data ve formátu "Dnes je: [datum]." -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $a = 5;
        $b = 10;
        $vysledek = $a + $b;
        $datum = date("d/M/y");
    ?>
    <span>
        Součet čísel <?php echo $a." a ".$b." je ".$vysledek ?>
    </span>
    <span>
        Dnes je <?php echo $datum ?>
    </span>
   
</body>
</html>