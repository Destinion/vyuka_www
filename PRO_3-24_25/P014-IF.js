//Vnořené IF

let volba = prompt("Zadej pohlaví - muž, žena, jiné");

if (volba == "muž"){
    let vek = prompt("Zadej věk číselně");
    Number(vek);

    if (vek => 18 && volba == "muž"){
        console.log("Jste zletilý");
    } else{
        console.log("Jste nezletilý");
    }
} else if (volba == "žena"){
    console.log("Vítejte!");

} else if (volba == "jiné"){
    console.log("Gutten Tag");

} else{
    console.log("Špatná hodnota");
}