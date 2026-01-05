//Opakování
function nazev_funkce(jedna, dva){
	let deleni = jedna / dva;
	return deleni;
}

nazev_funkce(9, 3);

//Const - přebije funkci
const nemenna = 3;
function konstanta(){
	let vypocet = nemenna + 8;
	return vypocet;
}

konstanta();

//Anonymní funkce - nemají identifikátor (název), ale může být předána jako argument do další funkce
let soucet = function(a, b){
	return a + b;
}

console.log(soucet(7, 3));


//Vnořené funkce
function vnorena(a, b){
	let soucet = function(a, b){
		return a + b;
	}
	return soucet(a, b);
}

vnorena(11, 5);

//Callback funkce - jsou předány, jako argument do dalších fcí a mohou být volány později
function ukazRozsah(){
	let lokalni_promenna = "Tato proměnná je viditelná jen uvnitř funkce";
	return lokalni_promenna;
}

let pomocna = ukazRozsah();
console.log(pomocna);
