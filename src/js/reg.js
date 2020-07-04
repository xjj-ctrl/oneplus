
// let button = $('.submit-btn');
// let phone = $('.phone');

$('.submit-btn').on("click", function () {
    // 验证唯一性

    if ($('.phone').val().length == 11) {
        let val = $('.phone').val();
        // console.log(val);
        $.ajax({
            type: "get",
            url: "http://localhost/onePlus.com/src/interface/reg.php",
            data: {
                'val': val
            },
            dataType: "json",
            success: function (response) {
                if (response.status) {
                    alert(response.msg);
                    location.href = "./login.html";
                }
                else {
                    alert(response.msg);
                    location.href = "./reg.html";
                }
            }
        });
    }

})
