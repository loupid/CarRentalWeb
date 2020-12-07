<?php
session_start();

$host = "localhost"; /* Host name */
$user = "1474888"; /* User */
$password = "1474888"; /* Password */
$dbname = "420505ri_gr01"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}