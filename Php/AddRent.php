<?php
include "Database/config.php";

$iduser = mysqli_real_escape_string($con,$_POST['iduserowner']);
$idannounce = mysqli_real_escape_string($con,$_POST['idannounce']);


$sql = "insert into rentals (IdAnnounce, IdUserClient) values ('$idannounce','$iduser');";

if (mysqli_query($con, $sql)) {
    $sql = "update annouces set Available = false where IdAnnounce = $idannounce;";
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
}
else {
    echo json_encode(array(
        "statusCode"=> $con->error
    ));
}