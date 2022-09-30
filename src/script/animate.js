$( document.body ).ready(function() {

    //When you click on the shade
    $(".background-shade").click(function() {
        
        //Hide the shade
        $(".background-shade").css({
            "opacity": "0",
            "visibility": "hidden"
        });

        //Minimise the image
        $(".img-click").css({
            "opacity": "0",
            "transform": "scale(0)",
            "visibillity": "hidden"
        });
    });

    //When you click on the image
    $(".img-container").click(function(){
        
        //Hides all open images
        $(".img-click").css({
            "opacity": "0",
            "transform": "scale(0)",
            "visibillity": "hidden",
            "z-index": "-1"
        });

        //If the image you clicked is hidden
        if($(this).children(".img-click").css("opacity") == "0"){
            
            //Display the image
            $(this).children(".img-click").css({
                "opacity": "1",
                "transform": "scale(1)",
                "visibillity": "visible",
                "z-index": "90"
            });

            //Display the shade
            $(".background-shade").css({
                "opacity": "0.7",
                "visibility": "visible"
            });
        }
        else{    
            
            //Hide the image
            $(this).children(".img-click").css({
                "opacity": "0",
                "transform": "scale(0)",
                "visibillity": "hidden"
            });

            //Hide the shade
            $(".background-shade").css({
                "opacity": "0",
                "visibility": "hidden"
            });
        }
    })
    $(".close").hover(function(){
        $(this).css({
            "transform": "scale(1.3)",
            "border" : "1px solid rgba(0, 0, 0, 1)"
        });
    });
    $(".close").mouseleave(function(){
        $(this).css({
            "transform": "scale(1)",
            "border" : "0px solid rgba(0, 0, 0, 0)"
        });
    });
});