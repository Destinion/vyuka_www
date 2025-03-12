//Pomocí cyklu DO While. se uživatele zeptejte zda chcce přesw konzoli vypsat násobky čísla x

//a jako podmínku uveďte počet opakování 10.
//Cyklus je vytvořen tak, že se vypíše pouze zadané číslo x1 a následně se cyklus ukončí splněním podmínky

let vstup = prompt("Zadej násobek");
vstup = Number(vstup);
let podminka = 11;
let vysledek = 0;
do{
    vysledek = vstup * podminka;
    console.log(vysledek);
    podminka++;
}while(podminka < 10)