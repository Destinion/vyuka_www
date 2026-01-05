//Opakování
function nazev_funkce(a, b){
	let soucin = a * b;
	return soucin;
}

nazev_funkce(5, 9);

// Const - přebije funkci
const pevna_hodnota = 3;
function konstanta(){
	let vysledek = pevna_hodnota + 5;
	return vysledek;
}
konstanta();

//Anonymní funkce - nemají pojmenovaný indetifikátor(název), ale může být předána jako argument do další funkce
let soucet = function(a, b){
	return a + b;
}
console.log(soucet(7, 2));


//Vnořená funkce
function vnorena(a, b){
	let soucet = function(a, b){
		return a + b;
	}
	return soucet(a, b); //lze volat funkce uvnitř rozsahu, nelze funkce mimo
}
vnorena(7, 3);

//Callback funkce - jsou předány, jako argument do dalších fcí a volány později
function ukazRozsah() {
	let lokalni_promenna = "Tato proměnná je viditelná jen uvnitř funkce";
	return lokalni_promenna;
}

let pomocna = ukazRozsah();
console.log(pomocna);
