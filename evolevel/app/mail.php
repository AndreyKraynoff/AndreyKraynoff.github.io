<?php

$recepient = "stonedrey@yandex.ru";
$sitename = "Название сайта";

$links = trim($_POST["links"]);
$phone = trim($_POST["phone"]);
$message = "Ссылки: $links \nТелефон: $phone \n";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");