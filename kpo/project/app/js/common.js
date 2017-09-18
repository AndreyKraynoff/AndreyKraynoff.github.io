$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
  	nav: true,
  	navText: ["<i class='ion-ios-arrow-left'></i>", "<i class='ion-ios-arrow-right'></i>"],
  	items: 1,
  	autoplay: true,
  	autoplayTimeout: 8000,
  	loop: true,
  	autoplaySpeed: 1000
  });
  
  $(window).scroll(function () {
  	scrtop = $(this).scrollTop(); //сколько прокручено
  	wh = $('.header').height();  //высота header
  	fh = $('.footer').height();  //высота футера
  	f_off = $('.footer').offset().top; //расстояние футера от верхней части страницы
     if (scrtop > f_off-wh) {
        $('.header').css({'position':'absolute'});
        $('.header').css({'top': +f_off-wh+'px'});
     }   
     else{
         $('.header').css({'position':'fixed'});
         $('.header').css({'top': 0});
     }
  });

  $('.menu__item_production').hover(
function(){
  if ($(window).width()>849) {
  scrtop = $(window).scrollTop(); //сколько прокручено
  $('.header').css({'position':'absolute'});
  $('.header').css({'top': scrtop+'px'});
  $('.sub-menu').css({'display':'block'});
}
return false;
},
function(){
   if ($(window).width()>1024) {
    $('.header').css({'top': 0});
    $('.header').css({'position':'fixed'});
    $('.sub-menu').css({'display':'none'});
}
return false;
}
);

//горизонтальный скролл
$(".scrolled-block").mCustomScrollbar({
theme: 'inset-dark', 
autoHideScrollbar: false, 
axis:'x', advanced:{autoExpandHorizontalScroll:true},
scrollButtons:{enable:true},
scrollButtons:{ scrollAmount: 0 },
scrollInertia: 100,
mouseWheel:{ enable: true, preventDefault: false}
});

if ($(window).width()<1025) {
  $.fn.mCustomScrollbar("destroy");
}
$(window).resize(function(){
if ($(window).width()<1025) {
  $.fn.mCustomScrollbar("destroy");
}
else{
  $(".scrolled-block").mCustomScrollbar({
theme: 'inset-dark', 
autoHideScrollbar: false, 
axis:'x', advanced:{autoExpandHorizontalScroll:true},
scrollButtons:{enable:true},
scrollButtons:{ scrollAmount: 0 },
scrollInertia: 100,
mouseWheel:{ enable: true, preventDefault: false}
});
}
});
//конец горизонтального скролла

$('.test-popup-link').magnificPopup({
  type: 'image'
});

$('.popup-content').magnificPopup({
        type: 'inline'
});
$('.ion-android-close').on( "click", function() {
  $.magnificPopup.close();
});

//image change
$(".gallery_product_photo").click(function(){
var src =  $(this).attr('src');
$('.active_product_photo').removeClass('active_product_photo');
$(this).parent().parent().addClass('active_product_photo');
$("#main_photo").replaceWith("<img id='main_photo' src=" +src+ ">");
});




//листалка
$("body").on("click", ".mfp-img", function () { 
numberpop = $(this).attr('src'); //берем значение атрибута scr у popup-img
var imp =  $('.impop[src="'+numberpop +'"]').index('.impop'); //берем индекс фотки в альбоме c таким же src
imp_next = imp+1; //берем следующий индекс
var size =  $('.impop').size(); //берем общее количество фото
if (imp_next+1>size) {imp_next = 0;} //если фотка последняя то приравниваем следующий индекс к нулю
var next_image =  $('.impop').eq(imp_next).attr('src'); //берем src следующего фото по индексу

$(this).attr("src", ""+ next_image +""); //меняем scr у popup-img
});

$(document).keyup(function(event){
    if (event.keyCode == 32 && $('.mfp-img').is(':visible') ) {
        numberpop = $('.mfp-img').attr('src'); //берем значение атрибута scr у popup-img
        var imp =  $('.impop[src="'+numberpop +'"]').index('.impop'); //берем индекс фотки в альбоме c таким же src
        imp_next = imp+1; //берем следующий индекс
        var size =  $('.impop').size(); //берем общее количество фото
        if (imp_next+1>size) {imp_next = 0;} //если фотка последняя то приравниваем следующий индекс к нулю
        var next_image =  $('.impop').eq(imp_next).attr('src'); //берем src следующего фото по индексу

        $('.mfp-img').attr("src", ""+ next_image +""); //меняем scr у popup-img
    }
});

$('#just-mail-icon').click(function(){
if ($(this).hasClass('opened')) {
  $(this).removeClass('opened');
  $('#just-mail').removeClass('opened');
}

  else{
  $(this).addClass('opened');
  $('#just-mail').addClass('opened');
  }
});

$('#burger').click(function(){
if ($('.menu').is(':visible')) {
  $('.menu').hide();
}
else{
$('.menu').show();
}
});





$(window).resize(function(){
if ($(window).width()<1200) {
  $('.product').append( $('#media_wrap') );
}
else{
  $('.product__description').append( $('#media_wrap') );
}
});
if ($(window).width()<1200) {
  $('.product').append( $('#media_wrap') );
}


/*$(function () {
  $(".phonemask").one('focus', function () {
    $(this).val("+7-")
  });
});*/
jQuery(function($){
   $("#phone").mask("+7999-999-99-99",{completed:function(){alert("You typed the following: "+this.val());}});

});
$("#phone_write_us").mask("+7999-999-99-99",{completed:function(){alert("You typed the following: "+this.val());}});

});
