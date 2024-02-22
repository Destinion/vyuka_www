document.getElementById("cele_cislo").innerHTML = "let cele_cislo = 1;";
document.getElementById("text").innerHTML = 'let text = "Ahoj světe";';
document.getElementById("desetinne_cislo").innerHTML = "let desetinne_cislo = 1.5;";
document.getElementById("pravdivost").innerHTML = "let pravdivost = true;";
document.getElementById("datum").innerHTML = "const datum = new Date();"; // složitější datový typ - deklarace pomocí new Date()
// new = vytvoří nový objekt

// Deklarace proměnných
let cele_cislo = 1; 
document.getElementById("v-cele_cislo").innerHTML = cele_cislo;
let text = "Ahoj světe";
document.getElementById("v-text").innerHTML = text;
let desetinne_cislo = 1.5;
document.getElementById("v-desetinne_cislo").innerHTML = desetinne_cislo;
let pravdivost = true;
document.getElementById("v-pravdivost").innerHTML = pravdivost;
const datum = new Date();
document.getElementById("v-datum").innerHTML = datum;
