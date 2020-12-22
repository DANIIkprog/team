//objects
var cvs = document.getElementById('cnv');;// канвас
var ctx=cvs.getContext("2d"); //игра в 2д

var char= new Image();
var bg= new Image();
var ice= new Image();

char.src="img/char.jpg";
bg.src="img/phon.jpg";
ice.src="img/ice.png";

function draw(){
	ctx.drawImage(bg, 0, 0);
}
ice.onload= draw;

