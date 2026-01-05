//Funkce - jsou bloky kodu, které můžeme přivolat, zadat jim argumenty a opakovaně je volat napříč kodem


//1. Primitivní funkce
function nazev(){
	let hodnota = Number(prompt("zadej číslo: "));
	console.log((hodnota%2)==1);
}

nazev(); //přivolání funkce


//2. Funkce s parametry a hodnotou return
function secti(a, b){
	let soucet = a + b; //tato proměnná, není vidět mimo rozsah funkce
	//console.log(soucet);
	return soucet; // vrátí hodnotu z fce, a ukončí fce
}

secti(7, 3);
//console.log(soucet); - nebude vidět mimo scope
let prvni = 10;
let druha = 3;
console.log(secti(prvni, druha) + 20);


//Kompletní struktura funkce
/*
function nazevFunkce(parametr1, parametr2, ..){
	kod funkce;
	return vysledek; - nepovinné, vrací hodnotu z funkce, ukončuje funkci
}

nazevFunkce(hodnota1, hodnota2, ...); - přivolání funkce
*/

function pozdrav(jmeno){
	console.log("Vítejte " + jmeno);
}

pozdrav(prompt("Zadej jméno:"));