
$('.submit-btn').on("click", function () {

    if ($('.prefix').val().length == 11) {
        let val = $('.prefix').val();
        $.ajax({
            type: "get",
            url: "http://localhost/onePlus.com/src/interface/login.php",
            data: {
                'val': val
            },
            dataType: "json",
            success: function (response) {
                
                if (response.status) {
                    //如果登录成功
                    alert(response.msg);
                    location.href = "./index.html";
                }
                else {
                    alert(response.msg);
                    location.href = "./login.html";
                }

            }
        });
    }
})
