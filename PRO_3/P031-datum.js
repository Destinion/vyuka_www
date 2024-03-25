//deklarace objektu datum
const datum = new Date();

console.log(datum);

//Metody pro datum - dle výpisu hodnoty (varianta lokální)
console.log("Rok: " + datum.getFullYear());
console.log("Měsíc: " + (datum.getMonth() + 1));
console.log("Den v měsící: " + datum.getDate());
console.log("Hodiny: " + datum.getHours());
console.log("Minuty: " + datum.getMinutes());
console.log("Sekundy: " + datum.getSeconds());
console.log("Den v týdnu " + datum.getDay());

//Metody - UTC časové pásmo
console.log("Den v týdnu " + datum.getUTCDay());

//Nastavení času - SET
console.log("Měsíc: " + datum.setMonth(5));

