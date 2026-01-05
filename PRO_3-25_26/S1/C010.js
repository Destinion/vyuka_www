// fahrenheit = (celsius * 9/5) + 32;

// funkce - převod teploty ze stupňů Celsia na Fahrenheita

//uživatel zadá ve funkci teplotu ve stupních Celsia, funkce jí následně převede dle vzorce na stupně Fahrenheita - následně necháte výsledek vypsat

//funkci přivolejte

function prevodStupnu(){
    let celsius = prompt("zadej teplotu v C");
    celsius = Number(celsius);
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("Teplota v C : " + celsius + ", teplota v F: " + fahrenheit);
}

prevodStupnu();