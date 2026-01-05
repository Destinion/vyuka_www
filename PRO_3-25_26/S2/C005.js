// Vytvořte .js kod, který bude generovat funkci nasobit
// Uživatel zadá dvě čísla
//Následně se přivolá funkce nasobit a vypíše se do konzole výsledek násobení těchto dvou čísel

function nasobit(a, b){
	return a * b;
}

let prvni = Number(prompt("zadej číslo:"));
let druha = Number(prompt("zadej 2. číslo:"));

nasobit(prvni, druha);