//Promises - Asynchronní programování
//Objekt - představuje hodnotu, která je dostupná ihned nebo po dokončení asynchronní operace

function ziskdat(){
    return new Promise((vyresit, vratit) => { //promise - název objektu (může být dle nás)
    //Objekt = obsahuje více datových typů (příklad: datum, pole, více txt řetězců)

    setTimeout(() =>{
        const data = "nějaká data";
        vyresit(data);
    }, 2000);
    });
};

ziskdat().then((vystup) =>{
    console.log(vystup);
});