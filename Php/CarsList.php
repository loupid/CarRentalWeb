<?php

include "Database/config.php";

$return_arr = array();
$query = "select u.Username as username, BrandName as brandname, CarName as carname, SeatCount as seatcount, NameType as typename, Description as description, Price as price from annouces inner join users u on annouces.IdUserOwner = u.IdUser;";

$result = mysqli_query($con,$query);

$last_id = mysqli_insert_id($con);

while($row = mysqli_fetch_array($result)){
    $username = $row['username'];
    $brandname = $row['brandname'];
    $carname = $row['carname'];
    $seatcount = $row['seatcount'];
    $typename = $row['typename'];
    $description = $row['description'];
    $price = $row['price'];

    $return_arr[] = array("username" => $username,
        "brandname" => $brandname,
        "carname" => $carname,
        "seatcount" => $seatcount,
        "typename" => $typename,
        "description" => $description,
        "price" => $price
        );
}

// Encoding array in JSON format
echo json_encode($return_arr);