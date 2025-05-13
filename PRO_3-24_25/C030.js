// Zkuste vytvořit webovou aplikaci, která funguje jako kalkulačka na +, -, *, /

//aplikace běží dokud jí uživatel neukončí pomocí výběru

//appka nejdřív nechá uživatele zadat dvě čísla. následně vybrat operaci a po výpočtu se ho zeptá zda si přeje operace zopakovat nebo aplikaci ukončit

let prvni, druhy, vysledek;
let operand, podminka;
do{
    prvni = prompt("Zadej první číslo");
    druhy = prompt("Zadej první číslo");
    prvni = Number(prvni);
    druhy = Number(druhy);

    operand = prompt("Zadej operand +, -, *, /");
    switch(operand){
        case "+":
            vysledek = prvni + druha;
            console.log("Výsledek je: " + vysledek);
            break;
        default:
            console.log("Špatný operand");
            break;
    }
    podminka = prompt("Zadej exit pro ukončení");
}while(podminka !== "exit")