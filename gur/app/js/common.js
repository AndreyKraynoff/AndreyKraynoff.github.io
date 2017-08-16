$(document).ready(function() {
	$(".sf-menu").superfish({
		delay: 200,
		speed: "fast",
		cssArrows: false
	}); 




	function slides_move(){                             //цикл
		number = $('.slide_active').index('.slide');
		count = $('.slide').size();
		$('.slide_active').removeClass('slide_active');
		if ((number+1) == count) {
			$('.slide').eq(0).addClass('slide_active');
			last = setTimeout(slides_move, 4000);   
			number = $('.slide_active').index('.slide');
			count = $('.slide').size();
			console.log('last_procces_id='+last);
		}
		else{
			$('.slide').eq(number+1).addClass('slide_active');
			not_last = setTimeout(slides_move, 4000);   

			number = $('.slide_active').index('.slide');
			count = $('.slide').size();
			console.log('not_last_procces_id='+not_last);
		}

	}
   cicle = setTimeout(slides_move, 4000);          //идентификатор таймера



	$('.next_slide').click(function(){ 
		number = $('.slide_active').index('.slide');
		count = $('.slide').size();
		$('.slide_active').removeClass('slide_active');
		if ((number+1) == count) {
			$('.slide').eq(0).addClass('slide_active');
		}
		else{
			$('.slide').eq(number+1).addClass('slide_active');
		}
		
	});

	$('.prev_slide').click(function(){
		$(this).parent().removeClass('slide_active');
		number = $(this).parent().index('.slide');
		count = $('.slide').size();
		if (number == 0) {
			$('.slide').eq(count-1).addClass('slide_active');
		}
		else{
			$('.slide').eq(number-1).addClass('slide_active');
		}

	});






/*$('.navigation').children('.navigation__item').hover(function(){
	$(this).children('.sub-menu').slideDown(400);
},function(){
	$(this).children('.sub-menu').slideUp(400);
});
 function()
 */


});