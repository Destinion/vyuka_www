//vytvořte 4 funkce: sčítat, odčítat, násobit a dělit
//nechte uživatele do konzole zadat dvě čísla
// následně se čísla aplikují do všech 4 funkcí a vypíše se do konzole vždy: "Výsledek operace xx je: "

function scitat(a, b){
	return a + b;
}

function odcitat(a, b){
	return a - b;
}

function nasobit(a, b){
	return a * b;
}

function delit(a, b){
	return a / b;
}

let prvni = Number(prompt("Zadej první číslo"));
let druha = Number(prompt("Zadej druhé číslo"));

console.log("Výsledek operace sčítat je: " + scitat(prvni, druha));
console.log("Výsledek operace odčítat je: " + odcitat(prvni, druha));
console.log("Výsledek operace násobit je: " + nasobit(prvni, druha));
console.log("Výsledek operace dělit je: " + delit(prvni, druha));