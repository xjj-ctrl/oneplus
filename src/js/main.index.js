require.config({
    paths:{
        jquery:'./jquery.min',
        index:'./lib/index'
    },
})

require(['index'],function(index){
    // console.log('a')
    index.render();
})

