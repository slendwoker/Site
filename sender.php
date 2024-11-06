<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['mobile'];
    $text = $_POST['text'];

    $to = "blablabla@yandex.ru";
    $date = date ("d.m.y");
    $time = date ("h.i");
    $from = $email;
    $subject = "Письмо с сайта";

    $msg ="
    Имя: $name /n
    Email: $email /n
    Телефон: $phone /n
    Текст: $text /n";
    mail($to, $subject, $msg, "From: $from");

?>