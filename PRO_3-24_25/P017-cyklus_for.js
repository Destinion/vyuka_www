// for (inicializace; podmínka; iterace){ ... }

// inicializace - spuštění/zahájení proměěnné nebo proměnných, které se používají při řízení cyklu
// podmínka - pokud je podmínka splněna, cyklus se opakuje. Jinak se ukončí
// iterace - akce, která se provede na konci každého cyklu

for (let i = 0; i < 10; i++){
    console.log("Hodnota i je nyní:", i);
}

//u cyklů je důležité, že podmínka musí být vždy dosažitelná. Nechceme nekonečné cykly

//Nechte vypsat všechny sudá čísla v intervalu 2 až 100
for (let j = 2; j <= 100; j++){
    if (j%2==0){
        console.log("Hodnota j je:", j);
    }
}