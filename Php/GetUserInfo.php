<?php
include "Database/Config.php";

$id = mysqli_real_escape_string($con,$_GET['iduser']);

$query = "select FirstName as firstname, Lastname as lastname, Email as email, Username as username, PhoneNumber as phonenumber from users
    where IdUser = $id;";

$result = mysqli_query($con,$query);

while($r = mysqli_fetch_assoc($result)) {
    $rows = $r;
}
echo json_encode($rows);