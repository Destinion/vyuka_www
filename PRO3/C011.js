//IF
//Napište program, který ověří, zda je zadané číslo sudé či liché. Uživatel zadává čísla a program vypisuje výsledek do konzole.




let i = prompt("Zadejte číslo"); //ruční zadávání od uživatele

if (i%2==0){
    console.log("Vaše číslo je sudé")
} else{
    console.log("Vaše číslo je liché")
}

//Napište program, který vypíše dvojnásobek čísla zadaného od uživatele
let j = prompt("Zadejte číslo"); //ruční zadávání od uživatele

if (j < 0 || j== 0 || j > 0){
    let y = 2*j;
    console.log("Dvojnásobek čísla je " + y)
} else{
    console.log("Není to číslo");
}