<?php
  $conn = new mysqli('localhost', 'root', '123456', 'webcamp');

  if($conn ->connect_error){
    echo $conn -> $conn-> connect_error;
  }
?>
