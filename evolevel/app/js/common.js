$(function() {
$()
comp = $('.comp_bg').height();
$('.composition-text-smm').css({'min-height': +comp+'px'});

$(window).resize(function(){
comp = $('.comp_bg').height();
$('.composition-text-smm').css({'min-height': +comp+'px'});
});

//$('body').mCustomScrollbar({theme:"dark",mouseWheelPixels: 150,scrollInertia: 300});

$(".phone_write_us").mask("+7(999)999-9999");



});
