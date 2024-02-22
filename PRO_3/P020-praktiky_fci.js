let x = prompt("Zadej hodnotu x");
let y = prompt("Zadej hodnotu y");

//převod na Int ze string
x = Number(x);
y = Number(y);

let operace = prompt("+, -, *, /");

vypocet(x,y,operace); //parametry se čerpají z předchozího kodu z globálních proměnných

function vypocet(x, y, operace){
    switch(operace){
        case "+":
            return x + y;
            
        case "-":
            return x - y;
            
        case "*":
            return x * y;
            
        case "/":
            return x / y;
            
        default:
            console.log("Zadali jste špatně hodnotu");
            break;
    }
}