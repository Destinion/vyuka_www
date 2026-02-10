let i = 0;
while(i < 10){
    console.log(i + 1);
    i++;
}
/*
while (podmínka - dokud platí, kod se opakuje){
    ...kod co se opakuje dokud podmínka platí.
}
*/

/* Pozor na nekonečné cykly */
while (i != -5){
    console.log("Rajče");
}

/* while - při spuštění se nejdříve otestuje podmínka a pak se teprve provede kod */
let x;

do{
    console.log("Jablíčko");
    x = prompt("Zadej x pro ukončení");
}while(x !== "x");


// Použití break
// break - nucené ukončení cyklu během průběhu
let odpoved;
while (true){
    odpoved = prompt("Zadej stop pro ukončení");
    if (odpoved === "stop"){
        break;
    }
    console.log("Zadal jste:", odpoved);
}
console.log("Cyklus ukončen");