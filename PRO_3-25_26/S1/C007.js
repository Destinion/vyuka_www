// Vytvořte .js kod, který bude generovat funkci nasobit
// Uživatel zadá dvě čísla
//Následně se přivolá funkce nasobit a vypíše se do konzole výsledek násobení těchto dvou čísel


function nasobit(a, b) {
	let soucin = a * b;
	return soucin;
}

let prvni = Number(prompt("zadej 1. číslo:"));
let druha = Number(prompt("Zadej 2. číslo:"));

nasobit(prvni, druha);