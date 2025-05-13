const btn = document.querySelectorAll('.tlacitko');
//tvorba objektu btn, který obsahuje všechny prvky s class tlacitko

btn.forEach(function(tlacitko){
    tlacitko.addEventListener('click', function(){
        //pro každou dočasnou proměnnou tlacitko se nám nastaví event listener onClick
        alert('Kliknul jsi na tlačítko!');
    })
})