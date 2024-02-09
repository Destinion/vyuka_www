let x = 5;
let y = 3;
let z;

//if (podminka){
//  kod když je podminka splněná    
//}

if (x > y){ 
    console.log("x je větší než y");
}else if(x == y){
    console.log("x je rovno y");
}else {
    console.log("y je větší než x");
}

//Ukázka vnořené podmínky
if (x > y){ 
    console.log("x je větší než y");
    if (x%2==0){
        console.log("x je sudé");
    } else{
        console.log("x je liché");
    }
}else if(x == y){
    console.log("x je rovno y");
    if (x%2==0){
        console.log("x je sudé");
    } else{
        console.log("x je liché");
    }
}else {
    console.log("y je větší než x");
    if (x%2==0){
        console.log("x je sudé");
    } else{
        console.log("x je liché");
    }
}