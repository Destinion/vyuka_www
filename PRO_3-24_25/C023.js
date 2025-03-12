//Vytvořte kalkulátor průměrné známky pomocí cyklu FOR a pole

// Uživatel zadává počet známek dokud nezadá hodnotu 0
// Po zapsání všech známek se mu vypíše průměr

//BONUS: Pomocí IF nechte vypsat i hodnocení slovní: výborný, chvalitebný, dobrý, dostatečný, nedostatečný

let pole = [];
let cislo = 1;
let suma;
for (let i = 1; cislo > 0; i ++){
    if (i !== 1){    
        pole.push(cislo);
        suma += cislo;
    }
    
    cislo = prompt("Zadej známku");
    Number(cislo);
}

let prumer = suma/pole.length;
console.log(prumer);
