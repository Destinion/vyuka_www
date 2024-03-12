//Deklarujte pole, kde bude moci uživatel přes konzoli zapsat počet položek pole a následně se pole zaplní sudými čísly
//nechte vypsat pole přes cyklus for
//začíná výpis hodnotou 2

let pole = new Array();
let podminka = prompt("Zadej počet opakování:");
podminka = Number(podminka);

for (let i = 1; i < podminka; i++){
    pole[i] = i*2;
    console.log(pole[i]);
}