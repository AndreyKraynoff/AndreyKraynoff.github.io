document.addEventListener('touchstart', function() {swipe();}, false);


function swipe(){
	y = document.documentElement.clientHeight;
    step = 2; 
	event.preventDefault();
	if (typeof steped == "undefined") {
			steped =0;
			slow_down();
		}
   else{slow_down();}
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


