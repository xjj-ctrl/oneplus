<?php

    //连接数据库
    include('./conn.php');

    //接收数据
    $phone = $_REQUEST['phone'];

    //查询用户名数据库中是否存在
    $sql = "select * from user where phone='$phone'";

    // 执行sql语句
    $result = $mysqli->query($sql);

    if($result->num_rows>0){   //数据库有这条数据
        echo '<script>location.href="../html/index.html";</script>';

        $mysqli->close();
        die;
    }
    else{
        echo '<script>alert("用户名或密码错误！");</script>';
    }
?>