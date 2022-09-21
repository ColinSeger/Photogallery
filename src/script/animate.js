$( document.body ).ready(function() {
   
    $(".img-container").click(function(){
        if($(this).hasClass("img-click")){
                $(this).removeClass("img-click");
            }
            else{           
                $(this).addClass("img-click");
            }
    })
});