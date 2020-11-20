<?php
include "Database/Config.php";

$firstname = mysqli_real_escape_string($con,$_POST['firstname']);
$lastname = mysqli_real_escape_string($con,$_POST['lastname']);
$phonenumber = mysqli_real_escape_string($con,$_POST['phonenumber']);
$register_email = mysqli_real_escape_string($con,$_POST['register_email']);
$register_password = mysqli_real_escape_string($con,$_POST['register_password']);
$username = mysqli_real_escape_string($con,$_POST['username']);
$showdata = mysqli_real_escape_string($con,$_POST['showdata']);
$register_password = password_hash($register_password, PASSWORD_DEFAULT);

if ($showdata == "on") {
    $showdata = 1;
}
else $showdata = 0;

$sql = "insert into users (FirstName, Lastname, Email, PhoneNumber, Username, Password, LastConnection,ShowInformation)
values ('$firstname', '$lastname', '$register_email', '$phonenumber', '$username', '$register_password', CURRENT_TIMESTAMP, $showdata);";
if (mysqli_query($con, $sql)) {
    echo json_encode(array("statusCode"=>200));
}
else {
    echo json_encode(array("statusCode"=>201));
}
