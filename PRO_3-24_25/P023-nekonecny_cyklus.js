// Aplikace spouští rovnou při načtení kodu
// Ukončuje se přes konzoli ze strany uživatele
// Dokud uživatel nenapíše slovíčko exit, tak se neukončí
let prikaz;
do{
    prikaz = prompt("Zadej info pro výpis nebo exit pro ukončení");
    if (prikaz === "info"){
        console.log("Toto je testoavcí appka");
    }else if (prikaz !== "info" && prikaz !== "exit") {
        console.log("Zadal jsi špatný příkaz. Zkus to znovu!");
    }
}while(prikaz !== "exit")