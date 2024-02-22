//while (podminka){} - opakuje se dokud platí podmínka
let i = 1;
while(i < 101){
    if (i%2 == 1){
        console.log(i);
    }
    else{
    }
    i++;
}


//pomocí while vypište násobky 7 v rozmezí od 1 do 250
let j = 0;
while (j < 251){
    if (j%7 == 0){
        console.log(j);
    }
    else{
    }
    j++;
}


//cyklus do - while
//vždy se spustí minimálně jednou bez podmínky, pak ji začne kontrolovat
let y = 0;
do{
    console.log("Programování je super a pan učitel Pacner je na nás moc hodný a k Vánocům mu chci dát flašku červeného vína")
}while(y > 1);