$(document).ready(function() {
$('#future').click(function(){
$('.underline').addClass('future');
$('.future_set').addClass('hidden'); 
setTimeout(function () {  
$('.future_set img').css({"display":"none"});
$('.future_set').css({"font-size":"0px"});
$('.future_set').css({"width":"0%"});
 }, 400);

});
$('#starter').click(function(){
$('.underline').removeClass('future');
if ($(window).width()<600) {
$('.future_set').css({"width":"50%"});
}
else{
	$('.future_set').css({"width":"25%"});
}

setTimeout(function () {  
$('.future_set').removeClass("hidden");
$('.future_set img').css({"display":"inline-block"});
$('.future_set').css({"font-size":"0px"});
 }, 400);

});

$('.faq_question').click(function(){
	$('.arrow').removeClass('active');
	$(this).children('.arrow').addClass('active');	
	$('.answer').slideUp();
	var hiddenHeight = $(this).children('.answer').height();
	$(this).children('.answer').css('height',hiddenHeight);
    $(this).children('.answer').slideDown(400);
});

$(document).scroll(function(){
	ofst = $(window).scrollTop();
	if (ofst>0) {
		$('header').addClass('scrolled');
	}
 else{
 	$('header').removeClass('scrolled');
 }
});


$(".popup_link").click(function(){
$('body').css({'overflow': 'hidden'});
$(this).siblings('.popup').fadeIn();
});
$('.close_popup').click(function(){
	$('body').css({'overflow': 'auto'});
$(this).parent('.popup').fadeOut();
});
});
