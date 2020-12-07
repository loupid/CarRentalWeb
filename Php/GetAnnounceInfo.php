<?php
include "Database/Config.php";

$id = mysqli_real_escape_string($con,$_GET['idannounce']);

$query = "select IdAnnounce as idannounce, BrandName as brandname, CarName as carname, Category as category, Description as description, SeatCount as seatcount, Title as title, Location as location, Price as price, ImgFilePath as imgfilepath, Available as available 
    from annouces
    where IdAnnounce = $id 
    order by ReleaseDate desc;";

$result = mysqli_query($con,$query);

while($r = mysqli_fetch_assoc($result)) {
    $rows = $r;
}
echo json_encode($rows);