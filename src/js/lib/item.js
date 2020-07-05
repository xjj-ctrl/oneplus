let baseUrl = "http://localhost/onePlus.com";  //基础路径必须是相对路径

define(['jquery', 'cookie'], function ($, cookie) {
    return {
        render: function (callback) {
            $.ajax({
                type: "get",
                url: `${baseUrl}/src/interface/getpro.php`,
                dataType: "json",
                success: function (response) {
                    // console.log(response);
                    let temp1 = "";

                    response.forEach(elm => {
                        temp1 += `<li class = "" price = "￥${elm.price}">${elm.detalls}</li>`;

                    })

                    $('.ul-list').html(temp1);

                    $('.ul-list li:first-child').addClass("active");
                    $('.ul-list>li').click(function () {
                        $('.ul-list>li').removeClass("active");
                        // console.log($(this));
                        $(this).addClass("active");
                        $('.main-tit-head h4').html($(this).attr("price"));
                    })
                    // console.log(response);
                    callback && callback();
                    // console.log(response.id,response.title, response.price);
                }

            })

        },

        buypro: function () {

            $('.buybuybuy').on('click', function () {
                // console.log($('.active').attr("price"));
                // console.log($('.active').html());
                console.log(cookie);

                let shop = cookie.get('shop');



                let str = {
                    detalls: $('.active').html(),
                    price: $('.active').attr("price")
                }

                if (shop) {
                    shop = JSON.parse(shop);
                    // shop.push(str);
                    if (shop.some(elm => elm.detalls == str.detalls)) {}
                    else {shop.push(str)}
                }
                else {
                    shop = [];
                    shop.push(str);
                }

                cookie.set('shop', JSON.stringify(shop), 1);
                // console.log(str);
                // console.log( $('.main-tit-head h4').html());
                // let product = {
                //     title: title,
                //     price: price
                // }

                // console.log(product);
            })

        }
    }

});
