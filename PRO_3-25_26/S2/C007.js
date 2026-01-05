//Pomocí funkcí v js vytvořte následující kodové snippety
// 1. Uživatel zadá své jméno, následně své příjmení
    // - po zadání se vypíše do konzole následující text: "Vítejte David s příjmením Novák"
// 2. Uživatel zadá dvě čísla, ty se následně mezi sebou vynásobí a jejich výsledek se vypíše do konzole

//Přivolejte nejdřív první a poté druhou funkci

function pozdrav(){
    let jmeno = prompt("Zadejte své jméno:");
    let prijmeni = prompt("Zadejte své příjmení:");
    console.log("Vítejte " + jmeno + " s příjmením " + prijmeni);
}

function nasobit(){
    let cislo1 = prompt("Zadejte první číslo:");
    let cislo2 = prompt("Zadejte druhé číslo:");
    console.log(Number(cislo1) * Number(cislo2));
}

pozdrav();
nasobit();