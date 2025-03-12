/*
Funkce - slouží k volání kodu. Lze použít opakovaně.
- používá se k volání části kodu opakovaně a v různých částech kodu
- kod funkce nic nedělá, dokud není přivolána 
Struktura funkce:
function nazevFunkce(parametr1, parametr2, ...){
    kod funkce;
    return vysledek; - nepovinné, vrací hodnotu z funkce
}
*/

//1. Ukázka funkce s parametry a return
function secti(a, b){
    let soucet = a + b;
    return soucet; 
}

secti(3, 5); // slouží k volání funkce

//2. Ukázka primitivní funkce
function vitej(){
    console.log("Dobrý den");
}

vitej();

//3. Praktická ukázka volání funkce
function pozdrav(jmeno){
    console.log("Vítejte " + jmeno);
}

pozdrav(prompt("Zadej jméno"));

//3. Použití hodnoty return
function vypocet(a, b){
    let soucet = a + b;
    return soucet; // specifikuje, co se vrátí volajícímu funkce - ukončuje funkci
}
let a = 5;
let b = 3;
vypocet(a, b);

