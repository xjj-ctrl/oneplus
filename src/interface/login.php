<?php

    //连接数据库
    include('./conn.php');

    //接收数据
    $val = $_REQUEST['val'];

    //查询用户名数据库中是否存在
    $sql = "select * from user where phone='$val'";

    // 执行sql语句
    $result = $mysqli->query($sql);

    if($result->num_rows>0){   //数据库有这条数据
        echo '{"msg":"登录成功","status":true}';

        $mysqli->close();
        die;
    }
    else{
        echo '{"msg":"账号不存在","status":false}';

        $mysqli->close();
        // die;
    }
?>