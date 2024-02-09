let promenna = prompt("Zadej číslo");

if (promenna >= 0 || promenna < 0){
    promenna = promenna * 2;
    console.log(promenna);
}else{
    console.log("Špatný formát čísla");
}