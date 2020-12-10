<?php
include "Database/config.php";

$idannounce = mysqli_real_escape_string($con,$_POST['idannounce']);

$sql = "delete from annouces where IdAnnounce = $idannounce ;";

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