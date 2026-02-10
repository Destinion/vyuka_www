// Zkuste vytvořit konzolovou aplikaci, která funguje jako kalkulačka na +, -, *, /

//aplikace běží dokud jí uživatel neukončí pomocí výběru

//appka nejdřív nechá uživatele zadat dvě čísla. následně vybrat operaci a po výpočtu se ho zeptá zda si přeje operace zopakovat nebo aplikaci ukončit - výlsedky se vypisují do console.log a i jako alert
let cislo1;
let cislo2;
let volba;
let ukonceni;
let vysledek;
do{
    cislo1 = Number(prompt("Zadej 1. číslo"));
    cislo2 = Number(prompt("Zadej 2. číslo"));
    volba = prompt("Vyber +, -, *, /");
    switch (volba){
        case "+":
            vysledek = cislo1 + cislo2;
            alert(vysledek);
            console.log(vysledek);
            break;
        case "-":
            vysledek = cislo1 - cislo2;
            alert(vysledek);
            console.log(vysledek);
            break;
        case "*":
            vysledek = cislo1 * cislo2;
            alert(vysledek);
            console.log(vysledek);
            break;
        case "/":
            vysledek = cislo1 / cislo2;
            alert(vysledek);
            console.log(vysledek);
            break;
        default:
            alert("Neplatná volba");
            break;
    }
    ukonceni = prompt("Přejete si ukončit program? x - ukončení");
}while(ukonceni !== "x" || ukonceni !== "X")