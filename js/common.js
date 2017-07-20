$(document).ready(function() {

$(document).scroll(function(){
strategy = document.getElementById('strategy');
works = document.getElementById('works');
contacts = document.getElementById('contacts');
header = document.getElementById('header');

wh = $(window).height();
currentScrollTop = jQuery(document).scrollTop();

var box = header.getBoundingClientRect();
box_top = -box['top'];
//console.log(box_top);
//console.log(currentScrollTop);
//$('html, body').animate({ scrollTop: $(strategy).offset().top}, 1500); 
});



document.onmousewheel = function (e) {
  e.preventDefault();
  var lastScrollTop = 0;
  currentScrollTop = jQuery(document).scrollTop();
  wh = $(window).height();
  console.log(currentScrollTop);
  var st = $(this).scrollTop();
if (st > lastScrollTop){
   console.log('вниз');
  //$('html, body').animate({ scrollTop: $('#works').offset().top}, 1500); 
} else {
   console.log('вверх');
}
lastScrollTop = st;
}





function wheel_scroll(){

currentScrollTop = jQuery(document).scrollTop();
wh = $(window).height();
var box = header.getBoundingClientRect();
box_top = -box['top'];
console.log(currentScrollTop);


}


});
