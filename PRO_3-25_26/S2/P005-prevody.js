//Převody jednotek
let desetinny = "2.55";
let cislo = "3";

//Převody datových typů - parseFloat, parseInt, Number, toString

//převod na desetinné číslo - float
parseFloat(desetinny);

console.log(desetinny); //toto je pořád string, parseFloat proběhl zvlášť

//převod na číslo - hodnota, 10/16 - značí číselnou soustavu
console.log(parseInt(cislo, 10));

console.log(parseInt("F", 16));
console.log(Number("-1515546565"));

//převod na číslo z libovolného typu
Number("11655646545");

//převod na textový řetězec
let text = 45454;
toString(text);
console.log(text); //stále INT

text.toString(); // lepší text = toString(text) - není závislé na režimu browseru