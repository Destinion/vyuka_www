function pozdrav(){
    let jmeno = prompt("Zadej jméno");
    let prijmeni = prompt("Zadej příjmení");
    console.log("Vítejte " + jmeno + " s příjmení " + prijmeni);
    //console.log("Vítejte " + prompt("Zadej jméno") + " s příjmení " + prompt("Zadej příjmení"));
}

pozdrav();
let kilogramy = Number(prompt("Zadej hmotnost v kilogramech"));

function vypocetVahy(hmotnost){
    let libry = hmotnost * 2.20462;
    return libry;
}

vypocetVahy(kilogramy);

//B
let celsia = Number(prompt("Zadej celsia"));
function vypocetTeploty(teplota){
    let fahrenheit = (teplota * 9/5) + 32;
    return fahrenheit;
}

vypocetTeploty(celsia);

