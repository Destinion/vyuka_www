//KDYŽ - slouží k větvení kodu

//základní struktura
let podminka = 5;

// u IF se v podmínce vždy musí objevit POROVNÁVACÍ operátor
if (podminka > 0){
    console.log("Tento kod se spustí pokud výsledek závorky s podmínkou je true")
}

if (podminka < 0){
    console.log("Tento kod se NEspustí pokud výsledek závorky s podmínkou je FALSE");
}


console.log("Venku je krásně!"); //tento kod je mimo IF -> spustí se vždy

let vek = 18;
if (vek > 18){
    console.log("Výstup podmínky je true");
} else if (vek < 18){
    console.log("Tento kod se spustí jedině pokud podmínka IF výjde false, a tato podmínka vyjde true");
} else if (vek == 18){
    console.log("Pokud předchozí podmínky vyšli false, tak se otestuje tento kod, zda lze spustit");
} else{
    console.log("Pokud vše před tímto vyjde FALSE, tak se spustím");
}

// -----------
//Vnořené IF
let pohlavi = "Muž";
vek = 20;

if (pohlavi == "Muž"){
    console.log("Tato osoba je muž");
    if (vek < 18){
        console.log("Osoba je nezletilá");
    } else{
        console.log("Osoba je zletilá");
    }
}

// Logické operátory pro více podmínek - && (AND), || (NEBO), ! (NOT)
if (pohlavi == "Muž" && vek > 18){
    console.log("Pokud je osoba Muž starší 18 let kod se spustí");
} else if (pohlavi == "Muž" || vek <= 18){
    console.log("Spustí se pokud platí alespoň jedna z podmínek");
}