/*
1. 
Pomocí cyklu FOR nech uživatele zadat číslo N, program vypíše všechny čísla mezi 1 a N, oddělené čárkou (1, 2, 3, 4, 5, 6, 7, 8, ...)
*/

let n = Number(prompt("Zadej počet opakování: "));
let vypis = "";
for (let i = 1; i <= n; i++){  
    if (i < n){
        vypis += i + ", ";
    }else{
        vypis += i;
    }
}
console.log(vypis);

/*
2.
Pomocí cyklu for urči počet sudých čísel v intervalu od 1 do 100 včetně
*/

let pocet = 0;
for (let j = 1; j <= 100; j++){
    if (j %2 == 0){
        pocet++;
    }
}
console.log("Počet sudých čísel od 1 do 100 je: " + pocet);