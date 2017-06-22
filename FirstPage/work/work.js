//when hover on one image, dark filter on all others
$(".grid > div").hover(function(){
	$(".grid>div:not(:hover)").addClass("darken");
	console.log("hovering");
});

$(".grid>div").mouseleave(function(){
	$(".grid>div").removeClass("darken");
	console.log("not hovering");
});