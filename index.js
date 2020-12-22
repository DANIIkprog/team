//objects
var cvs = document.getElementById('cnv');;// канвас
var ctx=cvs.getContext("2d"); //игра в 2д

var char= new Image();
var bg= new Image();
var ice= new Image();
var diamond= new Image();


char.src="img/char.jpg";
bg.src="img/phon.jpg";
ice.src="img/ice.png";
diamond.src="img/diamond.png";

function draw(){
	ctx.drawImage(bg, 0, 0);
	ctx.drawImage(ice,700,430);
	ctx.drawImage(ice,500,330);
	ctx.drawImage(ice,700,230);
	ctx.drawImage(ice,200,330);
	ctx.drawImage(diamond,40,200);
}
ice.onload= draw;

