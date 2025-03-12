let pole = [];
let index;
let hodnota;
for (let i = 0; i < 10; i++){
    index = i;
    hodnota = i;

    pole[index] = hodnota;
    console.log(pole); 
}

let jpole = [0, 1, 2, 3, 4, 5, 6];
let dvojpole = [[1, 2, 3], 
                [4, 5, 6], 
                [7, 8, 9]];


//Deklarace a naplnění dvojrozměrného pole
let dpole = [];
let pomocna = 0;
for (let i = 0; i < 10; i++){ //dle podmínky bude počet řádku
    dpole[i] = []; //Stanovuje vytvoření řádku
    for (let j = 0; j < 10; j++){
        dpole[i][j] = pomocna; //Hodnota, která se píše do buněk
        pomocna++;
    }
}

console.log(dpole);

