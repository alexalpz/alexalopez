$(function(){
    var bgimage = new Image();      
    bgimage.src="{wallpaper.jpg}";       

    $(bgimage).load(function(){
        $("body").css("wallpaper.jpg","url("+$(this).attr("src")+")").fadeIn();                  
    });
});
