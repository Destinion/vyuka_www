//while
//Napište program, který spočítá součet čísel od 1 do zadaného čísla.

let zadaneCislo = prompt("Zadej číslo");
let soucet = 0;
let i = 1;

while (i <= zadaneCislo){
    soucet += i;
    i++;
    console.log(soucet);
}