<?php
//simulace získávání dat ze serveru
$data = array("message" => 'Ukázka zpracování požadavku AJAX - získání dat');

//nastavení hlavičky - která formátuje JSON data
header('Content-type: application/json');

//vrácení dat ve formátu JSON
echo json_encode($data);
?>