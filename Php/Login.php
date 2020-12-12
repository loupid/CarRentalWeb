<?php
include "Database/Config.php";

$uname = mysqli_real_escape_string($con,$_POST['username']);
$password = mysqli_real_escape_string($con,$_POST['password']);

if ($uname != "" && $password != ""){
    $sql_query = "select IdUser as id, Username as username, count(*)as cntUser from users 
                    where Username = '$uname' and Password = '$password';";
    $result = mysqli_query($con,$sql_query);
    $row = mysqli_fetch_array($result);

    $count = $row['cntUser'];

    setcookie($cookie_userid, $row['id'], time() + (86400 * 5), "/");
    setcookie($cookie_username, $row['username'], time() + (86400 * 5), "/");

    if($count > 0){
        echo $row['id'];
    }else{
        echo 0;
    }
}else echo 0;

?>
