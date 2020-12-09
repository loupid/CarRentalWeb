<?php
include "Database/config.php";

$idannounce = mysqli_real_escape_string($con,$_POST['idannounce']);
$title = mysqli_real_escape_string($con,$_POST['title']);
$brandname = mysqli_real_escape_string($con,$_POST['brandname']);
$carname = mysqli_real_escape_string($con,$_POST['carname']);
$category = mysqli_real_escape_string($con,$_POST['category']);
$seatcount = mysqli_real_escape_string($con,$_POST['seatcount']);
$description = mysqli_real_escape_string($con,$_POST['description']);
$location = mysqli_real_escape_string($con,$_POST['location']);
$price = mysqli_real_escape_string($con,$_POST['price']);
$available = mysqli_real_escape_string($con,$_POST['available']);
$imgfilepath = mysqli_real_escape_string($con,$_POST['imgfilepath']);


$sql = "update annouces 
set Title = '$title',
    BrandName = '$brandname',
    CarName = '$carname',
    Category = '$category',
    Description = '$description',
    SeatCount = '$seatcount',
    Location = '$location',
    Price = '$price',
    ImgFilePath = '$imgfilepath',
    Available = '$available' 
where IdAnnounce = '$idannounce';";



if (mysqli_query($con, $sql)) {
    echo json_encode(array(
        "idannounce" => $idannounce,
        "brandname" => $brandname,
        "carname" => $carname,
        "seatcount" => $seatcount,
        "location" => $location,
        "price" => $price,
        "title" => $title,
        "imgfilepath" => $imgfilepath
    ));
}
else {
    echo json_encode(array(
        "statusCode"=> $con->error
    ));
}