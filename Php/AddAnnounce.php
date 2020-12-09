<?php
include "Database/config.php";

$title = mysqli_real_escape_string($con,$_POST['title']);
$brand = mysqli_real_escape_string($con,$_POST['brandname']);
$carname = mysqli_real_escape_string($con,$_POST['carname']);
$category = mysqli_real_escape_string($con,$_POST['category']);
$seat_count = mysqli_real_escape_string($con,$_POST['seatcount']);
$description = mysqli_real_escape_string($con,$_POST['description']);
$location = mysqli_real_escape_string($con,$_POST['location']);
$price = mysqli_real_escape_string($con,$_POST['price']);
$available = mysqli_real_escape_string($con,$_POST['available']);
$imgFilePath = mysqli_real_escape_string($con,$_POST['imgfilepath']);
$iduser = intval(mysqli_real_escape_string($con,$_POST['iduserowner']));

$sql = "insert into annouces (IdUserOwner, Title, BrandName, Category, Description, CarName, SeatCount, Location, Price, Available, ImgFilePath) 
values ('$iduser','$title','$brand', '$category', '$description', '$carname', '$seat_count', '$location', '$price', '$available','$imgFilePath');";

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
