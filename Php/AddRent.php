<?php
include "Database/config.php";

//here it for the mobile because $_session dont work with retrofit
if (!isset($_POST['iduserowner']) && empty($_POST['iduserowner']) ){
    $iduser = $_SESSION['userId'];
}
else $iduser = mysqli_real_escape_string($con,$_POST['iduserowner']);

$idannounce = mysqli_real_escape_string($con,$_POST['idannounce']);


$sql = "insert into rentals (IdAnnounce, IdUserClient) values ('$idannounce','$iduser');";

if (mysqli_query($con, $sql)) {
    echo json_encode(array(
        "user"=>$_SESSION['user'],
        "statusCode"=>200
    ));
}
else {
    echo json_encode(array(
        "statusCode"=> $con->error
    ));
}