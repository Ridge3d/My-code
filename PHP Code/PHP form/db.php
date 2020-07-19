<?php
require "/var/www/utils/variables.php";
require "/var/www/db/db_config.php";

session_start();

$_SESSION['authenticated'] = false;
$goto = $_SESSION['goto'];



$cmd = $_POST["cmd"];


if ($cmd == "signIn")
{
   $username = $_POST["username"];
   $password = $_POST["password"];
   $runFunc = signIn($username, $password);
   die($runFunc);
} 

    function signIn($username, $password) 
    {
        $pdo = pdo_connect();
        $exec = array(":username"=>$username);
        $sql = "SELECT * FROM `users` WHERE `username` = :username";
        $result = pdo_select($sql,$exec);
            $user = $result[0]["username"];
            $pass = $result[0]["password"];  

        if($pass==md5($password)){
            if($user == $username) {
                logUser($user);
                $_SESSION["authenticated"] = true;
                $_SESSION["username"] = $user;
            } 
            
            if($_SESSION["authenticated"] = true) {
                if(isset($goto)){
                    header($goto);
                } else {
                    header('Location: index.php');
                }
            }
        }
    }
?>