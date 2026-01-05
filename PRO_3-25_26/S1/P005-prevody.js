let desetinny = "2.55";
let cislo = "3";

//převod jiného datové typu na další - parseFloat, parseInt, Number, toString
parseFloat(desetinny);

//převod na číslo - hodnota, 10/16 - značí číselnou soustavu
parseInt(cislo, 10);
console.log(cislo);

//Number - převod na číslo
let pomocna = Number("1564654678789");
console.log(pomocna);

//toString - převod na textový řetězec
let text = 454545;
toString(text);
console.log(text);

text.toString(); //toto převede hodnotu proměnné text na String