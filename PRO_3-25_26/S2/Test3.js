function vitani(){
    let jmeno = prompt("Zadej jméno");
    let prijmeni = prompt("Zadej příjmení");
    console.log("Vítejte " + jmeno + " s příjmením " + prijmeni);
}

vitani();

let hmotnost = Number(prompt("Zadej hmotnost v kg"));

function prevodVahy(a){
    return a * 2.40462;
}

prevodVahy(hmotnost);