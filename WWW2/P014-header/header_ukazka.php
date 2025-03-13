<?php
    //header, musí být vždy umístěn na konci kodu

    // header("event/atribut/událost/změna nastavení");
    // exit/die - donutí ukončení skriptu po aplikaci header

    //header pro redirect
    header("Location: ../C001.php");
    exit;

    /* 
    Další použití:

    Nastavení typu obsahu:
    header("Content-type: application/pdf"); - nastavuje omezení spustitelného obsahu stránky
    readfile("dokument.pdf")

    Kešování

    a) Zákaz kešování
    header("Cache-Control: no-cache, no-store, must-revalidate");

    b) Kešování na určitou dobu
    header("Cache-Control: max-age = 600") - kešování na 10 minut
    */
?>