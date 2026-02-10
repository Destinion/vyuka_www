// Napište program, který pomocí cyklu FOR spočítá součet čísel od 1 do 100 a vypíše výsledek.

// Pomocí cyklu for vypište do konzole násobky čísla 5 od 5 do 50.

//1.
let vysledek = 0;
for (let i = 1; i <= 100; i++){
    vysledek += i;
}

console.log("Součet čísel od 1 do 100 je: " + vysledek);

//2.A
for(let y = 0; y <= 50; y++){
    if (y % 5 == 0){
        console.log(y);
    }
}

//2.B
let b = 5;
let vystup = 0;
for(let a = 1; b <= 50; a++){
    vystup = 5 * a;
    b += 5;
    console.log(vystup);
}