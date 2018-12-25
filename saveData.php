<?php
$disease = $_POST['diseasetype'];
$location = $_POST['location'];
$date = $_POST['date'];

$client = new MongoDB\Client(
    'mongodb+srv://fyp_admin:fyp_pwd@cluster0.mongodb.net/?ssl=true&authSource=admin&serverSelectionTryOnce=false&serverSelectionTimeoutMS=15000"');

$db = $client->test;
$collection = $db->flu;

$datainput = array(
	'diseasetype' => $disease,
	'location' => $location,
	'date' => $date
);

$collection->save($datainput);

header('Location: /index.html');
?>