<?php
require_once('recaptchalib.php');
$privatekey = "6LfDpScUAAAAAAqAyUbW5WAk_47Pp_MU_A4hY7WB";
$resp = recaptcha_check_answer ($privatekey,
                              $_SERVER["REMOTE_ADDR"],
                              $_POST["recaptcha_challenge_field"],
                              $_POST["recaptcha_response_field"]);

if (!$resp->is_valid && $_POST['submit']) {
  die ("The reCAPTCHA wasn't entered correctly. Go back and try it again." .
       "(reCAPTCHA said: " . $resp->error . ")");
} 

else {
    if ($_POST['submit']) {
        $first_name = $_POST['first-name'];
        $last_name = $_POST['last-name'];
        $email = $_POST['email'];
        $from = 'From: Ceiphr.com';
        $to = 'contact@ceiphr.com'; 
        $subject = 'Contact Form // Ceiphr';
        $message = $_POST['message'];
    
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
    
        if (mail ($to, $subject, $body, $from)) { 
            echo '<p>Thanks. We\'ll be in touch. </p>';
        } else { 
            echo '<p>An error occured. Please resubmit or try again later.</p>'; 
        }
    }
}
?>
