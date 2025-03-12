//Pomocí příkazu prompt vygenerujte jednoduchou aplikaci pro vítání uživatele

//Nejdřív se jej program zeptá - Jak se jmenuješ?
// Následně se uživatele zeptá na jeho věk
// Následně se uživatele zeptá na jeho email

//Následně se vše vypíše jako jeden textový řetězec ve formátu: "Dobrý den xxx, Váš uvedený email je xxx@xxx.com a je Vám xxx let" - věk bude ve formátu čísla

console.log("Dobrý den " + prompt("Zadej jméno") + ", Váš uvedený email je: " + prompt("Zadej email") + " a je Vám " + Number(prompt("Zadej věk")) + " let");