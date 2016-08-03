<?php

require_once realpath('google-api-php-clientt/src/Google/autoload.php');


$client_email = '403771359085-kqk8d8i52reqrjeoi1h3vmpuuc6818c9.apps.googleusercontent.com';
$private_key = file_get_contents('sample.p12');
$scopes = array('https://www.googleapis.com/auth/analytics.readonly');
$credentials = new Google_Auth_AssertionCredentials(
    $client_email,
    $scopes,
    $private_key
);

$client = new Google_Client();
$client->setAssertionCredentials($credentials);
if ($client->getAuth()->isAccessTokenExpired()) {
  $client->getAuth()->refreshTokenWithAssertion();
}

$analytics = new Google_Service_Analytics($client);

$access_token = $client->getAccessToken();