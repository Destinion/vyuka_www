//výpis průměru známek
const znamky = [1, 4, 5, 1, 1];
let celkem = 0;
for (let i = 0; i < znamky.length; i++){
    celkem = celkem + znamky[i];
}
let prumer = celkem/znamky.length;
console.log(prumer);