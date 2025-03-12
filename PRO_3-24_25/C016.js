// uživatel zadá den
// pomocí switche se mu vypíše pro dny pondělí až středa: "Dobrá volba" 
// jinak "Neplatný den"

let den = prompt("Zadej den");

switch (den) {
    case "pondělí":
        console.log("Dobrá volba");
        break;
    case "úterý":
        console.log("Dobrá volba");
        break;
    case "středa":
        console.log("Dobrá volba");
        break;
    default:
        console.log("Dnes není žádný z uvedených dnů.");
        break;
}