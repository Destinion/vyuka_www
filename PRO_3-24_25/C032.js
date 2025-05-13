let podminka;
while (podminka !=0){
    console.log("Vítejte v interaktivním menu!")
    podminka = prompt("Zadej 1, 2, 3, 4, 5, 6 nebo 0 k ukončení");
    podminka = Number(podminka);

    //Menu volby
    switch(podminka){
        case 1:
            console.log("Cyklus FOR:");
            volba(); //volání funkce volba()
            break; //ukončení case
        case 2:
            console.log("Cyklus ForEach");
            cyklus_fe();
            break;
        case 3:
            console.log("Cyklus while");
            odpocet();
            break;
        case 4:
            console.log("Cyklus DO...WHILE");
            zacni_ted();
            break;
        case 5:
            console.log("Ověření hesla");
            heslo();
            break;
        case 6:
            console.log("Konstrukce SWITCH");
            tyden();
            break;
        case 0:
            console.log("Ukončení aplikace");
            break;
        default:
            console.log("Zadal jste špatnou hodnotu");
            break;

    }
}

function volba(){
    for (let i = 1; i <= 10; i++){
        console.log(i);
    }
}

function cyklus_fe(){
    let pole = ["Marko", "Gabriel", "Tomáš", "Michaela", "Já"];

    pole.forEach(function cyklus(prvek){
        console.log(prvek);
    })
}

function odpocet(){
    let cislo = 10;
    while(cislo > 0){
        console.log(cislo);
        cislo--;
    }
}

function zacni_ted(){
    let odpocet = 1;
    do{
        console.log(odpocet);
        odpocet++;
    }while(odpocet <= 5);
}

function heslo(){
    let vstup = prompt("Zadej heslo:");
    if (vstup == "abcd1234"){
        console.log("Gratuluji");
    } else{
        console.log("Špatné heslo");
        window.close(); //nemusíte umět
    }
}

function tyden(){
    let den = "pondělí";
    switch (den){
        case "pondělí":
            console.log("Dnes je pondělí");
            break;
        default:
            console.log("Dnes není pondělí");
            break;
    }
}