<?php
//Pomocí cyklu for nechte vypsat čísla od 0 do 500, která jsou dělitelná 7 nebo 3


for($i = 0; $i < 501; $i++){
    if ($i%7 == 0 or $i%3 == 0){
        echo $i."<br>";
    }
}
?>