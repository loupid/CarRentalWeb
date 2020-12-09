<?php
include "Database/config.php";

$idannounce = mysqli_real_escape_string($con,$_POST['idannounce']);

$sql = "delete from rentals where IdAnnounce = $idannounce ;";

if (mysqli_query($con, $sql)) {
    $sql = "update annouces set Available = true where IdAnnounce = $idannounce ;";
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