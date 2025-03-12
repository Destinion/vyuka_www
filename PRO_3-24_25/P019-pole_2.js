let cisla = [];
let soucet = 0;

for (let i = 0; i < 10; i++){
    cisla.push(i);

    //Součet čísel
    soucet += i;
}

//další výpisy - pak přidat length, sum, max, min

console.log(cisla.length);
console.log("Součet čísel z cyklu je: ", soucet);

//MIN a MAX bez BUBBLE SORT
cisla.sort(); // seřadí hodnoty od nejnižší po nejvyšší
console.log("Nejnižší hodnota v poli je:", cisla[0]); // Výpis nejnižší hodnoty

let index = cisla.length - 1; //vezme celkový počet položek pole, odečte 1 a díkys tomu získá skutečný index poslední položky
console.log("Nejvyšší hodnota v poli je:", cisla[index]);