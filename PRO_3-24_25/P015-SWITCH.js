//SWITCH - kontruktor = funguje na principu přesné volby přes case

let volba = 1;

// switch (proměnná, kde hledáme case)
switch (volba){
    case 1:
        console.log("Volba je 1");
        break; //je vždy na konci case
    case "1":
        console.log("Volba je string 1");
        break;
    case True:
        console.log("Volba má hodnotu True");
        break;
    default:
        console.log("Toto se spustí pokud není ani jeden vhodný case");
        break;
}