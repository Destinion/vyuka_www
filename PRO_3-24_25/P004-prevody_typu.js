let desetinny = "2.55";
let cislo = "3";

//převod jiného datové typu na další - parseFloat, parseInt, Number, toString

//převod na desetinné číslo - float
parseFloat(desetinny);

//převod na číslo - hodnota, 10/16 - značí číselnou soustavu
parseInt(cislo, 10)

console.log(Number("-151555545"));
console.log(parseInt("F", 16));

//převod na číslo z libovolného typu
Number("15155645");

//převod na textový řetězec
let text = 45454;
toString(text);
console.log(text);

text.toString();