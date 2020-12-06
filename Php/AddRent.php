<?php
$iduser = $_SESSION['userId'];
$idannounce = mysqli_real_escape_string($con,$_POST['idannounce']);


$sql = "insert into rentals (IdAnnounce, IdUserClient) values ('$idannounce','$iduser');";

if (mysqli_query($con, $sql)) {
    echo json_encode(array(
        "statusCode"=>200
    ));
}
else {
    echo json_encode(array(
        "statusCode"=> $con->error
    ));
}