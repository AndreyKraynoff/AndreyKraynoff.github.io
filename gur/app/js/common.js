$(document).ready(function() {
 $(".sf-menu").superfish({
    	delay: 200,
    	speed: "fast",
    	cssArrows: false
    }); 

function slides_move(){
	 number = $('.slide_active').index('.slide');
	 count = $('.slide').size();
	 $('.slide_active').removeClass('slide_active');
    if ((number+1) == count) {
	$('.slide').eq(0).addClass('slide_active');
	var rrr =setTimeout(slides_move, 8000);
   }
	else{
		$('.slide').eq(number+1).addClass('slide_active');
	var bbb =	setTimeout(slides_move, 8000);
	}
    
}
setTimeout(slides_move, 6000);



$('.next_slide').click(function(){

$(this).parent().removeClass('slide_active');
number = $(this).parent().index('.slide');
count = $('.slide').size();
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