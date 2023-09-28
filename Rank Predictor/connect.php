<?php
$name=filter_input(INPUT_POST,'name');
$mainsscore=filter_input(INPUT_POST,'mainsscore');
$advscore=filter_input(INPUT_POST,'advscore');
$yourcategory=filter_input(INPUT_POST,'yourcategory');
if(!empty($name)){
	if(!empty($mainsscore)){
		$host="localhost";
		$dbusername="root";
		$dbpassword="";
		$dbname="college";
		$conn=new mysqli($host,$dbusername,$dbpassword,$dbname);
		if(mysqli_connect_errno()){
			die('Connect Error('.
			mysqli_connect_errno().')'.
            mysqli_connect_errno());
		}
		 else{
		 	$sql="INSERT INTO score(name,mainsscore,advscore,yourcategory) 
			values('$name','$mainsscore','$advscore','$yourcategory')";
		 	if ($conn->query($sql)) {
		 		// code...
		 		echo "New record is inserted sucessfully";
		 	}
		 	else{
		 		echo "Error: ".$sql."<br>".$conn->error;
		 	}
		 	$conn->close();
		}
	}
	else{
		echo "Password should not be empty";
		die();
	}
}
else{
	echo "username should not be empty";
	die();
}

?>
