<?php
include "Database/config.php";

$idannounce = mysqli_real_escape_string($con,$_POST['idannounce']);

$sql = "delete from annouces where IdAnnounce = $idannounce ;";
$msql = "select count(*) as count from rentals where IdAnnounce = $idannounce;";
$result = mysqli_query($con, $msql);
$row = mysqli_fetch_array($result);

if (mysqli_query($con, $sql) && $row['count'] == 0) {
    echo json_encode(array(
        "statusCode"=>200
    ));
}
else {
    echo json_encode(array(
        "statusCode"=> 201
    ));
}