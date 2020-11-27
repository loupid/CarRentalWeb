<?php

include "Database/config.php";

$return_arr = array();

$query = "select IdAnnounce as idannounce, BrandName as brandname, CarName as carname, SeatCount as seatcount, Title as title, Town as town, Price as price, ImgFilePath as imgFileName from annouces inner join users u on annouces.IdUserOwner = u.IdUser;";

$result = mysqli_query($con,$query);

$last_id = mysqli_insert_id($con);

while($row = mysqli_fetch_array($result)){
    $idannounce = $row['idannounce'];
    $title = $row['title'];
    $brandname = $row['brandname'];
    $carname = $row['carname'];
    $seatcount = $row['seatcount'];
    $town = $row['town'];
    $price = $row['price'];
    $imgFileName = $row['imgFileName'];

    $return_arr[] = array("idannounce" => $idannounce,
        "brandname" => $brandname,
        "carname" => $carname,
        "seatcount" => $seatcount,
        "town" => $town,
        "price" => $price,
        "title" => $title,
        "imgFileName" => $imgFileName
        );
}

// Encoding array in JSON format
echo json_encode($return_arr);
