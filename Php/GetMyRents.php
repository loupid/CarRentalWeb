<?php

include "Database/Config.php";

$id = mysqli_real_escape_string($con, $_GET['iduserclient']);

$query = "select a.IdAnnounce as idannounce, a.BrandName as brandname, a.CarName as carname, a.Category as category, a.Description as description, a.SeatCount as seatcount, a.Title as title, a.Location as location, a.Price as price, a.ImgFilePath as imgfilepath, a.Available as available 
    from rentals r
    inner join annouces a on r.IdAnnounce = a.IdAnnounce
    where r.IdUserClient = $id 
    order by ReleaseDate desc;";

$result = mysqli_query($con, $query);

while ($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}
echo json_encode($rows);