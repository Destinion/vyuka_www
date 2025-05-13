//cyklus forEach 
// - používá se pro pole a objekty
// - jeho počet opakování je stanoven datovým typem objektu/pole a obsahem tohoto objektu/pole

// pole.forEach(function(argumenty) {
//      ...tělo cyklu...
// });

const pole = [1, 2, 3, 4, 5, 7];

pole.forEach(function(prvek){ //argument, představuje hodnotu z pole, protože cyklus foreach, je vytvořen tak, aby chápal že pole má indexy a položky dle nich rozdělil;
    console.log(prvek); // => při každém opakování cyklu, se vypíše prvek s indexem +1
});

/*užití for místo foreach*/
for (let i = 0; i < pole.length; i++){
    console.log(pole[i]);
}

