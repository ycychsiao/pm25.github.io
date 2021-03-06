require.config({
    paths : {
        "jquery" : "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min",
        "simplebar" : "https://unpkg.com/simplebar@latest/dist/simplebar",
        "gtm" : "https://www.googletagmanager.com/gtag/js?id=UA-129342449-2"
    },
    shim: {
        'common': {
            deps: ["jquery"]
        },
        'blog': {
            deps: ["common"]
        }
    }
});
 
 
require(["jquery", "simplebar", "common", "gtm", "ga", "blog"], function(){
    // View Counter
    $.getJSON("https://plusmore-view-counter.herokuapp.com", function(data){});
    console.log("all js files loaded!");
});