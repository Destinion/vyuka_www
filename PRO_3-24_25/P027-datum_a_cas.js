//Deklarace objektu datum

const datum = new Date(); // vrátí současné datum
console.log(datum);

//Metody pro datum
console.log("Rok: " + datum.getFullYear());
console.log("Měsíc: " + (datum.getMonth() + 1));
console.log("Den v měsíci: " + datum.getDate());
console.log("Hodiny: " + datum.getHours());
console.log("Minuty: " + datum.getMinutes());
console.log("Sekundy: " + datum.getSeconds());
console.log("Den v týdnu: " + datum.getDay());

//Metoda - UTC časové pásmo
console.log("Hodiny UTC: " + datum.getUTCHours());

//Nastavení vlastního datumu
console.log("Úprava měsíce: " + datum.setMonth(8));

//Deklrace objektu nove_datum s vlastnoručně zapsaným datumem
let nove_datum = new Date("February 5, 2025 10:25:00");
console.log(nove_datum);

//Manipulace s datumy
console.log(datum > nove_datum); //Které datum je v minulosti
console.log(datum.getDate() - nove_datum.getDate()); //rozdíl v počtu dnů