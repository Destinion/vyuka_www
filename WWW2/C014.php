<?php
$pocasi = $_POST["pocasi"];

if ($pocasi == "slunecno"){
    echo "Běž ven!";
} elseif ($pocasi == "dest"){
    echo "Vezmi si deštník";
} elseif ($pocasi == "snih"){
    echo "Stavíme sněhuláka";
} else{
    echo "Zůstaň doma";
}
?>