$( document.body ).ready(function() {
    $(".img-container").click(function(){
        if($(this).children(".img-click").css("opacity") == "0"){
            $(this).children(".img-click").css({
                "opacity": "1",
                "transform": "scale(1)",
                "visibillity": "visible"
            });
        }
        else{           
            $(this).children(".img-click").css({
                "opacity": "0",
                "transform": "scale(0)",
                "visibillity": "hidden"
            });
        }
    })
});