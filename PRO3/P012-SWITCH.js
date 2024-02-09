let D;
let a = 1;
let b = 6;
let c = 2;

D = b*b - 4*a*c;
switch(D){ //switch(konkrétní volba)
    case 0: //určuje možnou hodnotu volby
        console.log("Diskriminant je roven 0");
    break; //ukončuje case
    //!!!!! UKÁZKA NEFUNKČNÍ CASE!!!!!! - musí být konkrétní volba
    case (D > 0): //
        console.log("Diskriminant je větší než 0");
        break;
    //--------------------------------------------------

    default: //všechny ostatní volby
        console.log("Diskriminant není roven 0");
    break;
}