<?php
include "Database/config.php";

$iduser = mysqli_real_escape_string($con,$_POST['iduser']);
$firstname = mysqli_real_escape_string($con,$_POST['firstname']);
$lastname = mysqli_real_escape_string($con,$_POST['lastname']);
$phonenumber = mysqli_real_escape_string($con,$_POST['phonenumber']);
$register_email = mysqli_real_escape_string($con,$_POST['email']);
$username = mysqli_real_escape_string($con,$_POST['username']);


$sql = "update users 
set FirstName = '$firstname',
    Lastname = '$lastname',
    Email = '$register_email',
    PhoneNumber = '$phonenumber',
    Username = '$username', 
where IdUser = '$iduser';";


if (mysqli_query($con, $sql)) {
    echo json_encode(array(
        "statusCode"=> 200
    ));
}
else {
    echo json_encode(array(
        "statusCode"=> $con->error
    ));
}