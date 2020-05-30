<?php 

$receiver = "tema7198@gmail.com";


$name = htmlspecialchars(trim($_POST["name"]));
$phone = htmlspecialchars(trim($_POST["phone"]));
$email = htmlspecialchars(trim($_POST["email"]));
$static = htmlspecialchars(trim($_POST["static"]));
$dynamic = htmlspecialchars(trim($_POST["dynamic"]));
$html = htmlspecialchars(trim($_POST["html"]));
$pagetitle = "Banner order";


$message = "Name: $name \nMessage: $phone \nE-mail: $email \nStatic: $static \nDynamic: $dynamic \nHtml: $html";

mail($receiver, $pagetitle,  $message, "Content-type: text/html; charset=\"utf-8\"\n From: $email");