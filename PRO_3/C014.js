//for
//Napište program, který vypíše násobky zadaného čísla do zadaného limitu.

let cislo = prompt("Zadej číslo");
let limit = prompt("Zadej limit");
let vystup = 0;

for (let i = 0; i <= limit; i++){
    vystup = cislo * i;
    console.log(vystup);
}

//Napište program, který vypíše všechna čísla od zadaného počátečního čísla do koncového čísla.

let zacatek = prompt("Zadej začátek");
let konec = prompt("Zadej konec");
let z;
for (z = zacatek; z <= konec; z++){
    console.log(z);
}