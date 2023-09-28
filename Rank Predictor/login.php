<?php
$name=$_POST['name'];
$mainssocre=$_POST['mainsscore'];
$advscore=$_POST['advscore'];
$yourcategory=$_POST['yourcategory'];
$con=new mysqli("localhost","root","","test");
if($con->connect_error){
    die("Failed to connect : ".$con->connect_error);
}else{
    $stmt=$con->prepare("select* form registration where ")
}
?>