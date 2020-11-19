<?php
include "Database/config.php";

$title = mysqli_real_escape_string($con,$_POST['title']);
$brand = mysqli_real_escape_string($con,$_POST['brand']);
$model = mysqli_real_escape_string($con,$_POST['model']);
$typename = mysqli_real_escape_string($con,$_POST['typename']);
$seat_count = mysqli_real_escape_string($con,$_POST['seat_count']);
$description = mysqli_real_escape_string($con,$_POST['description']);
$announce_localisation = mysqli_real_escape_string($con,$_POST['announce_localisation']);
$price = mysqli_real_escape_string($con,$_POST['price']);
$available = mysqli_real_escape_string($con,$_POST['$available']);

$sql = "insert into annouces (IdUserOwner, Title, BrandName, NameType, Description, CarName, SeatCount, town, Price, Available) 
values (.$iduser.,'".$title."','".$brand."', '".$typename."', '".$description."', '".$model."',  $seat_count., '".$announce_localisation."', $price., $available.);";
if (mysqli_query($con, $sql)) {
    echo json_encode(array("statusCode"=>200));
}
else {
    echo json_encode(array("statusCode"=>201));
}
