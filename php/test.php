<?php

// +----------------------------------------------------------------------
// | Think.Admin
// +----------------------------------------------------------------------
// | 版权所有 2014~2017 广州楚才信息科技有限公司 [ http://www.cuci.cc ]
// +----------------------------------------------------------------------
// | 官方网站: http://think.ctolog.com
// +----------------------------------------------------------------------
// | 开源协议 ( https://mit-license.org )
// +----------------------------------------------------------------------
// | github开源项目：https://github.com/zoujingli/Think.Admin
// +----------------------------------------------------------------------
error_reporting(0);
require_once 'RelationServer.php';
use service\RelationServer;

$Relaction = new RelationServer();
$text=$_GET['text']?$_GET['text']:"爸爸的女儿的哥哥的弟弟的姐姐的儿子";
$options = ["text" => $text, "sex" => 1];
$text = $Relaction->relactionShip($options);
var_export($text);




