<?php
include "Database/Config.php";

$uname = mysqli_real_escape_string($con,$_POST['username']);
$password = mysqli_real_escape_string($con,$_POST['password']);
//$password = password_hash($password, PASSWORD_DEFAULT);

if ($uname != "" && $password != ""){
    $sql_query = "select IdUser as id, Username as username, count(*)as cntUser from users 
                    where Username = '$uname' or email = '$uname'  and Password = '$password';";
    $result = mysqli_query($con,$sql_query);
    $row = mysqli_fetch_array($result);

    $count = $row['cntUser'];
    $_SESSION['userId'] = $row['id'];
    $_SESSION['user'] = $row['username'];

    if($count > 0){
        echo $row['id'];
    }else{
        echo $password;
    }
}else echo 0;

?>
