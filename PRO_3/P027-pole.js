//deklarace pole - složitý datový typ
let cisla = new Array(); //nejdřív musíme zadat, že se jedná o datový typ pole

//2. způsob deklarace
let cisla2 = [];

//pole funguje na principu indexů - začíná položkou 0

//uložení hodnoty do pole
cisla[0] = 23; // v [] je souřadnice za = je hodnota

//výpis pole
console.log(cisla[0]);

//Více položek  v poli
cisla[1] = 2;
cisla[2] = 15;

//Vypíše objekt pole
console.log(cisla);

//Vypsání jednotlivých hodnot
console.log(cisla[0]);
console.log(cisla[1]);
console.log(cisla[2]);

//naplnění pole pomocí cyklu
for (let i = 0; i < 10; i++){
    cisla2[i] = i*2; //0, 2, 4, 6, 8
    console.log(cisla2[i]);
}

console.log(cisla2[4]);

console.log("-----------------------------");
//výpis hodnot z pole
for (let i = 0; i < 10; i++){
    console.log("Pozice čísla " + cisla2[i] + " je: " + i);
}