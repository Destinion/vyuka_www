//JS - nejdřív nechte (mimo funkci) zadat uživatele jeho věk
// Následně přivolejte funkci, která jeho věk doplní do věty - "Mé jméno je Bruno, jsem z Rakouska a je mi " + xxx + " let"

let vek = Number(prompt("Zadej svůj věk"));

function vypis(a){
    console.log("Mé jméno je Bruno, jsem z Rakouska a je mi " + a + " let");
}

vypis(vek); //vezme proměnnou vek a nasadí jí do funkce jako argument a