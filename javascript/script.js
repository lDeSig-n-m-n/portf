
/*scroll*/

$(document).ready(function() { 

$('a[href^="#"]').click(function(){ 
var el = $(this).attr('href'); 
$('body').animate({ 
scrollTop: $(el).offset().top}, 2000); 
return false; 
}); 

});


/*slider*/

$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 111000, //Set AutoPlay to 3 seconds
 
      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

/*Countdown*/

$(function () {
	
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 0);
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());
	$('#frenchCountdown').countdown($.countdown.regionalOptions['ru']);
});