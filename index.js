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
//рисуем объекты
function draw(){
	ctx.drawImage(bg, 0, 0);
	ctx.drawImage(ice,700,430);
	ctx.drawImage(ice,500,330);
	ctx.drawImage(ice,700,230);
	ctx.drawImage(ice,200,330);
	ctx.drawImage(diamond,40,200);
	switch (move){
		case "left":
			ctx.drawImage(charLeft,charCol,charRow);
			break;
		case "right":
			ctx.drawImage(charRight,charCol,charRow);
			break;
		case "stay":
			ctx.drawImage(char,charCol,charRow);
			break;
		case "jump":
			ctx.drawImage(char,charCol,charRow);
			break
		default:
		    ctx.drawImage(char,charCol,charRow);
	}
}
//расположение льдин
let iceRow = [700,230];


// проверяет запрыгнула на льдину или нет
let iceCheck=function(charCol,charRow,i){
	if ((charCol+76)<880 && (charCol+76)>700 && (i+200)==518) 
		return 1;
	if ((charCol+76)<680 && (charCol+76)>500 && (i+200)==418) 
		return 1;
	if ((charCol+76)<880 && (charCol+76)>700 && (i+200)==318) 
		return 1;
	if ((charCol+76)<380 && (charCol+76)>200 && (i+200)==418) 
		return 1;
}
//движение 
function moveOnce(event) {
	// движение вправо
	//проверяем нажатую клавишу/клик
	switch (event.code){
		case "ArrowRight":
			if (charCol < 751){
			charCol+=10;
			move="right";
			draw();
			}
			break;
		case "ArrowLeft":
			if (charCol > 0){
			charCol-=10;;
			move="left";
			draw();
			}
			break;
		case "ArrowUp":
			charRow-=200;
			move="jump";
			draw();
			for(let i=charRow; i<480; i++){                //падение после прыжка
				 setTimeout(moveJump,300);
				 if(iceCheck(charCol,charRow,i)==1)break;
	        }
			break;
}
}
//гравитация
function moveJump(){
        charRow++;
		move="jump";
		draw();
}
function stay(){
	move="stay";
	draw();
}
// чтобы лучше понимать что происходит
function shelk(){
	console.log ("Клик в "+ event.clientX + ", "+ event.clientY +"!");
	console.log ("Координаты в "+ charCol + ", "+ charRow +"!");
}
document.onkeydown = moveOnce;
document.onkeyup = stay;
document.onmouseup = shelk;