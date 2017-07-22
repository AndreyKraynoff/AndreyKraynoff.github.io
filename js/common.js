
  var c = document.getElementsByClassName("slide")[1].getBoundingClientRect();
  from_top = document.getElementsByClassName("slide")[1].offsetTop;
  count_of_slides = document.getElementsByClassName("slide").length;
  window_top = window.pageYOffset;

  console.log(c.top+'положение секции works относительно окна');;
  console.log(from_top+'положение секции works относительно начала документа');
  console.log(window_top+'положение окна относительно начала документа');

 where_we_are();




document.onwheel = function() {
	y = document.documentElement.clientHeight;
    step = 5; 
	event.preventDefault();
	console.log(event);
	if (event.deltaY < 0) {
		if (typeof steped == "undefined") {
			steped =0;
			slow_up();
		}
		if(steped == 0){
         slow_up();
		}
		return false;
	}
	else{
		if (typeof steped == "undefined") {
			steped =0;
			slow_down();
		}
		if(steped == 0){
         slow_down();
		}
		return false;
     }
function slow_down(){
			if (steped<y) {
				if (steped+step>y) {step = step-(steped+step-y); steped = steped+step; console.log(steped);}
				else{steped = steped+step;}
				window.scrollBy(0, step);	    
			    setTimeout(slow_down, 1);
			}
			else{
				steped = 0;
				where_we_are();
			}
			
		}
function slow_up(){
			if (steped<y) {
				if (steped+step>y) {step = step-(steped+step-y); steped = steped+step; console.log(steped);}
				else{steped = steped+step;}
				window.scrollBy(0, -step);	    
			    setTimeout(slow_up, 1);
			}
			else{
				steped = 0;
				where_we_are();
			}
			
		}

}

function where_we_are(){
     for (var i = 0; i < count_of_slides; i++) { //определение где мы сейчас
     	document.getElementsByClassName("navs")[i].classList.remove("active");
  	if (document.getElementsByClassName("slide")[i].getBoundingClientRect().top == 0) {
  		document.getElementsByClassName("navs")[i].classList.add("active");
  	}
  }  
}


