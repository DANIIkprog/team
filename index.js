//objects
var cvs = document.getElementById('cnv');;// канвас
var ctx=cvs.getContext("2d"); //игра в 2д

var char= new Image();
var bg= new Image();
var ice= new Image();
var diamond= new Image();

//находим объекты
char.src="img/char.png";
bg.src="img/phon.jpg";
ice.src="img/ice.png";
diamond.src="img/diamond.png";

//выполняем функцию после последнего объекта
bg.onload= draw;

//расположение
let charCol=10 , charRow= 480;

//рисуем объекты
function draw(){
	ctx.drawImage(bg, 0, 0);
	ctx.drawImage(char,charCol,charRow);
	ctx.drawImage(ice,700,430);
	ctx.drawImage(ice,500,330);
	ctx.drawImage(ice,700,230);
	ctx.drawImage(ice,200,330);
	ctx.drawImage(diamond,40,200);
}

//движение 
function moveOnce(event) {
	// движение вправо
	//проверяем нажатую клавишу/клик
	if (event.key === "d" ) {
		if (charCol < 740 || charRow <160){
			charCol+=50;
			draw();
		}
	}
	if (event.key === "a" ) {
		if (charCol > 0){
			charCol-=50;
			draw();
		}
	}
}
document.onkeyup = moveOnce;