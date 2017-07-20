document.touchstart  = function(){
	alert('alert');
}


document.onwheel = function(event) {
	y = document.documentElement.clientHeight;
   step = 2; 
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
				console.log(steped);
				console.log(step);
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
				console.log(steped);
				console.log(step);
				steped = 0;
			}
			
		}

}






