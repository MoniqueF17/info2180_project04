<?php


mysql_connect("localhost", "root");
mysql_select_db("register");
$username = $_POST['username']; 
$password = $_POST['password']; 

$sql = SELECT * FROM register WHERE username = '$username' AND password = '$password';
$results = mysql_query($sql);
$arr = mysql_fetch_array($results);
$arr_size = sizeof($arr); 
  if ($arr_size > 1){ 
   print "welcome, you got in"; 
 } 
 else { 
    print "sorry wrong password";  

?>
