let prvni = 5;
let druha = 3;
let vysledek;

//OPERÁTORY V JS
//-----------------------------------
//1. Aritmetické operátory

//Sčítání (+)
vysledek = prvni + druha;
console.log(vysledek);

//pozor na string
vysledek = "5" + 3
console.log(vysledek);

//Odčítání (-)
vysledek = prvni - druha;
console.log(vysledek);

//Násobení (*)
console.log(5 * 3);

//Dělení (/)
console.log(5 / 3);

//Zbytek po dělení (%)
vysledek = prvni%druha;
console.log("Zbytek po dělení");
console.log(vysledek);

//Inkrementace (++) - to samé jako +1
vysledek = prvni++;
console.log(vysledek);

//Dekrementace (--) - to samé jako -1
vysledek = prvni--;
console.log(vysledek);

//Exponent (**)
console.log(5**2); //5 * 5

console.log(5**-2); //druhá odmocnina z 5

//-----------------------------------
//2. Přiřazovací operátory

//Přiřazení (=)
deklarace = 3;

//Není třeba tyto typy u přiřazení umět z paměti
//P. sčítání
vysledek = 3;
vysledek += 5; //vysledek = vysledek + 5;
console.log(vysledek);

//P. odčítání
vysledek = 3;
vysledek -= 5; //vysledek = vysledek - 5;

//P. násobení
vysledek = 3;
vysledek *= 5; //vysledek = vysledek * 5;

//P. dělení
vysledek = 3;
vysledek /= 5; //vysledek = vysledek / 5;

//P. zbytku po dělení
vysledek = 3;
vysledek %= 5; //vysledek = vysledek % 5;

//-----------------------------------
//3. Porovnávací operátory - výstup je true/false

//Porovnání hodnot (==)
vysledek = 3;
console.log(vysledek == 3);

//Porovnání hodnot a datového typu (===)
console.log(vysledek === "3");

//Porovnání nerovnosti hodnot
console.log(vysledek != 3);
console.log(vysledek != 5);

console.log(vysledek !="3"); //false
console.log(vysledek !=="3"); //true

//-----------------------------------
//4. Logické operátory - výstup je true/false + slouží pro spojení více operací

//Logický součin - AND (&&)
console.log(5 > 3 && 5 < 3); //false

//Logický součet - OR (||)
console.log(5 > 3 || 5 < 3); //true

//Logická negace - NOT
console.log(!(5 > 5));

//---------------------
//5. Podmínkové operátory - (podmínka ? "výstup true" : "výstup false")
console.log(5 == 5 ? "ano" : "ne");

//----------------------
//6. Operátory řetězců - slouží ke spojování textu
//Spojení řetězců (+)
console.log("Ahoj" + "světe");
console.log("Ahoj" + " " + "světe" + ".")

let x = "Ahoj";
let y = "světe";
console.log(x + y);
let vysledna = x + y;

//POZOR!
console.log(5 + "3");
console.log(5 - "3");
console.log("Ahoj světe" + 5)
console.log("Ahoj světe" - 5)
