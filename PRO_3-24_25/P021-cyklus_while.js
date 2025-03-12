/* while(podminka){
    ... kod ...
} */

let i = 0;
/*while - se opakuje dokud platí podmínka*/
while(i < 10){ 
    console.log(i); /*kod, který proběhne při každém opakování cyklu*/
    i++; /*zajišťuje, že cyklus bude časem ukončen*/
}

/* Jednoduché užití cyklu while */
// Sčítání ceny nákupu:
let castka = 0;
let suma = 0;
let hodnota;
while(hodnota !== "k"){
    hodnota = prompt("Zadej cenu produktu: ");
    if (hodnota < 0 || hodnota >= 0){
        castka = Number(hodnota);
        suma += castka; // suma = suma + castka
        console.log("Celková cena nákupu je: " + suma);
    }
}
