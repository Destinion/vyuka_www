const ovoce = ["Jahoda", "Maliny", "Banán", "Mango"];

ovoce[4] = "Borůvky";
console.log(ovoce);
console.log(ovoce[0]);

//Metody => manipulace s polem - zapisují se za název pole s tečkou
//1. length
let delka = ovoce.length; //počet položek v poli
console.log(delka);

//2. pop() - vymaže poslední prvek z pole
ovoce.pop();
console.log(ovoce);

//3. push() - přidá prvek na konec pole
ovoce.push("Mandarinka");
console.log(ovoce);

//4. shift() - odstraní prvek na indexu 0 a posune všechny prvky o jeden index dolů
ovoce.shift();
console.log(ovoce);

//5. unshift() - přidá prvek na index 0, ostatní posune o 1
ovoce.unshift("Jahoda");
console.log(ovoce);

//6. toString || join() - převede prvky na string
console.log(ovoce.toString());

console.log(ovoce.join(" a ")); //dovoluje vybrat vlastní oddělovač

//7. concat() - spojení dvou a více pole
const zelenina = ["Mrkev", "Rajče", "Okurka", "Květák", "Hrášek"];

const vegetarian = ovoce.concat(zelenina);
console.log(vegetarian);

//8. indexOf() - vyhledávání indexu prvku pole (první shoda)
console.log(vegetarian.indexOf("Okurka"));

let pozice = vegetarian.indexOf("Okurka");
vegetarian[pozice] = "Ředkvička";
console.log(vegetarian);

//9. lastIndexOf() - vyhledávání posledního shodného indexu prvku pole
console.log(vegetarian.lastIndexOf("Meloun"));

//10. sort() - seřadí prvky v poli abecedně/od nejmenší po největší
console.log(vegetarian.sort());

//11. reverse() - opak sort
console.log(vegetarian.reverse());

