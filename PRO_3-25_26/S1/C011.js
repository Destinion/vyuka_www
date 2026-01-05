//Vytvořte kod v JS, kde na úvod zadá uživatel dvě čísla
//Následně vyrobte dvě funkce - součin a součet
// do těchto funkcí předejte uživatelské vstupy a nechte je provést výpočet
// Následně následně tyto výpočty zadáte jako parametry do společného console.log kde dojde k odečtení výsledné hodnoty součtu od hodnoty součinu => (soucin - soucet)

let prvni = Number(prompt("Zadej první číslo"));
let druha = Number(prompt("Zadej druhé číslo"));

function soucin(a, b){
    return a * b;
}

function soucet(a, b){
    return a + b;
}

/*soucin(prvni, druha); přivolá funkci, zapíše hodnoty proměnných do parametrů
let vysledek1 = soucin(prvni, druha);
let vysledek2 = soucet(prvni, druha);
*/

console.log(soucin(prvni, druha) - soucet(prvni, druha));
//console.log(vysledek1  - vysledek2);

