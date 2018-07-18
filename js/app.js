$(document).ready(function(){
   $("#details").click(function(){
     $(".anim").animate({width:"200px"});  
   });
    
    $("#details").mouseleave(function(){
        $(".anim").animate({width:"100px"});
    });
    
    $("#app").click(function(){
        $(".add_app").append(" <b>How are you?</b> ");
    });
    
    $("#pre").click(function(){
        $(".add_pre").prepend(" <b>Hey!</b> ");
    });
    
    $("#afld").click(function(){
        var label=prompt("Enter Label");
        var type=prompt("Enter Type");
        var name=prompt("Enter Name");
        
        if(label && type && name){
            $(".adding").append("<p>"+label+":"+" <input type='"+type+"' name='"+name+"' >"+"</p>");
        }

    });
    
    $("#load").click(function(){
        $("li").each(function(){
            alert($(this).text)
        });
    });
    
     $("#content").load("../jquery/home.html");
    
    $("ul li a").click(function(){
        var page = $(this).attr("href");
        
        $("#content").load("../jquery/" + page + ".html");
        
        return false;
        
        $(".accordion").accordion({
            event:"mousover",active:2
        });
    });
    
        $("#ttip").tooltip({
        show: "explode",
        hide: "fade"
    });
    
        $("#tabs").tabs({
      event: "mouseover"
    });




});