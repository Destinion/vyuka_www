//SWITCH
//Napište program, který na základě zadané známky vypíše textový popis hodnocení. - výborně, chvalitebný, dobrý, dostatečný, pápá

let vyber = prompt("Zadej číslo od 1 do 5");

switch(vyber){
    case "1":
        console.log("Výborně");
        break;
    case "2":
        console.log("chvalitebný");
        break;
    case "3":
        console.log("dobrý");
        break;
    case "4":
        console.log("dostatečný");
        break;
    case "5":
        console.log("pápá");
        break;
    default:
        console.log("Špatně zadáno");
        break;
}