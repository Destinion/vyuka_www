let pole = [];

for (let i = 0; i < 30; i++){
    pole[i] = i+1;
}

for (let j = 0; j < 30; j++){
    if (pole[j] %7 == 0){
        console.log(pole[j]);
    }
}

console.log(pole.length);
pole.push(31);
pole.pop();

console.log(pole);

console.log(pole[2]);
console.log(pole[4]);

console.log(pole.join(", "));
pole.sort();
console.log(pole);