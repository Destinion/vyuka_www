//převod teploty ze stupňů Celsia na Fahrenheita

//Uživatel zadá teplotu ve stupních Celsia a funkce ji převede na stupně Fahrenheita.

function prevodNaFahrenheita() {
    let celsius = Number(prompt("Zadejte teplotu ve stupních Celsia:"));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("Teplota " + celsius + " °C odpovídá " + fahrenheit + " °F.");
}
prevodNaFahrenheita();
