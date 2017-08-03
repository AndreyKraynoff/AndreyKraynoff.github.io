$(document).scroll(function(){
	ofst = $(window).scrollTop();
	if (ofst>0) {
		$('.header').addClass('header_scrolled');
		$('.logo-holder__image').addClass('logo-holder__image_small');
	}
 else{
 	$('.header').removeClass('header_scrolled');
 	$('.logo-holder__image').removeClass('logo-holder__image_small');
 }
});

$('#header__burger').click(function(){
	if ($('#nav').hasClass('navigation_mobile-active')) {
		$('#nav').removeClass('navigation_mobile-active');
	}
	else{
		$('#nav').addClass('navigation_mobile-active');
	}

});

$('#mobile_nav_close').click(function(){
if ($('#nav').hasClass('navigation_mobile-active')) {
		$('#nav').removeClass('navigation_mobile-active');
	}
	else{
		$('#nav').addClass('navigation_mobile-active');
	}
});