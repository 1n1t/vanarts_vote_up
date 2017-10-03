<?php

if (count($_POST) > 0) {
	sendEmail();
	setcookie('msg', 'Thank you for subscribing to our email newsletters', time() + 3600);
}

header("Location: /");


function sendEmail () {
	//  send email to user

	//  create variables for necessary email fields
	$to = $_POST['email'];
	$subject = 'VOTE UP! Email newsletter';
	$message = buildTemplate('emails/subscription.html', [
		'name' => $_POST['name'],
	]);

	//  set headers of the email response
	$headers = "From: info@voteup.ca" . PHP_EOL;
	$headers .= "MIME-Version: 1.0" . PHP_EOL;
	$headers .= "Content-type:text/html;charset=UTF-8" . PHP_EOL;

	mail($to, $subject, $message, $headers);
}


function buildTemplate ($path, $vars = []) {
	//    function for rendering page template
	//    put all variables into template .php, cache the result and return it as string
	extract($vars);
	ob_start();
	include ("$path");
	return ob_get_clean();
}
