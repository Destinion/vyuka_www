// spojení pole a seřazení abecedně
// /poté/
// výpis pozice vepřové
// počet ingrediencí
const zelenina = ["brambory", "mrkev", "paprika"];
const ingredience = ["škrob", "rajčatový protlak", "hořčice", "sojová omáčka", "sůl", "pepř"];
const maso = ["vepřové"];

let jidlo = zelenina.concat(ingredience, maso);

jidlo.sort();

console.log(jidlo.indexOf("vepřové"));
console.log(jidlo.length);
