//Napište program, který na základě zadaného jazyka vypíše slovo měsíc v daném jazyce.
//1 - čeština
//2 - angličtina
//3 - němčina (der Mond)


let vyber = prompt("Zadej číslo od 1 do 3");

switch(vyber){
    case "1":
        console.log("Měsíc");
        break;
    case "2":
        console.log("Moon");
        break;
    case "3":
        console.log("der Mond");
        break;
    
    default:
        console.log("Špatně zadáno");
        break;
}