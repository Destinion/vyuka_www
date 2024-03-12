//1. Vytvořte proměnnou pole, která bude mít celkem 8 položek
//položky zadává v textovém datovém typu uživatel přes konzoli
//2. Po zapsání hodnot je nechte všechny vypsat
//3. Nechte vypsat pole s pozicí 2 jako samostatný prvek

//Zápis do pole z konzole
let pole = new Array();


for (let i = 0; i < 8; i++){
    pole[i] = prompt("Zadej hodnotu");
}

for (let i = 0; i < 8; i++){
    console.log(pole[i]);
}

console.log(pole[1]);