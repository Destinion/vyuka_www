//Uživatel zadá na začátku počet čísel, která chce zadat
//program pomocí cyklu for následně nechá uživatele zadat čísla a sečte je dohromady
//Po ukončení cyklu se vypíše celková suma sečtených čísel

let pocet = Number(prompt("Zadej počet opakování"));
let soucet = 0;
for (let i = 0; i < pocet; i++){
    hodnota = prompt("Zadej hodnotu: ");
    hodnota = Number(hodnota);
    soucet = soucet + hodnota;
}

console.log(soucet);