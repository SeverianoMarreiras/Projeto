{
var satual=1;
var smax=3;
var stmp=3000;

function troca(){
	document.getElementByid("p1").style.visibility="hidden";
	document.getElementByid("p2").style.visibility="hidden";
	document.getElementByid("p3").style.visibility="hidden";
	
	document.getElementByid("p" + satual).style.visibility="visible";
			
		satual = satual ++;

			if(satual > smax ){
				satual = 1;
			}
}
	 function slider(){
		document.getElementByid("p1").style.visibility="hidden";
		document.getElementByid("p2").style.visibility="hidden";
		document.getElementByid("p3").style.visibility="visible";
			
		sliderTimer=setInterval(troca,stmp);
	}
}