<?php

include "Database/config.php";

$return_arr = array();

$query = "select u.Username as username, b.Name as brandname, c.Name as carname, c.SeatCount as seatcount, t.NameType as typename, t.Description as description from annouces a inner join users u on a.IdUserOwner = u.IdUser inner join (cars c inner join brands b on c.IdBrand = b.IdBrand inner join types t on c.IdType = t.IdType) on a.IdCar = c.IdCar;";

$result = mysqli_query($con,$query);

$last_id = mysqli_insert_id($conn);

while($row = mysqli_fetch_array($result)){
    $username = $row['username'];
    $brandname = $row['brandname'];
    $carname = $row['carname'];
    $seatcount = $row['seatcount'];
    $typename = $row['typename'];
    $description = $row['description'];

    $return_arr[] = array("username" => $username,
        "brandname" => $brandname,
        "carname" => $carname,
        "seatcount" => $seatcount,
        "typename" => $typename,
        "description" => $description
        );
}

// Encoding array in JSON format
echo json_encode($return_arr);