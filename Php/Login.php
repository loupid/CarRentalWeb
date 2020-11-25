<?php
include "Database/Config.php";

$uname = mysqli_real_escape_string($con,$_POST['username']);

$password = mysqli_real_escape_string($con,$_POST['password']);
$password = password_hash(".$password", PASSWORD_DEFAULT);

if ($uname != "" && $password != ""){
    $sql_query = "select IdUser as id, count(*)as cntUser from users where Username='".$uname."' or Email='".$uname."' and Password='".$password."'";
    $result = mysqli_query($con,$sql_query);
    $row = mysqli_fetch_array($result);

    $count = $row['cntUser'];
    $_SESSION['userId'] = $row['id'];

    if($count > 0){
        echo 1;
    }else{
        echo 0;
    }
}else echo 0;
?>
