<?php
header("Content-type: text/html; charset=utf-8");
ini_set('max_execution_time', '0');
date_default_timezone_set('prc');
echo '开始时间：'.date('Y-m-d H:i:s',time());
echo '<br/>';
echo ' id -- 喜欢','<br/>';
// 2016.01.03 48151--2016.12.30 50806
$arr = array();
for ($i=48151; $i <50807; $i++) {
	$v_arra=json_decode(file_get_contents("http://www.vmovier.com/post/islike/?id=".$i),true);
	$arr[$i]=$v_arra["count"]+$v_arra["count_share"];
}
arsort($arr);
foreach($arr as $key=>$value)
{
echo $key . "-" . $value."<br/>";
}
echo '结束时间：'.date('Y-m-d H:i:s',time());
?>
