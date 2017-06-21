//hover on bio div but affect overlay text + bio
  $(".bio").hover(function() {
  	$(".bio").addClass("hoveringBio");
  	$(".overlay_text").addClass("hoveringOverlay");
    // $('.overlay-text').css('color', 'rgba(0,0,0,0');
    // $('.bio').css('text-decoration', 'underline');
  // }, function() {
  //   // on mouseout, reset the background colour
  //   $('.overlay-text').css('color', 'rgba(0,0,0,1');
  console.log("hover");
  });

  $(".bio").mouseleave(function(){
  	$(".bio").removeClass("hoveringBio");
  	$(".overlay_text").removeClass("hoveringOverlay");
  });

  $(".overlay_text").hover(function(){
  	$(".overlay_text").addClass("hoveringOverlay2");
  });

$(".overlay_text").mouseleave(function(){
	$(".overlay_text").removeClass("hoveringOverlay2");
});