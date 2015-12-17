<?php


mysql_connect("localhost", "root","");
mysql_select_db("register");
$username = $_POST['username']; 
$password = $_POST['password']; 

$sql = "SELECT * FROM register WHERE username = '$username' AND password = '$password'";
$results = mysql_query($sql);
$arr = mysql_fetch_array($results);
/*$arr_size = sizeof($arr);*/
  if ($arr > 1){ 
   ?>
   <p>Welcome, you have succesfully logged</p>
   <a href="homepage.html">click here to proceed</a>
   <?php
   
 } 
 else { 
    print "sorry wrong password";
	
 }
?>
