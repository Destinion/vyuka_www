//uživatelský vstup z konzole - je vždy textový řetězec
let promenna = prompt("Ukázka prompt.", "Zkus něco napsat:");
// 1. text - je nad vstupem, 2. text je předvolba pokud něco nezadá uživatel
console.log(promenna);

let jmeno = prompt("Zadej jméno:");
console.log(jmeno);

//převod na správný datový typ
let cislo = prompt("Zadej číslo: ");
console.log(Number(cislo) + 5);