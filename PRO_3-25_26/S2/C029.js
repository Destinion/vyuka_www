//Vnořený cyklus FOR - obdélník z #
// Uživatel zadá počet řádků a počet sloupců
// podle toho se vygeneruje mřížka

let radky = Number(prompt("Zadej počet řádků: "));
let sloupce = Number(prompt("Zadej počet sloupců: "));
let pomocna = "";
for (let i = 0; i < radky; i++){
    for (let j = 0; j < sloupce; j++){
        pomocna += "#";
    }
    console.log(pomocna);
    console.log("");
    pomocna = "";
}