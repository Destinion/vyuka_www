// Pomocí cyklu WHILE vytvořte kod, který bude vypisovat všechna sudá čísla od 1 do 100 včetně. S tím, že čísla, která se nevypíší stejně cyklem proběhnou (to znamená - žádné i += 2)

let i = 1;

while(i <= 100){
    if (i % 2 == 0){
        console.log(i);
    }
    i++;
}