/* for (inicializace; podmínka; iterace){
    ...kod, co se opakuje...
} */

for (let i = 0; i < 10; i++){
    console.log(i);
}

// do závorky uvádíme veškerý kod, který se týká stanovení počtu opakování

/* Nekonečný cyklus */ 
for (let y = 0; y => 0; y++){
    console.log("Nespouštět");
}
let y;
//Atypické použití
for (
    let x = ""; // 1. aktivní - aplikuje se 1x
    x != "x"; // 2. aktivní - aktivuje se vždy při opakování cyklu 
    x = y // 4. aktivní - provede se na konci cyklu
){
    //3. aktivní - provede se po splnění podmínky
    console.log("Jablíčko");
    y = prompt("Zadej x pro ukončení");
}

//Vnořené for - používá se pro maticový tvar
for(let j = 0; j < 10; j++){
    for (let k = 0; k < 10; k++){
        console.log(k + ",");
    }
}