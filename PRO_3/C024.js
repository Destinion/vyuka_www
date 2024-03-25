//vytvořte si pole s následující hodnotami:
// Mrkev, veverka, polívka, ježibaba
//vytvořte druhé pole s hodnotami:
// zajíček, salátek, sova

//Spojte obě pole do jednoho výsledného a seřaďte položky abecedně
//následně nechte nové pole vypsat s tím, že položky budou odděleny pomocí pomlčky

let pole1 = ["Mrekv", "veverka", "Petr Polívka", "Ježibaba"];
let pole2 = ["Zajíčřek", "salátek", "sova"];

let novepole = pole1.concat(pole2);

novepole.sort();


console.log(novepole.join(" - "));