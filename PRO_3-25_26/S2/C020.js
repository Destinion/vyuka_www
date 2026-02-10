/*
 Vytvořte jednoduchou konzolovou aplikaci, která umožní uživateli opakovaně zadávat příkazy, dokud nezadá "exit", což aplikaci ukončí. použijete aplikaci do...while

 info - Toto je testovací aplikace
 Vítek - Cokoliv
 exit - aplikace ukončí
 jiné - neznámý příkaz!


 Vykusová, Schneider, Keprt, Taclík - 1
*/

/* var A*/
let x;
do{
    x = prompt("zadej příkaz");
    if (x == "info"){
        alert("Toto je testovací aplikace");
    } else if(x == "Vítek"){
        alert("Cokoliv");
    } else if (x == "exit"){
        alert("Appka se ukončí")
    } else{
        alert("neplatný příkaz!")
    }
} while(x !== "exit");

/* var B */
let y;
do{
    y = prompt("zadej příkaz");
    switch (y){
        case "info":
            break;
        case "Vítek":
            break;
        case "exit":
            break;
        default:
            break;
    }
} while(y !== "exit");


