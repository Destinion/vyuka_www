//Podmínka IF = KDYŽ
// Slouží k větvení programu na splněnou a nesplněnou podmínku

let hodnota = "k";

if (hodnota > 5){
    //tento kod se provede když se splní podmínka. jinak zkusí else if
    console.log("Hodnota je vyšší 5");
} else if (hodnota < 5){
    console.log("Hodnota je menší než 5");
} else{
    //Ošetří všechny ostatní řešení
    console.log("Marko neví co je DUH");
}