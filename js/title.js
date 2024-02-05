if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 300);

}

var x = 0;

var titleText = [ "|",
					"B|",
					"B |",
					"B R|",
					"B R |",
					"B R A|",
					"B R A |",
					"B R A T|",
					"B R A T |",
					"B R A T W|",
					"B R A T W |",
					"B R A T W A|",
					"B R A T W A |"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}