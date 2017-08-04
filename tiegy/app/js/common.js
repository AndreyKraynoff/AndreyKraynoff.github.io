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

//questions
$('.faq-list__question').click(function(){
	$('.faq-list__answer').slideUp();
	$('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
	$(this).children('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
	$(this).siblings('.faq-list__answer').slideDown(400);
	$(this).siblings('.faq-list__answer').css({'display':'flex'});
});

//owl-carousel
  $(".owl-carousel").owlCarousel({
  	items: 1,
  	autoplay: true,
  	autoplayTimeout: 8000,
  	loop: true,
  	autoplaySpeed: 1000
  });
