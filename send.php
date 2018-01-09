<?php 

//$destino="info@reciveci.ec";
$destino="m_ricky3021@hotmail.com";

$name=$_POST['Nombres'];
$mail=$_POST['Correo'];
$message=$_POST['Mensaje'];

$contenido="Nombre:". $name. "\nCorreo Electrónico ". $mail."\n". $message;
$headers = "From: webmaster@example.com" . "\r\n" .
"CC: somebodyelse@example.com";

mail($destino, "Voluntario Reciveci", $contenido,$headers);


?>