//deklarace pole
let pole = [];


//naplnění pole
for (let i = 0; i <= 20; i++){
    pole[i] = i*2; //pozice v poli pomocí indexu
}

//odstanění první položky
pole.shift();

//poslední položka fuč
pole.pop();



//seřazení pole odzadu
//pole.sort(); - od a do z
pole.reverse();

//přidání hodnoty na začátek
pole.unshift(40);


//Délka pole
console.log(pole.length);

//Výpis prvku na pozici 5
console.log(pole[4]);

//Výpis prvku na pozici 3
console.log(pole[2]);

//První shoda čísla 30
console.log(pole.indexOf(30))

//poslední shoda čísla 6
console.log(pole.lastIndexOf(6));

console.log(pole);


