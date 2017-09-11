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
        $('.header').addClass('sticked');
        $('.header').css({'top': +f_off-wh+'px'});
     }   
     else{
         $('.header').removeClass('sticked');
         $('.header').css({'top': 0});
     }
  });

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
//конец горизонтального скролла

$('.test-popup-link').magnificPopup({
  type: 'image'
});

$('.popup-content').magnificPopup({
        type: 'inline'
});
$('#close').on( "click", function() {
  $.magnificPopup.close();
});

//image change
$(".gallery_product_photo").click(function(){
var src =  $(this).attr('src');
$('.active_product_photo').removeClass('active_product_photo');
$(this).parent().parent().addClass('active_product_photo');
$("#main_photo").replaceWith("<img id='main_photo' src=" +src+ ">");
});
//end image change

//времянка
wh = $('.header').height();  //высота header
$('.content-wrapper').css({'min-height': +wh+'px'});

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

});
