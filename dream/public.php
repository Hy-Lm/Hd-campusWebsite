<?php
   $conn=new mysqli('localhost','root','x4AFdY3ki4f5rCJA','dream');
   $conn->query('set names utf8');
	
	
     header('Access-Control-Allow-Origin:*');
	 $URL='http://www.hd512.com/dream/images/';
	 if (!function_exists('array_column')) {
	 	function array_column($arr2, $column_key) {
	 		$data = [];
	 		foreach ($arr2 as $key => $value) {
	 			$data[] = $value[$column_key];
	 		}
	 		return $data;
	 	}
	 }
?>