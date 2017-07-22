
  var c = document.getElementById('contacts').getBoundingClientRect();
  from_top = document.getElementsByClassName("slide")[1].offsetTop;
  window_top = window.pageYOffset;

  console.log(c.top+'положение секции контакты относительно окна');;
  console.log(from_top+'положение секции контакты относительно начала документа');
  console.log(window_top+'положение окна относительно начала документа');
 


document.onwheel = function() {
	//y = document.documentElement.clientHeight;
	y = from_top - window_top;
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
			}
			
		}

}



