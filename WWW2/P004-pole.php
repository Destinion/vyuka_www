<?php
//Deklarace datového typu pole
$pole = array('jablko', 'hruška', 'banán');
$zkracene_pole = ['Ukázka1', 'Ukázka2'];

// Výpis pole
print_r($pole);
echo "<br>";
//Výpis prvku pole - pomocí indexu
echo $pole[0];
echo $pole[2];

echo "<br>";
//Přidání prvku na poslední pozici v poli
$pole[] = 'meloun';
array_push($pole, "mango", "kiwi");


//přidání prvku na konkrétní pozici v poli - přepíše existující hodnotu na pozici, pokud je nějaká
$pole[0] = 'pomeranč';
print_r($pole);

echo "<br>";
echo "<br>";
//Deklarace vícerozměrného pole
$viceroz_pole = array(
    array(1, 2, 3),
    array(4, 5, 6),
    array(7, 8, 9)
);
print_r($viceroz_pole);


//------------------------------------
//Příkazy/funkce pro manipulaci s polem

echo "<br>";
//1. Výpis pole
print_r($pole);

echo "<br>";
//2. Výpis prvku v poli - dle indexu
echo $pole[1];

echo "<br>";
//3. Přidání prvku na poslední pozici v poli
$pole[] = 'jahoda';

//4. Přepsání prvku na pozici v poli
$pole[0] = 'broskev';

//5. Výpočet celkového počtu prvků v poli - count
echo count($pole);

$pole_2 = array(1, 2, 3);
//6. Sčítání hodnot pole - array_sum
echo "<br>Celkový součet pole_2 je: ";
echo array_sum($pole_2);

//7. Průměr hodnot v poli - pouze pro čísla
$vysledek = array_sum($pole_2) / count($pole_2);

echo "<br>Průměr pole je: ";
echo $vysledek;

echo "<br>";
//8. Odebrání duplicitních hodnot v poli - array_unique
$pole_3 = array("Banán", "Jablko", "Citron", "Banán");
$pole_nove = array_unique($pole_3);
print_r($pole_nove);

echo "<br>";
//9. Odebrání prvků v poli - pop, shift, unset
array_pop($pole_nove); //odebírá poslední prvek v poli
echo "Pole s array_pop: ";
print_r($pole_nove);

echo "<br>";
array_shift($pole_nove); // odstraní první prvek v poli
echo "Pole s array shift: ";
print_r($pole_nove);

unset($pole_nove[0]); // odstraňuje prvek v poli na určité pozici
echo "<br>";
echo "Pole s unset [0]: ";
print_r($pole_nove);

// 10. Spojení více polí dohromady - array_merge
$pole_nove = array_merge($pole, $pole_nove);
echo "<br>";
echo "Spojení polí pomocí array_merge";
print_r($pole_nove);

echo "<br>";
// 11. Řazení pole - sort, rsort, asort, ksort
$razene_pole = array(1, 10, 11, 23, 7, 8, 9);
sort($razene_pole); // seřadí prvky od nejmenšího/A do největšího/Z
print_r($razene_pole);
rsort($razene_pole); // opačné sort

echo "<br>Výstup pole: ";
print_r($pole);

echo "<br>";
//12. Výstup pole jako řetězec - implode (oddělovač, nazev_pole)
$pole_text = implode(", ", $pole);
echo $pole_text;



?>