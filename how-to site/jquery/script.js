$(document).ready(function() {
  $("#hide").click(function() {
    $(".list").hide();
  });
  $("#show").click(function() {
    $(".list").show();
  });

  $("#hide1").click(function() {
    $("#instruct").hide();
  });
  $("#show1").click(function() {
    $("#instruct").show();
  });
  $("#toggle").click(function() {
    $("#toggleBox").toggle(1000);
  });

  $("h2").hover(function() {
    $(".imghover").fadeOut(1000);
    $(".imghover").fadeIn(1000);
  });

  $("h2").mouseleave(function() {
    $("h2").css("color", "red");
  });

  $(".moreinfo").hover(function() {
    $("a", ).css("background-color", "blue");
    $("a", ).css("color", "white");
  });

  $("#title").html("<p>Best Recipe</p>");

  $("#title").css("color", "blue");

});
