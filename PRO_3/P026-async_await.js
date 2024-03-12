//Async/Await - Asynchronní programování
//Slouží pro zjednodušení promise

function ziskdat(){
    return new Promise((vyresit, vratit) => {
    

    setTimeout(() =>{
        const data = "nějaká data";
        vyresit(data);
    }, 2000);
    });
};

async function datovyproces(){
    const vystup = await ziskdat();
    console.log(vystup); //Tyto data se zpracují po konci operace
}

ziskdat();

