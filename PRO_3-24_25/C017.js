//uživatel zadá číselnou hodnotu od 0 do 100
//dle této hodnoty se pomocí cyklu for vygeneruje pravoúhlá pyramida složená ze znaků *


let pocet = prompt("Zadej počet *:");
Number(pocet);
let radek = "";

for (i = 0; i < pocet; i++){
    radek += "*"
    console.log(radek);
}