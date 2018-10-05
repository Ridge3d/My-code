<?php
        mysql_connect("localhost", "root" , "" ); 
        mysql_select_db("demo1"); // your database name is added here 
         if (isset ($_POST['submit'])) 
             { 
                $email=$_POST['email']};
                $pass=$_POST['pass'];
                $query-"insert into login" (email,password) values ('$email','$pass')";
                 if(mysql_query ($query)) //run the query 
                 { 
                     echo" your date has been recorded" ; 
                    } 
                }
                ?>