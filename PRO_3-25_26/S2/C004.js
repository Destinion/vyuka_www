//Vytvořte jednoduchou konzolovou aplikaci, kde uživatel zadá číslo a program mu vypíše pravdivostní hodnotu zda je číslo liché a zároveň vyšší než 4

let cislo = Number(prompt("zadej číslo:"));
console.log((cislo%2 == 1) && cislo > 4);