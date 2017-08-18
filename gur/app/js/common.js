$(document).ready(function() {
	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	}); 

//костыль которого могло не быть если бы выводили через walker
$(".sf-with-ul").parent().addClass('navigation__item_with-submenu');

var timeouts = [];

sl_interval = 10000;

  function slides_move(){                             //цикл
  	number = $('.slide_active').index('.slide');
  	count = $('.slide').size();
  	$('.slide_active').removeClass('slide_active');
  	if ((number+1) == count) {
  		$('.slide').eq(0).addClass('slide_active');
  		last = setTimeout(slides_move, sl_interval);   
			timeouts.push(last);    //заряжаем  таймаут в массив
			number = $('.slide_active').index('.slide');
			count = $('.slide').size();
		}
		else{
			$('.slide').eq(number+1).addClass('slide_active');
			not_last = setTimeout(slides_move, sl_interval);   
            timeouts.push(not_last);    //заряжаем  таймаут в массив
            number = $('.slide_active').index('.slide');
            count = $('.slide').size();
        }

    }
   cicle = setTimeout(slides_move, sl_interval);          //идентификатор таймера
   timeouts.push(cicle);    //заряжаем  таймаут в массив

   function clear_touts(){
   	for (var i = 0; i < timeouts.length; i++) {
   		clearTimeout(timeouts[i]);
   	}
   	timeouts = [];	
   }

   $('.next_slide').click(function(){ 
   	clear_touts();
   	number = $('.slide_active').index('.slide');
   	count = $('.slide').size();
   	$('.slide_active').removeClass('slide_active');
   	if ((number+1) == count) {
   		$('.slide').eq(0).addClass('slide_active');
   	}
   	else{
   		$('.slide').eq(number+1).addClass('slide_active');
   	}
		cicle = setTimeout(slides_move, sl_interval);          //идентификатор таймера
        timeouts.push(cicle);    //заряжаем  таймаут в массив
    });

   $('.prev_slide').click(function(){
   	clear_touts();
   	$(this).parent().removeClass('slide_active');
   	number = $(this).parent().index('.slide');
   	count = $('.slide').size();
   	if (number == 0) {
   		$('.slide').eq(count-1).addClass('slide_active');
   	}
   	else{
   		$('.slide').eq(number-1).addClass('slide_active');
   	}
		cicle = setTimeout(slides_move, sl_interval);          //идентификатор таймера
        timeouts.push(cicle);    //заряжаем  таймаут в массив
    });


$(".player").mb_YTPlayer();



/*$('.navigation').children('.navigation__item').hover(function(){
	$(this).children('.sub-menu').slideDown(400);
},function(){
	$(this).children('.sub-menu').slideUp(400);
});
 function()
 */


});