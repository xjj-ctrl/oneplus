

let baseUrl = "http://localhost/onePlus.com";  //基础路径必须是相对路径

define(['jquery'], function ($) {
    return {
        render: function () {
            $.ajax({
                type: "get",
                url: `${baseUrl}/src/interface/getall.php`,
                dataType: "json",
                success: function (response) {
                    // console.log(response);
                    let temp = '';
                    
                    response.forEach(elm => {
                        temp += `<div class="new" style="background: url(${elm.pic}) no-repeat center center; background-size: 200%;">
                                <h4>${elm.title}</h4>
                                <h5>${elm.con}</h5>
                                <h6>${elm.more}</h6>
                                
                            </div>`;
                    });

                    $('.news').html(temp);
                }
            })
        }
    }

});
