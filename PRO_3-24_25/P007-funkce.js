//Opakování
function nazev() {
    console.log("Ahoj světe");
}

nazev();

//Anonymní funkce - nemají pojmenovaný identifikátor, ale může být předána jako argument do jiné funkce
let soucet = function(a, b) {
    return a + b;
}

console.log(soucet(7, 2));


function vnorena(a, b){
    // nazev(); // tato funkce se nepřivolá - není stanovena uvnitř bloku kodu
    let soucet = function(a, b) {
        return a + b;
    }
    return soucet(a, b);
}

vnorena(7, 3)

//Callback funkce - jsou předávány jako argument do dalších fcí a volány později

function ukazScope() {
    let lokalni_promenna = "Tato proměnná je viditelná pouze uvnitř funkce";
    return lokalni_promenna; //vrátí obsah funkce
}

let pomocna = ukazScope();

console.log(pomocna);