let baseUrl = "http://localhost/onePlus.com";  //基础路径必须是相对路径

define(['jquery', 'cookie'], function ($, cookie) {
    return {
        render: function (callback) {
            $.ajax({
                type: "get",
                url: `${baseUrl}/src/interface/getpro.php`,
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    let temp1 = "";

                    response.forEach(elm => {
                        temp1 += `<li class = "" price = "￥${elm.price}">${elm.detalls}</li>`;

                    })

                    $('.ul-list').html(temp1);

                    $('.ul-list li:first-child').addClass("active");
                    $('.ul-list>li').click(function () {
                        $('.ul-list>li').removeClass("active");
                        console.log($(this));
                        $(this).addClass("active");
                        $('.main-tit-head h4').html($(this).attr("price"));
                    })

                    callback && callback(response.title, response.price);
                    console.log(response.title, response.price);
                }

            })

        },

        buypro: function (title, price) {

            console.log(cookie);
            let product = {
                title: title,
                price: price
            }

            console.log(product);
        }
    }

});
