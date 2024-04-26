<?php

if(isset($_POST['submit'])){

    $ime_honey = $_POST['name'];
    $prezime_honey = $_POST['surname'];

    if($ime_honey=="" && $prezime_honey==""){
    
    $to = "david.guscic@gmail.com"; // kome se šalje
    $from = $_POST['mail']; // tko šalje
    $full_name = $_POST['ime'];
    $subject = "Apartmani upit sa stranice";
    $message = $full_name . " želi rezervirati apartman od " . $_POST['from-date'] ." do ". $_POST['to-date'] . "\n piše sljedeće:\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    
    

    if (mail($to,$subject,$message,$headers)) {
      header("Location: ../index.html");
      } else {
        echo "Email sending failed, try again or contact us manually...";
      }
    }
    else{
        header("Location: ../index.html");
    }
}

    ?>