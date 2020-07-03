<?php
    //连接数据库
    include('./conn.php');

    //接收数据
    $val = $_REQUEST['val'];

    // echo $val;

    //查询用户名数据库中是否存在
    $sql = "select * from user where phone='$val'";

    // 执行sql语句
    $result = $mysqli->query($sql);
    // echo $sql;
    // die;



    if($result->num_rows>0){ // 判断有无结果
        // 说明查询到了这个用户名
        echo '<script>alert("用户名已存在");</script>';
        echo '<script>location.href="../html/reg.html";</script>';
        $mysqli->close();
        // die;
    }

    // 将用户传递过来的数据 写入数据库
    $insertUser = "insert into user(phone) values('$val')";
    // echo $insertUser;
    // die;

    $res = $mysqli->query($insertUser);

    // var_dump($res);
    // die;
// if($res){
//         echo '<script>alert("注册成功");</script>';
//         echo '<script>location.href="../html/login.html";</script>';
//     }


if($res){
    echo '{"msg":"注冊成功","status":true}';
}
    $mysqli->close();
    
    
?>