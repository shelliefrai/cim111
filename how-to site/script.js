$(document).ready(function() {
      $("#hide").click(function(){
        $(".list").hide();
      });
      $("#show").click(function(){
        $(".list").show();
      });

            $("#hoverthing").hover(function(){
                $(".imghover").fadeOut(1000);
          });

          $("h2").hover(function(){
              $(".imghover").fadeIn(1000);
        });
        $(".moreinfo").hover(function(){
            $("a",).css("background-color", "blue");
            $("a",).css("color", "white");
        });
});
