//Funkce na zjištění, zda je číslo sudé nebo liché

//Uživatel zadá číslo a funkce vypíše, zda je číslo sudé nebo liché.

function jeSudeNeboLiche() {
    let cislo = Number(prompt("Zadejte číslo:"));
    
    if (cislo % 2 === 0) {
        console.log("Číslo " + cislo + " je sudé.");
    } else {
        console.log("Číslo " + cislo + " je liché.");
    }
}

jeSudeNeboLiche();