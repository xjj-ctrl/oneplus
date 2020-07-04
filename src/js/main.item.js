require.config({
    paths:{
        jquery:'./jquery.min',
        item:'./lib/item',
        cookie:'./cookie'
    },
    shim:{}
})

require(['jquery' , 'item'],function($,item){
    // console.log('a')
    item.render(function(title,price){
        $('.buybuybuy').on('click',function(){
            item.buypro(title,price);
            // let pro = {
            //     name: $('.active').innerHtml,
            //     price: $('.active').price
            // };

            // document.cookie = pro;
        })
        
    });
    

})

