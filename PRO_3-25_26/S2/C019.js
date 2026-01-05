//Vytvořte SWITCH, pro volbu dnů v pracovním týdnu
// uživatel zadá do konzole den  -Po, Út, St, Čt, Pá - dle volby se pomocí SWITCHE do konzole vypíše jakou máte radost z toho že se blíží víkend

let den = prompt("Zadej den");

switch(den){
    case "po":
        console.log("Je pondělí, ale víkend je ještě daleko.");
        break;
    case "ut":
        console.log("Je úterý, ale víkend je ještě daleko.");
        break;
    case "st":
        console.log("Je středa, už je to polovina týdne.");
        break;
    case "ct":
        console.log("Je čtvrtek, zítra je pátek!");
        break;
    case "pa":
        console.log("Je pátek, víkend je tady!");
        break;
    default:
        console.log("Neplatný den, zadej prosím po, ut, st, ct nebo pa.");
        break;
}