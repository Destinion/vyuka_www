// Zkuste vytvořit webovou aplikaci, která funguje jako kalkulačka na +, -, *, /

//aplikace běží dokud jí uživatel neukončí pomocí výběru

//appka nejdřív nechá uživatele zadat dvě čísla. následně vybrat operaci a po výpočtu se ho zeptá zda si přeje operace zopakovat nebo aplikaci ukončit

//Ošetřete vstupy a dělení 0

let cislo1, cislo2, operace, volba;

do{
    cislo1 = Number(prompt("zadej číslo 1: ")); //prompt - výstup je vždy text
    cislo2 = Number(prompt("zadej číslo 2: "));
    operace = prompt("Vyber operaci: +, -, *, /");

    switch(operace){
        case "+":
            console.log(cislo1 + cislo2);
            break;
        case "-":
            console.log(cislo1 - cislo2);
            break;
        case "*":
            console.log(cislo1 * cislo2);
            break;
        case "/":
            if (cislo2 !== 0){
                console.log(cislo1 / cislo2);
            }else{
                alert("Nelze dělit nulou!");
            }
            break;
        default:
            console.log("Špatný formát výstupu");
            alert("Neumíš operandy magore!");
            break;
    }

    volba = prompt("Pro ukončení programu zadej x");
}while(volba !== "x" && volba !== "X");