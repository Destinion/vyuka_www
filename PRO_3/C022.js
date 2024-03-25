//c022 - odstranění duplikace v poli
let pole = [1, 3, 8, 3, 5, 4, 8, 11, 3];

//kontrola pole
for (let i = 0; i < pole.length; i++){
    let kontrola = pole[i];
    if(pole.indexOf(kontrola) == pole.lastIndexOf(kontrola)){
        console.log("Položka na pozici " + i + " nemá duplicity");
        //console.log(pole);
    }else{
        console.log("Nalezena duplicita na pozici: " + pole.indexOf(kontrola) + " a " + pole.lastIndexOf(kontrola));
        
        //Zachycení duplicity a uložení index 0
        let pomocna1 = pole[0];
        let pozice = pole.lastIndexOf(kontrola);
        let pomocna2 = pole[pozice];

        //Přemístění duplicitního prvku a odstranění
        pole[0] = pomocna2;
        pole[pozice] = pomocna1;
        pole.shift();

    }
    //BONUS - výpis na konci cyklu
    if(i == pole.length - 1){
        console.log("Výsledné pole: " + pole);
    }
}
