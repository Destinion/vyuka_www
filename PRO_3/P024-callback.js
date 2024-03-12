//Callback funkce - asynchronní programování
//Funkce je předána jako argument, a je zavolána po dokončení operace

function ziskdat(callback){
    setTimeout(() => { //vytahuje data zevnitř funkce a volá je níže
        const data = "nějaká data";
        callback(data);
    }, 2000);
}

ziskdat((vystup) => {
    console.log(vystup);
});