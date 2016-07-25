/**
 * Created by Administrator on 2015/4/7.
 */
require.config({
    waitSeconds : 45,
    paths: {
        "jquery": "jquery.min",
        "slippry":"slippry",
        "bootstrap":"bootstrap.min"
    },
    map: {
        '*': {
            'css': 'css.min'
        }
    },
    shim : {
        "jquery": {
            exports: "jquery"
        },
        "slippry":{
            deps:["jquery"]
        }
    }
});

require(["jquery"],function($){

    $(function(){
        $('.lazy-css').each(
            function(){
            $(this).attr("src",$(this).attr("lazy-src")).removeAttr("lazy-src")
        });
    });

    require(["slippry"],function(){
        $(function() {
          var demo1 = $("#slider").slippry({
             transition: 'kenburns',
             useCSS: true,
             speed: 5000,
             pause: 9000,
             auto: true,
             controls: false,
             preload: 'visible',
             autoHover: false
          });
        });
    });

});