$(document).ready(function() {
 $(".sf-menu").superfish({
    	delay: 200,
    	speed: "fast",
    	cssArrows: false
    });

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


function slides_move(){
	 number = $('.slide_active').index('.slide');
	 count = $('.slide').size();
	 $('.slide_active').removeClass('slide_active');
    if ((number+1) == count) {
	$('.slide').eq(0).addClass('slide_active');
	setTimeout(slides_move, 9000);
   }
	else{
		$('.slide').eq(number+1).addClass('slide_active');
		setTimeout(slides_move, 9000);
	}
    
}
setTimeout(slides_move, 9000);



});