//Vytvoříte funkci, která bude na základě volby uživatele dělit dál kod
// 1 - zápis a následný výpis Jména a příjmení
// 2 - Výpis data narození Kanyeho Westa
// Jiné - uživatel znovu může vybrat z nabídky 1 nebo 2

//každá položka bude separátní funkce, která bude volaná
// Ošetřete další volby
// výběr hodnoty pomocí prompt 

let vybrano = prompt("vyber si: ");
volba(vybrano);

function volba (vybrano){
    switch(vybrano){
        case "1":
            udaje();
            break;
        case "2":
            kanye();
            break;
        default:
            navrat();
            break;
    }
}

function udaje(){
    let jmeno = prompt("zadej jméno");
    let prijmeni = prompt("zadej příjmení");
    console.log(jmeno, prijmeni);
    navrat();
}

function kanye(){
    console.log("Datum narození KW jhe 8.6. 1977");
    navrat();
}

function navrat(){
    let vybrano = prompt("vyber si: ");
    volba(vybrano);
}