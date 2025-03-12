let pohlavi = "žena";
let vek = 20;

//AND - a zároveň, musí se splnit vše
if (pohlavi=="žena" && vek < 20){
    console.log("Splněno AND");
}

//OR - nebo, stačí splnit jednu část
if (pohlavi == "muž" || vek == 20){
    console.log("Splněno OR");
}