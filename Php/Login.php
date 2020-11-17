<?php
include "Database/Config.php";

$uname = mysqli_real_escape_string($con,$_POST['username']);

$password = mysqli_real_escape_string($con,$_POST['password']);

if ($uname != "" && $password != ""){

    $sql_query = "select count(*) as cntUser from users where Username='loupid' and Password='secret1234'";
    $result = mysqli_query($con,$sql_query);
    $row = mysqli_fetch_array($result);

    $count = $row['cntUser'];

    if($count > 0){
        $_SESSION['uname'] = $uname;
        echo 1;
    }else{
        echo 0;
    }

}
?>
