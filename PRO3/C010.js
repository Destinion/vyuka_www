//deklarujte 3 proměnné s hodnotami:
    //Víno, polévka není Polívka, Meloun
//vytvoořte cyklus while s podmínkou i < 100
//cyklus bude vypisovat na každý lichý zápis hodnotu Víno,
//na každý sudý hodnotu Meloun
//Na každý 10 zápis hodnotu polévka není Polívka

let prvni = "Vino";
let druha = "Polívka není polévka";
let treti = "Meloun";

let i = 0;

while (i < 100){
    if (i%10 == 0){
        console.log(druha);
    }else if(i%2== 0){
        console.log(treti);
    }else{
        console.log(prvni);
    }
    i++;
}