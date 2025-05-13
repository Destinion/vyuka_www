<?php
    $heslo = $_POST['heslo'];
    if ($heslo == "abcd1234"){
        $prihlasen = True;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Druhý formulář</title>
</head>
<body>
<?php
        if ($prihlasen == True) : 
    ?>
    <h2>
        <form action="#" method="GET">
            <input type="text" name="jmeno" placeholder="zadej jméno">
            <input type="text" name="prijmeni" placeholder="zadej příjmení">
            <input type="submit" value="Zadej">
        </form>
        
    </h2>
    <?php
        else :
    ?>
    <h2>Přihlašte se prosím</h2>
    <?php
        endif;
    ?>
</body>
</html>

<?php
            if ($_SERVER["REQUEST_METHOD"] == "GET"){
                //sběr dat z HTML frm
                $prihlasen = True;
                $jmeno = $_GET["jmeno"];
                $prijmeni = $_GET["prijmeni"];
                //větvení na základě vstupu proměnné jmeno a prijmeni
                if ($jmeno == "Pavel" && $prijmeni =="Petr"){

                    echo "<h1>Vítejte pane prezidente!</h1>";
                    echo '<form action="#" method="GET">
                            <input type="text" name="jmeno" placeholder="zadej jméno">
                            <input type="text" name="prijmeni" placeholder="zadej příjmení">
                            <input type="submit" value="Zadej">
                        </form>';

                } elseif($jmeno == "Petr" && $prijmeni =="Pavel"){
                    echo "<h1>Duplikáte!</h1>";
                    echo '<form action="#" method="GET">
                            <input type="text" name="jmeno" placeholder="zadej jméno">
                            <input type="text" name="prijmeni" placeholder="zadej příjmení">
                            <input type="submit" value="Zadej">
                        </form>';
                } else{
                    echo "<h1>Negramote!</h1>";
                    echo '<form action="#" method="GET">
                            <input type="text" name="jmeno" placeholder="zadej jméno">
                            <input type="text" name="prijmeni" placeholder="zadej příjmení">
                            <input type="submit" value="Zadej">
                        </form>';
                }
        
            }
        ?>
