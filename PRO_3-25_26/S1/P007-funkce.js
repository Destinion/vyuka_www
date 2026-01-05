//Funkce - jsou bloky kodu, které můžeme přivolat, zadat jim argumenty a opakovaně volat napříč kodem

console.log("Tato je ukázka funkce: ");

//1. Ukázka primitivní funkce
function nazev(){
    let hodnota = Number(prompt("Zadej číslo"));
    console.log((hodnota%2)==1);
}

nazev(); //přivolání funkce

//2. Ukázka funkce s parametry a return
function secti(a, b){
    let soucet = a + b; //tato proměnná není vidět mimo funkci
    //console.log(soucet);
    return soucet; // vrací hodnotu z funkce, nepovinné
}

secti(7, 3); //doplní do parametrů funkce a = 7, b = 3

console.log(soucet); // nebude nalezen - je uvnitř funkce
let prvni = 10;
let druha = 3;
console.log(secti(prvni, druha) + 20);

//3. Plná struktura
/*
function nazevFunkce(parametr1, parametr2, ...){
    kod funkce;
    return vysledek; - nepovinné, vrací hodnotu funkce, musí být na konci
}

nazevFunkce(hodnota1, hodnota2, ...); - volá funkci
*/

//3. Praktická funkce
function pozdrav(jmeno){
    console.log("Vítejte " + jmeno);
}

pozdrav(prompt("Zadej jméno"));
