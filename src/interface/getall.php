<?php
    include('./conn.php');

    $sql = "select * from news";

    $res = $mysqli->query($sql);

    $arr = array();

    while($row=$res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);
    // var_dump($arr);
    echo $json;

    $mysqli->close();
?>