<?php

include "Database/Config.php";

$return_arr = array();

if(!empty($_GET['searchby']) && isset($_GET['searchby'])) {
    $searchValue = $_GET['searchby'];
    $query = "select IdAnnounce as idannounce, BrandName as brandname, CarName as carname, SeatCount as seatcount, Title as title, Location as location, Price as price, ImgFilePath as imgfilepath
    from annouces
    where
      upper(BrandName) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(CarName) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(SeatCount) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(Title) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(Location) like concat('%', concat(upper('$searchValue'),'%')) ||
      upper(Price) like concat('%', concat(upper('$searchValue'),'%')) &&
      Available = true
    order by ReleaseDate desc;";
}elseif(!empty($_GET['method']) && isset($_GET['method']) && $_GET['method'] == 'quickfilter'){
    $seatcount = $_GET['seatcount'];
    $location = $_GET['location'];
    $minprice = !empty($_GET['minprice']) ? $_GET['minprice']: 0;
    $maxprice = !empty($_GET['maxprice']) ? $_GET['maxprice']: 9999999999.99;
    
    $query = "select IdAnnounce as idannounce, BrandName as brandname, CarName as carname, SeatCount as seatcount, Title as title, Location as location, Price as price, ImgFilePath as imgfilepath
    from annouces
    where
      upper(SeatCount) like concat('%', concat(upper('$seatcount'),'%')) and
      upper(Location) like concat('%', concat(upper('$location'),'%')) and
      (Price >= '$minprice' and price <= '$maxprice') and
      Available = true
    order by ReleaseDate desc;";
}else{
    $query = "select IdAnnounce as idannounce, BrandName as brandname, CarName as carname, SeatCount as seatcount, Title as title, Location as location, Price as price, ImgFilePath as imgfilepath from annouces inner join users u on annouces.IdUserOwner = u.IdUser where Available = true order by ReleaseDate desc;";
}

$result = mysqli_query($con,$query);

$last_id = mysqli_insert_id($con);

while($row = mysqli_fetch_array($result)){
    $idannounce = $row['idannounce'];
    $title = $row['title'];
    $brandname = $row['brandname'];
    $carname = $row['carname'];
    $seatcount = $row['seatcount'];
    $location = $row['location'];
    $price = $row['price'];
    $imgfilepath = $row['imgfilepath'];

    $return_arr[] = array(
        "idannounce" => $idannounce,
        "brandname" => $brandname,
        "carname" => $carname,
        "seatcount" => $seatcount,
        "location" => $location,
        "price" => $price,
        "title" => $title,
        "imgfilepath" => $imgfilepath
        );
}

// Encoding array in JSON format
echo json_encode($return_arr);
