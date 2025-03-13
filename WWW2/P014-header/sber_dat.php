<?php
$nick = $_POST['nickname'];
$heslo = $_POST['heslo'];

$kontrola_n = "ctirad";
$kontrola_h = "curacikalendar";

if ($nick == $kontrola_n && $heslo == $kontrola_h) {
    header("Location: mainpage.php");
    exit;
} else {
    header("Location: login.html");
    exit;
}
?>