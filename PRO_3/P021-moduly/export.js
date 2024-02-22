//zdroj kodu pro export

const veta = "Ahoj světe";

const cislo = 10;

function nasobeni(a, b){
    return a * b;
}

export {veta, cislo, nasobeni}; //zadávám co chci z funkce exportovat - proměnné, fce, atd
