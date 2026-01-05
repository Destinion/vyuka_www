//Pomocí příkazu prompt vygenerujte jednoduchou aplikaci pro vítání uživatele

//Nejdřív se jej program zeptá - Jak se jmenuješ?
// Následně se uživatele zeptá na jeho věk
// Následně se uživatele zeptá na jeho email

//Následně se vše vypíše jako jeden textový řetězec ve formátu: "Dobrý den xxx, Váš uvedený email je xxx@xxx.com a je Vám xxx let" - věk bude ve formátu čísla

let jmeno = prompt("zadej jméno");
let vek = prompt("Zadej věk");
let email = prompt("Zadej email:");

console.log("Dobrý den " + jmeno + ", Váš uvedený email je " + email + " a je Vám " + Number(vek) + " let");