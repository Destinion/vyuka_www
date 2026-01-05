//Vytvořte kod v JS, kde na úvod zadá uživatel dvě čísla
//Následně vyrobte dvě funkce - součin a součet
// do těchto funkcí předejte uživatelské vstupy a nechte je provést výpočet
// Následně následně tyto výpočty zadáte jako parametry do společného console.log kde dojde k odečtení výsledné hodnoty součtu od hodnoty součinu => (soucin - soucet)

let cislo1 = Number(prompt("zadej první číslo"));
let cislo2 = Number(prompt("zadej druhé číslo"));

function soucin(a, b){
    return a * b;
}

function soucet(a, b){
    return a + b;
}

console.log(soucin(cislo1, cislo2) - soucet(cislo1, cislo2));

//Vytvořte z předchozích funkcí callback funkce. jejich hodnota následně načtěte do funkce dělit -> ve vzorci soucin/soucet
let funkce1 = soucin(cislo1, cislo2)
let funkce2 = soucet(cislo1, cislo2)

function delit(a, b){
    return a / b;
}

delit(funkce1, funkce2);