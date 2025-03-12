//vytvořte pole obsahující čísla od 1 do 6
//1. Přidejte na konec pole číslo 0
//2. Odstraňte 1. hodnotu v poli
//3. Seřaďte pole od nejvyšší hodnoty po nejnižší
//Necháte pole vypsat jako textov řetězec oddělený znakem " + "

let pole = [1, 2, 3, 4, 5, 6];
pole.push(0);
pole.shift();
pole.reverse();
console.log(pole.join(" + "));