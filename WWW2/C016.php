<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>C016</title>
</head>
<body>
    <form action="" method="post">
        <label for="operace">Vyber operaci: </label>
        <select name="operace">
            <option value=""></option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select><br>
        <input type="number" name="prvni" required><br>
        <input type="number" name="druhy" required><br>

        <input type="submit" value="Odeslat">
    </form>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $operace = $_POST['operace'];
            $prvni = $_POST['prvni'];
            $druhy = $_POST['druhy'];

            switch($operace){
                case "+":
                    echo $prvni + $druhy;
                    break;
                case "-":
                    echo $prvni - $druhy;
                    break;
                case "*":
                    echo $prvni * $druhy;
                    break;
                case "/":
                    if ($druhy == 0){
                        echo "Nelze dělit nulou!";
                    } else{
                        echo $prvni / $druhy;
                    }
                    break;
            }
        }
    ?>
</body>
</html>