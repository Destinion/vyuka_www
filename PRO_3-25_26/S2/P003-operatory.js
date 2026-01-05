let prvni = 5;
let druha = 3;
let vysledek;

//OPERÁTORY V JS
//-------------------------------------
//1. Aritmetické operátory

//Sčítání (+)
vysledek = prvni + druha;
console.log(prvni + druha);
console.log(vysledek);

// !pozor na string
vysledek = "5" + 3;
console.log(vysledek);

//Odčítání (-)
vysledek = prvni - druha;
console.log(vysledek);
console.log(prvni - "3");

//Násobení (*)
console.log(5 * 3);

//Dělení (/)
console.log(5 / 3);

//Modulo - Zbytek po dělení (%)
vysledek = prvni%druha;
console.log("Zbytek po dělení:");
console.log(vysledek);

//Inkrementace (++) - to samé jako + 1
vysledek = 5;
vysledek++;
// vysledek = druha++; - nelze
console.log(vysledek);

//Dekrementace (--) - to samé jako - 1
vysledek = 5;
vysledek--;
console.log(vysledek);

//Exponent (**)
console.log(5**2); // 5 * 5
console.log(5**(1/2)); // druhá odmocnina z 5
console.log(5**-2);

//---------------------------------------
//2. Přiřazovací operátory
console.log("2. Přiřazovací operátory");

//Přiřazení (=)
let deklarace = 3;

//Není třeba umět z paměti tyto typy přiřazení
vysledek = 3;

vysledek += 5; // vysledek = vysledek + 5;
console.log(vysledek);
vysledek -= 3; // vysledek = vysledek - 3;
vysledek *= 2; // vysledek = vysledek * 2;
vysledek /= 5; // vysledek = vysledek / 5;
vysledek %= 5; // vysledek = vysledek % 5;


//----------------------
// 3. Porovnávací operátory - výstup true/false
console.log("3. Porovnávací operátory");

// >, <, <=, >=
// Porovnání hodnot (==)
vysledek = 3;
console.log(vysledek == 3);
console.log(prvni == druha);

//porovnání hodnot a datového typu (===)
console.log(vysledek === "3");

// Porovnání nerovnosti hodnot
vysledek = 3;
console.log(vysledek != 3);
console.log(vysledek != 5);

console.log(vysledek != "3"); //false
console.log(vysledek !== "3"); //true

//4. Logické operátory - výstup true/false + slouží pro spojení více operací porovnání
console.log("4. Logické operátory");

//Logický součin - AND (&&)
console.log(5 > 3 && 5 < 3); //false

//Logický součet - OR (||)
console.log(5 > 3 || 5 < 3); //true

//Logická negace - NOT (!)
console.log(!(5 > 5)); //true

console.log((!(5 > 5)) || (5 > 3) && (5 < 3)); // AND má přednost před OR

//-------------------------------------------------------
//5. Podmínkové operátory - (podmínka ? "výstup true" : "výstup false")
console.log(5 == 5 ? "ano" : "ne");

//--------------------------------
//6. Operátory řetězců - slouží ke spojování textu

//Spojení řetězců (+)
console.log("Ahoj" + "světe");
console.log("Ahoj" + " " + "světe" + ".");

let x = "Ahoj";
let y = "světe";
console.log(x + y);
let vysledna = x + y;

//POZOR!
console.log(5 + "3");
console.log(5 - "3");
console.log("Ahoj světe" + 5);
console.log("Ahoj světe" - 5);