//asynchronní zpracování - častokrát pracuje s eventy z HTMl souboru
function nazev_fce(){
    console.log("Spustí se při kliknutí");
    casovac();
}

//setTimeout - nastavuje interval spuštění v ms
setTimeout( function(){
    console.log("Proběhl odpočet!");
}, 10000)

//varianta volání funkce
function casovac(){
    setTimeout( function(){
        console.log("Proběhl odpočet po kliknutí!");
    }, 10000)
}