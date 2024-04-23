<?php

if(isset($_POST['submit'])){
    
    $to = "david.guscic@gmail.com"; // kome se šalje
    $from = $_POST['mail']; // tko šalje
    $full_name = $_POST['ime'];
    
    
    $subject = "TESTIRANJE";
    $message = $full_name . " želi rezervirati apartman od " . $_POST['from-date'] ." do ". $_POST['to-date'] . "\n piše sljedeće:\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    
    

    if (mail($to,$subject,$message,$headers)) {
      header("Location: ../index.html");
      } else {
        echo "Email sending failed, try again or contact us manually...";
      }
    
}

    ?>