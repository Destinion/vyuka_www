<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nickname = $_POST['nickname'];
    $heslo = $_POST['heslo'];
    $vyber = $_POST['uroven'];

    echo "Váš nick je: <strong>". $nickname. "</strong><br>";
    echo "Vaše heslo je: <strong>". $heslo. "</strong><br>";
    echo "Váš lvl je: <strong>". $vyber. "</strong>";
}
?>