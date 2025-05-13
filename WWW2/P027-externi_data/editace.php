<?php
$soubor = "data.csv";
$prepsani = fopen($soubor, "w") //w - write, přepisuje celý obsah souboru

//Záloha dat pro uložení do CSV
$zaloha = [
    ["id","jmeno","prijmeni","datum_narozeni","vzdelani","obcan_cr"],
    [1,"Ondřej","Pacner","2004-12-27","Středoškolské s maturitou",True],
    [2,"David","Novák","2000-12-27","Středoškolské s maturitou",False],
    [3,"Karel","Kryl","2004-12-11","Základní",True]
];

//Kontrola, zde se soubor podařilo otevřít
if ($$prepsani == true){
    foreach ($zaloha as $radek){
        fputcsv($prepsani, $radek);
    }
}

?>