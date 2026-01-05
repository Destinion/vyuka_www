let cislo = prompt("Zadej číslo:");
cislo = Number(cislo);

switch(cislo){
    // case === hodnota_proměnné
    case 4:
        console.log("Pokud je hodnota proměnné cislo 4, tak mě uvidíš");
        break;
    case 2:
        console.log("Pokud je hodnota proměnné cislo 2, tak mě uvidíš");
        break;
    case "1":
        console.log("Pokud je hodnota proměnné cislo text '1', tak mě uvidíš");
        break;
    case 1:
        console.log("Nazdar");
        break;
    default:
        console.log("Tento kod je vidět, pokud se nespustil žádný z přechozích case.");
        console.log("DEFAULT je vždy na konci");
        break;
}
