//Deklarace JSON v JS

class Zamestnanec {
    constructor(jmeno, vek){
        this.jmeno = jmeno;
        this.vek = vek;
    }
}

//Vytvoření instance třídy, která má formát JSON
const Maximilian = new Zamestnanec("Maximilián", 25);
//JSON podporuje tyto datové typy: String, Number, object, boolean, null a array

//Přivolání JSON v JS
document.write('${Maximilian.jmeno}, ${Maximilian.vek}');

//Převod JSON na spustielný formát v HTML
const zpracovana_data = JSON.stringify(Maximilian);
document.write(zpracovana_data);

/* 
Vzhled v souboru JSON
[
    "promenna": "Maximilian"
    {
        "jmeno": "Maximilián",
        "vek": 25
    }
]
*/