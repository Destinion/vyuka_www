let i = 0;
while(i < 10){
    console.log(i + 1);
    i++;
}

/*
while (podmínka - dokud platí, kod se opakuje){
    ..kod co se opakuje dokud podmínka platí
}
*/

/* POZOR na nekonečné cykly */
while (i != -5){
    console.log("Rajče");
}

/* while - při spuštění se nejdříve otestuje podmínka a pak se teprve provede blokový kod */
let x;
do{
    console.log("Jablíčko");
    x = prompt("Zadej x pro ukončení");
}while(x !== "x");
/*do..while - se řídí podmínkou, až po prvním provedení blokového kodu*/