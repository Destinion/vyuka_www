let pole = [];

for (let i = 0; i < 30; i++){
    pole[i] = i + 1;

    if (pole[i] %7 == 0){
        console.log(pole[i]);
    }
}

console.log(pole);

console.log(pole.length);
pole.push(31);
pole.pop();

console.log(pole[2]);
console.log(pole[4]);

console.log(pole.join(", "));

pole.sort();

console.log(pole);