<?php
include "Database/Config.php";

$uname = mysqli_real_escape_string($con,$_POST['username']);

$password = mysqli_real_escape_string($con,$_POST['password']);

if ($uname != "" && $password != ""){
    //TODO ajouter le email permission
    $sql_query = "select count(*) as cntUser from users where Username='".$uname."' and Password='".$password."'";
    $result = mysqli_query($con,$sql_query);
    $row = mysqli_fetch_array($result);

    $count = $row['cntUser'];

    if($count > 0){
        echo 1;
    }else{
        echo 0;
    }
}
?>
