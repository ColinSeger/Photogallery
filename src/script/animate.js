$( document.body ).ready(function() {
    $(".background-shade").click(function() {
        //TODO: exit shade/image when clicked
        $(".background-shade").css({
            "opacity": "0",
            "visibility": "hidden"
        });
        $(".img-click").css({
            "opacity": "0",
            "transform": "scale(0)",
            "visibillity": "hidden"
        });
    });
    $(".img-container").click(function(){
        $(".img-click").css({
            "opacity": "0",
            "transform": "scale(0)",
            "visibillity": "hidden",
            "z-index": "-1"
        });
        if($(this).children(".img-click").css("opacity") == "0"){
            $(this).children(".img-click").css({
                "opacity": "1",
                "transform": "scale(1)",
                "visibillity": "visible",
                "z-index": "90",
                "top": "50%",
                "left": "50%"
            });
            $(".background-shade").css({
                "opacity": "0.5",
                "visibility": "visible"
            });
        }
        else{           
            $(this).children(".img-click").css({
                "opacity": "0",
                "transform": "scale(0)",
                "visibillity": "hidden"
            });
            $(".background-shade").css({
                "opacity": "0",
                "visibility": "hidden"
            });
        }
    })
});