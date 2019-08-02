function moveHands () {
	with (new(Date)){
		h=30 *((getHours()%12) + getMinutes()/ 60); //30 degree HOURES
		m=6 * getMinutes();//6 degree every minute
		s=6 * getSeconds(); // 6 degree every second
		
		//rotate css.-->
		document.getElementById("seconds").style.cssText = "-webkit-transform:rotate(" + s + "deg);";
		
		document.getElementById("minutes").style.cssText = "-webkit-transform:rotate(" + m + "deg);";
		
		document.getElementById("houres").style.cssText = "-webkit-transform:rotate(" + h + "deg);";
		
		setTimeout(moveHands, 1000);
	}
  
}

window.onload= moveHands;