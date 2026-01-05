// fahrenheit = (celsius * 9/5) + 32

// funkce - převod teploty ze stupňů Celsia na stupně Fahrenheita
// uživatel zadá ve funkci teplotu v Celsius, funkce jí následně převede dle vzorce na stupně Fahrenheita - následně necháte výsledek vypsat jako textový řětězec (Teplota v C: xxx, Teplota v F: yyy)

function prevodTeplota(){
    let celsius = prompt("Zadej stupně C");
    celsius = Number(celsius);
    let fahrenheit = (celsius * 9/5) + 32;
    console.log("Teplota v C: " + celsius + ", Teplota v F: " + fahrenheit);
}

prevodTeplota();