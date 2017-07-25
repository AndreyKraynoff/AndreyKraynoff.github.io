$(document).scroll(function(){
	ofst = $(window).scrollTop();
	if (ofst>0) {
		$('.header').addClass('header_scrolled');
	}
 else{
 	$('.header').removeClass('header_scrolled');
 }
});
