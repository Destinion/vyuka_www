/*
for (inicializace; podmínka; iterace){
    ...kod,co se opakuje...
}
*/

for (let i = 0; i < 10; i++){
    console.log(i);
}

// do závorky uvádíme veškerý kod, který se týká stanovení počtu opakování

/*Nekonečný cyklus*/
for(let y = 0; y => 0; y++){
    console.log("Nespouštět");
    y = 0;
    console.log(y);
}