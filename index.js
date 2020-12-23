//objects
var cvs = document.getElementById('cnv');;// канвас
var ctx=cvs.getContext("2d"); //игра в 2д

var char= new Image();
var bg= new Image();
var ice= new Image();
var diamond= new Image();
var charLeft= new Image();
var charRight= new Image();
var charLeftJump= new Image();
var charRightJump= new Image();
//находим объекты
char.src="img/front.png";
bg.src="img/phon.jpg";
ice.src="img/ice.png";
diamond.src="img/diamond.png";
charLeft.src="img/run-left.png";
charRight.src="img/run-right.png";
charLeftJump.src="img/jump-left.png";
charRightJump.src="img/jump-right.png";

//выполняем функцию после последнего объекта
bg.onload= draw;

//расположение
let charCol=10 , charRow= 480;
let move="";
let lastMove="";

//рисуем объекты
function draw(){
	ctx.drawImage(bg, 0, 0);
	ctx.drawImage(ice,700,430);
	ctx.drawImage(ice,500,330);
	ctx.drawImage(ice,700,230);
	ctx.drawImage(ice,200,330);
	ctx.drawImage(diamond,40,200);
	if (move=="left"){
		if (lastMove=="right"){
			ctx.drawImage(char,charCol,charRow);
		}
		else{
			ctx.drawImage(charLeft,charCol,charRow);
		}
		}
	else if (move=="right"){
		if (lastMove=="left"){
			ctx.drawImage(char,charCol,charRow);
		}
		else{
		ctx.drawImage(charRight,charCol,charRow);
		}
	}
	else if (move=="jump"){
			ctx.drawImage(char,charCol,charRow);
			
	}
	else{
		ctx.drawImage(char,charCol,charRow);
	}
}


//движение 
function moveOnce(event) {
	// движение вправо
	//проверяем нажатую клавишу/клик
	if (event.key === "d" ) {
		if (charCol < 740 || charRow <160){
			charCol+=10;
			lastMove=move;
			move="right";
			draw();
		}
	}
	if (event.key === "a" ) {
		if (charCol > 0){
			charCol-=10;
			lastMove=move;
			move="left";
			draw();
		}
	}
	if (event.key === "w" ) {
			charRow-=200;
			lastMove=move;
			move="jump";
			draw();
	}
}
document.onkeydown = moveOnce;