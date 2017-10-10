<?php

$recepient = "stonedrey@yandex.ru";
$sitename = "Название сайта";

$email = trim($_POST["email"]);
$links = trim($_POST["links"]);
$phone = trim($_POST["phone"]);
$message = "Ссылки: $links \nТелефон: $phone \nE-mail: $email";





$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
<?php
  $filename = "img/pres/ceo.pdf"; //Имя файла для прикрепления
  $to = trim($_POST["email"]); //Кому
  $from = "def@gmail.com"; //От кого
  $subject = "Test"; //Тема
  $message = "<h2>Заголовок</h2>
  <ul>
  <li style='list-style-type: none;'><strong>Шаг 9 </strong>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</li>
  <li style='list-style-type: none;'><strong>Шаг 10 </strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</li>
  <li style='list-style-type: none;'><strong>Шаг 11 </strong>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</li>
  <li style='list-style-type: none;'><strong>Шаг 11 </strong>пройти курс <a href='rbc.ru'>instagram</a></li>
  </ul>
  <img  width=50% style='display:block!important; margin-top: 30px;' useMap=#FPMap0 height=auto src='http://kraynox2.beget.tech/img/logo.png'>"; //Текст письма
  $boundary = "---"; //Разделитель
  /* Заголовки */
  $headers = "From: $from\nReply-To: $from\n";
  $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"";
  $body = "--$boundary\n";
  /* Присоединяем текстовое сообщение */
  $body .= "Content-type: text/html; charset='utf-8'\n";
  $body .= "Content-Transfer-Encoding: quoted-printablenn";
  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
  $body .= $message."\n";
  $body .= "--$boundary\n";
  $file = fopen($filename, "r"); //Открываем файл
  $text = fread($file, filesize($filename)); //Считываем весь файл
  fclose($file); //Закрываем файл
  /* Добавляем тип содержимого, кодируем текст файла и добавляем в тело письма */
  $body .= "Content-Type: application/octet-stream; name==?utf-8?B?".base64_encode($filename)."?=\n"; 
  $body .= "Content-Transfer-Encoding: base64\n";
  $body .= "Content-Disposition: attachment; filename==?utf-8?B?".base64_encode($filename)."?=\n\n";
  $body .= chunk_split(base64_encode($text))."\n";
  $body .= "--".$boundary ."--\n";
  mail($to, $subject, $body, $headers); //Отправляем письмо
?>