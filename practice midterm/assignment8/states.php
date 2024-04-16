<!-- Yushika Jhundoo - 300269830
Nidhi Thakkar - 300202450 -->

<?php

// Define the states string
$states = "Mississippi Alabama Texas Massachusetts Kansas";

// Initialize the array to store matched states
$statesArray = array();

// Task a)
preg_match('/\bxas\b/', $states, $matches);
$statesArray[0] = $matches[0];

// Task b)
preg_match('\b^k\w+s$\b', $states, $matches);
$statesArray[1] = $matches[0];

// Task c)
preg_match('/\b^M\w+s$\b/', $states, $matches);
$statesArray[2] = $matches[0];

// Task d)
preg_match('/\b\w+a$\b/', $states, $matches);
$statesArray[3] = $matches[0];

// Task e)
preg_match('/\b^M\w+/', $states, $matches);
$statesArray[4] = $matches[0];

// Output the array
print_r($statesArray);

?>
