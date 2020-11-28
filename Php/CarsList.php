<?php

include "Database/config.php";

$return_arr = array();

if(!empty($_GET['searchby']) && isset($_GET['searchby'])){
    $searchValue = $_GET['searchby'];
    $query = "select IdAnnounce as idannounce, BrandName as brandname, CarName as carname, SeatCount as seatcount, Title as title, Town as town, Price as price, ImgFilePath as imgFileName
from annouces
    inner join users u on annouces.IdUserOwner = u.IdUser
where
      upper(BrandName) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(CarName) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(SeatCount) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(Title) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(Town) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(Price) like concat('%', concat(upper('$searchValue'),'%'))
order by ReleaseDate desc;";
}else $query = "select IdAnnounce as idannounce, BrandName as brandname, CarName as carname, SeatCount as seatcount, Title as title, Town as town, Price as price, ImgFilePath as imgFileName from annouces inner join users u on annouces.IdUserOwner = u.IdUser order by ReleaseDate desc;";

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
