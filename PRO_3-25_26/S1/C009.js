//Pomocí funkcí v js vytvořte následující kodové snippety
// 1. Uživatel zadá své jméno, následně své příjmení
    // po zadání se vypíše do konzole následující text: "Vítejte David s příjmením Novák"
// 2. Uživatel zadá dvě čísla, ty se následně mezi sebou vynásobí a jejich výsledek se vypíše do konzole

//Přivolejte nejdřív první a poté druhou funkci

function prvni(){
	let jmeno = prompt("Zadej jméno");
	let prijmeni = prompt("Zadej příjmení");
	console.log("Vítejte " + jmeno + " s příjmením " + prijmeni);
}

function druha(){
	let cislo1 = Number(prompt("zadej číslo 1:"));
	let cislo2 = Number(prompt("zadej číslo 2:"));
	return cislo1 * cislo2;
}

prvni();
druha();