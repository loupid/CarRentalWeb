<?php
include "Database/config.php";

$iduser = mysqli_real_escape_string($con,$_POST['iduser']);
$password = mysqli_real_escape_string($con,$_POST['password']);

$sql = "update users 
set Password = '$password', 
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