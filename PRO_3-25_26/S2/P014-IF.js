//Podmínka KDYŽ (IF) - slouží k větvení programu


//Základní struktura
let podminka = 5;
//u IF se v podmínce vždy musí objevit POROVNÁVACÍ OPERÁTOR
if (podminka > 0){
    console.log("Tento kod se spustí, pokud výsledek závorky s podmínkou je true");
}

if (podminka < 0){
    console.log("Tento kod se NEspustí pokud výsledek závorky s podmínkou je FALSE");
}

console.log("Venku je krásně!"); // tento kod je mimo IF -> spustí se vždy

//------------------------------
if (podminka > 5){
    //pokud je výstup TRUE
} else{
    //tento kod se spustí, pokud výstupem podmínky je FALSE
}

// ------------------------------

if (podminka > 5){
    //pokud je výstup TRUE
} else if (podminka < 5){
    //na tuto podmínku se program zeptá, pokud výstupem předchozí podmínky je FALSE
} else if (podminka === "5"){
    //na tuto podmínku se program zeptá, pokud výstupem předchozí podmínky je FALSE
} else{
    //tento kod se spustí, pokud výstupem podmínky před je FALSE
}

// Vnořené IF
if (podminka > 0){
    if (podminka < 10){
        console.log("Podmínka je větší než 0 a menší než 10");
    }
}

//------------------------------
//IF s logickým operátorem
let pohlavi = "Muž";
let vek = 18;

if (pohlavi == "Muž" && vek >= 18){
    //tento kod se spustí pokud je osoba Muž co má 18 let nebo starší
}
if (pohlavi == "Žena" || vek < 18){
    //tento kod se spustí pokud je osoba Žena nebo je osobě méně než 18 let
}