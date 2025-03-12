//Pomocí funkcí v js vytvořte následující kodové snippety
// 1. Uživatel zadá své jméno, následně své příjmení
    // po zadání se vypíše do konzole následující text: "Vítejte Davids s příjmením Novák"
// 2. Uživatel zadá dvě čísla, ty se následně mezi sebou vynásobí a jejich výsledek se vypíše do konzole

//Přivolejte nejdřív první a poté druhou funkci

function pozdrav(){
    let jmeno = prompt("Zadej jméno:");
    let prijmeni = prompt ("zadej příjmení:");
    console.log("Vítejte " + jmeno + " s příjmením " + prijmeni);
}

pozdrav();

function nasobit(){
    let cislo1 = prompt("Zadej 1. číslo:");
    let cislo2 = prompt ("zadej 2. číslo:");
    Number(cislo1);
    Number(cislo2);
    return cislo1 * cislo2;
}

nasobit();