// //when hover on one image, dark filter on all others
// $(".thumbnail").hover(function(){
// 	$(".thumbnail:not(:hover)").addClass("darken");
// 	$(".thumbnail").not(":hover").addClass("tinymargin")
// 	console.log("hovering");

// });

$(".thumbnail").mouseover(function(){
	$(".thumbnail").addClass("darken");
	// $(".thumbnail").addClass("tinymargin");
	$(this).removeClass("darken");
	// $(this).removeClass("tinymargin");
	console.log("hovering");
});

 $(".thumbnail").mouseleave(function(){
 	$(".thumbnail").removeClass("darken");
	// $(".thumbnail").removeClass("tinymargin");
// 	$(".thumbnail").removeClass("darken");
// 	console.log("not hovering");
 });