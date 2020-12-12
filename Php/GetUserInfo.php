<?php
include "Database/Config.php";

$id = mysqli_real_escape_string($con,$_GET['iduser']);

$query = "select * from users
    where IdUser = $id;";

$result = mysqli_query($con,$query);

while($r = mysqli_fetch_assoc($result)) {
    $rows = $r;
}
echo json_encode($rows);