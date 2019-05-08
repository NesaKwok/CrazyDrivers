// Reflection and references are down at the bottom
var canvas;
var ctx;
var fps = 250

var w = 250;
var h = window.innerHeight-100;

var mouseX;
var mouseY;

// var parameters = [15, 40, 70];

var score = 0;
// var level = 1; 

var allData = [];
var allData2 = [];

var gameOver = false;

var car = {
	"x" : w/2-20,
	"y" : h-100,

	"w" : 30,
	"l" : 50,

	"c" : "red"
}

var line = {
	"x" : w/2-60,
	"y" : h/7,

	"w" : 10,
	"l" : 100,

	"dy" : 3,

	"c" : "lightgrey"
}

var line2 = {
	"x" : w/2+40,
	"y" : h/7,

	"w" : 10,
	"l" : 100,

	"dy" : 3,

	"c" : "lightgrey"
}

var line3 = {
	"x" : w/2-60,
	"y" : h/2+50,

	"w" : 10,
	"l" : 100,

	"dy" : 3,

	"c" : "lightgrey"
}

var line4 = {
	"x" : w/2+40,
	"y" : h/2+50,

	"w" : 10,
	"l" : 100,

	"dy" : 3,

	"c" : "lightgrey"
}

var crazyDrivers = {
	"x" : rand(200),
	"y" : 0,

	"w" : 30,
	"l" : 50,

	"dx" : rand(5)-2.5,
	"dy" : rand(5),

	"c" : "orange"
}

var truckDrivers = {
	"x" : rand(w),
	"y" : 0,

	"w" : 30,
	"l" : 90,

	"dy" : rand(10),

	"c" : "orange"
}



// var leftBorder = myCanvas.w - car.w;
// var rightBorder = myCanvas.w

setUpCanvas();
animationLoop();
createData();
createData2();
// drawCar();

document.onkeydown = function(){

	// 37 = left
	if (event.which == 37){
		car.x -= 100
	}

	// 39 = right
	if (event.which == 39){
		car.x += 100
	}

	// 38 = up
	if (event.which == 38){
		car.y -= 30
	}

	// 40 = down
	if (event.which ==40){
		car.y += 30
	}

// console.log(event.which);

}

function bounds(){

	
	if (car.x < 20){
		car.x = 20;
	}

	// if (car.x > leftBorder){
	// 	car.x = leftBorder;
	// }

	if (car.x > 200){
		car.x = 200;
	}

	
	if (car.y + car.l > h){
		car.y = h-60;
	}


	if (line.y > h){
		line.y = 0;
	}

	if (line2.y > h){
		line2.y = 0;
	}

	if (line3.y > h){
		line3.y = 0;
	}

	if (line4.y > h){
		line4.y = 0;
	}

	// if(car.x > rightBorder){
	// 	car.x = rightBorder;
	// }
}

function move(o){
	o.y += o.dy;
}

// function circleMove(o){
// 	o.x += o.dx;
// 	o.y += o.dy;
// }


function drawLine(o){
	ctx.beginPath();
	ctx.rect(o.x, o.y, o.w, o.l);
	ctx.fillStyle = o.c;
	ctx.fill();
}


function drawCar(o){
	ctx.beginPath();
	ctx.rect(o.x, o.y, o.w, o.l);
	ctx.fillStyle = "#ef5a43";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x-5, o.y-2, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.rect(o.x+30, o.y-2, 5, 20);
	ctx.fillStyle = "grey"
	ctx.fill();

	ctx.rect(o.x+-5, o.y+33, 5, 20);
	ctx.fillStyle = "grey"
	ctx.fill();

	ctx.rect(o.x+30, o.y+33, 5, 20);
	ctx.fillStyle = "grey"
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+5, o.y, 20, 10);
	ctx.fillStyle = "white"
	ctx.fill();
}

function drawCrazyDrivers(o){
	ctx.beginPath();
	ctx.rect(o.x, o.y, 30, 50);
	ctx.fillStyle = "#4286f4";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x-5, o.y-2, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+30, o.y-2, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+-5, o.y+33, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+30, o.y+33, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+5, o.y+40, 20, 10);
	ctx.fillStyle = "white";
	ctx.fill();
	}

function drawTruckDrivers(o){
	ctx.beginPath();
	ctx.rect(o.x, o.y, o.w, o.l);
	ctx.fillStyle = "orange";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x-5, o.y-2, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+30, o.y-2, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+-5, o.y+33, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+30, o.y+33, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+-5, o.y+66, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+30, o.y+66, 5, 20);
	ctx.fillStyle = "grey";
	ctx.fill();

	ctx.beginPath();
	ctx.rect(o.x+5, o.y+70, 20, 10);
	ctx.fillStyle = "white";
	ctx.fill();
	}

function drawCone(o){
	ctx.beginPath();
	ctx.arc(o.x, o.y, o.r, 0, 2*Math.PI)
	ctx.fillStyle = o.c;
	ctx.fill();
}


function animationLoop(){
	clear();

	// drawAllData();
	drawCar(car);
	// drawTruckDrivers(truck);
	detectCollision(car);
	detectCollisionTruck(car);

	drawLine(line);
	drawLine(line2);
	drawLine(line3);
	drawLine(line4);
	// drawCone(cone);

	move(line);
	move(line2);
	move(line3);
	move(line4);
	// move(truckDrivers);

	bounds();


	// circleMove(cone);
	// drawCone(cone);
	drawAllShapes();
	drawAllShapes2();
	text("Score: " + Math.floor(score), "20px Helvetica", 150, 45, "white");
	// text("Level: " + level, "20px Helvetica", 20, 45, "white");
	

	if (gameOver){

		ctx.beginPath();
		ctx.rect(0, 0, w, h);
		ctx.fillStyle = "#262626";
		ctx.fill();
		
		text("Game Over", "30px Helvetica", 50, 220, "red");
		text("Score: " + Math.floor(score), "20px Helvetica", 80, 250, "white");
		// text("Level: " + level, "20px Helvetica", 80, 280, "white");
		return
		
	}

	



// bouncy

	// if (cone.x + 20 > w || cone.x - 20 < 0){
	// 	cone.dx = cone.dx * (-1)
	// }

	// if (obj1.y + radius > h || obj1.y + radius < 0){
	// 	obj1.dy = obj1.dy * (-1)
	// }


	requestAnimationFrame(animationLoop);
}

function buttonPress(e){
	gameOver = false;
	score = 0;
	car.x = w/2-20;
	car.y = h-100;

}

// function getMousePos(canvas, ext){
// 	var rect = canvas.getBoundingClientRect();
// 	return{
// 		x: ext.clientX - rect.left,
// 		y: ext.clientY - rect.top
// 	}
// }

function drawAllShapes(){
	for (var i = 0; i<allData.length; i++){
		drawCrazyDrivers(allData[i]);
		makeStuffMovePlease(allData[i]);
		pleaseBounce(allData[i]);
		
		// move(allData2[i]);
		//detectCollision(drawCar);

		score += 1/fps;

		if (allData[i].y + allData[i].l > h){
			allData[i].y = 0;

		// if (allData2[i].y + allData2[i].l > h){
		// 	allData2[i].y = 0;



		// if(allData[i].x + allData[i].w > 230){
		// 	allData[i].x = ;
		// }

	}


	}
}

function drawAllShapes2(){
	for (var i = 0; i<allData2.length; i++){
		drawTruckDrivers(allData2[i]);
		move(allData2[i]);
		// makeStuffMovePlease(allData2[i]);
		// pleaseBounce(allData2[i]);
		
		// move(allData2[i]);
		//detectCollision(drawCar);

		if (allData2[i].y + allData2[i].l > h){
			allData2[i].y = 0;
		}

		// if (allData2[i].y + allData2[i].l > h){
		// 	allData2[i].y = 0;



		// if(allData[i].x + allData[i].w > 230){
		// 	allData[i].x = ;
		// }

	}


}




function detectCollision(o){
	for(var i = 0; i<allData.length; i++){
		if(o != allData[i]){
			if(

				// IT WORKSS!!
				o.x < allData[i].x + allData[i].w &&
				o.x + o.w > allData[i].x &&
				o.y < allData[i].y + allData[i].l&&
				o.y + o.l > allData[i].y

				// o.x + o.w > allData[i].w - allData[i].x &&
				// o.x < allData[i].x + o.w &&
				// o.y < allData[i].y + o.w &&
				// o.y + o.l < allData[i].y

			// When I use the code here, collision works too much
				// o.x > allData[i].x


			// When I use the code here, collision doesn't work
				// o.x + o.w < allData[i].x - allData[i].w &&
				// o.x - o.w > allData[i].x + allData[i].w &&
				// o.y + o.l < allData[i].y - allData[i].l &&
				// o.y - o.l > allData[i].y + allData[i].l

				// o.x > allData[i].x - allData[i].w
				// && o.x - 200 < allData[i].x + allData[i].w
				// && o.y + o.l > allData[i].y - allData[i].l
				// && o.y - o.l < allata[i].y + allData[i].l

				){

				console.log("hit");

				gameOver = true;

				o.dx *= 0; 
				o.dy *= 0;

				allData[i].dx *= 0;
				allData[i].dy *= 0;

				line.dy *= 0;
				line2.dy *= 0;
				line3.dy *= 0;
				line4.dy *= 0;

				
				// console.log("collision");


			}
				
		}
	}
}

function detectCollisionTruck(o){
	for(var i = 0; i<allData2.length; i++){
		if(o != allData2[i]){
			if(

				// IT WORKSS!!
				o.x < allData2[i].x + allData2[i].w &&
				o.x + o.w > allData2[i].x &&
				o.y < allData2[i].y + allData2[i].l&&
				o.y + o.l > allData2[i].y

				// o.x < truckDrivers.x + allData[i].w &&
				// o.x + o.w > truckDrivers.x &&
				// o.y < truckDrivers.y + truckDrivers.l&&
				// o.y + o.l > truckDrivers.y

				// o.x + o.w > allData[i].w - allData[i].x &&
				// o.x < allData[i].x + o.w &&
				// o.y < allData[i].y + o.w &&
				// o.y + o.l < allData[i].y

			// When I use the code here, collision works too much
				// o.x > allData[i].x


			// When I use the code here, collision doesn't work
				// o.x + o.w < allData[i].x - allData[i].w &&
				// o.x - o.w > allData[i].x + allData[i].w &&
				// o.y + o.l < allData[i].y - allData[i].l &&
				// o.y - o.l > allData[i].y + allData[i].l

				// o.x > allData[i].x - allData[i].w
				// && o.x - 200 < allData[i].x + allData[i].w
				// && o.y + o.l > allData[i].y - allData[i].l
				// && o.y - o.l < allata[i].y + allData[i].l

				){

				console.log("hit HIT");

				gameOver = true;

				o.dx *= 0; 
				o.dy *= 0;

				allData[i].dx *= 0;
				allData[i].dy *= 0;

				line.dy *= 0;
				line2.dy *= 0;
				line3.dy *= 0;
				line4.dy *= 0;

				
				// console.log("collision");


			}

				if(gameOver){
					$("#replay").show();
				}

				else{
					$("#replay").hide();
				}
				
		}
	}
}


// if (console.log("hit"){
// 	gameOver = false;
// })

function text(txt, fnt, x, y, c){
	ctx.fillStyle = c;
	ctx.font = fnt;
	ctx.fillText(txt, x, y);
}

function makeStuffMovePlease(o){
	o.x += o.dx;
	o.y += o.dy;

}

function pleaseBounce(o){

	if (o.x + 32 > w || o.x < 0){
		o.dx *= -1
	}

}


function createData(num){
	for (var i = 0; i<3; i++){
		allData.push({
			"x" : rand(w),
			"y" : 0,

			"w" : 30,
			"l" : 50,

			"dx" : rand(5)-2.5,
			"dy" : rand(5),

			"c" : "orange"
		})
	}

}

function createData2(num){
	for (var i = 0; i<2; i++){
		allData2.push({
			"x" : rand(w),
			"y" : 0,

			"w" : 30,
			"l" : 90,

			"dy" : rand(3),

			"c" : "orange"
		})
	}

}



function setUpCanvas(){
	canvas = document.querySelector("#myCanvas");
	document.addEventListener("mousedown", buttonPress, false);
	canvas.width = w;
	canvas.height = h;
	canvas.style.background = "#262626";
	ctx = canvas.getContext("2d");
}

function rand(num){
	var result = Math.random()*num;
	return result
}

function randi(num){
	var result = Math.floor(Math.random()*num);
	return result
}

function clear(){
	ctx.clearRect(0, 0, w, h);
}

// REFERENCES ===============================================

	//www.w3schools.com/graphics/canvas_text.asp

	//www.w3schools.com/graphics/game_score.asp

// REFLECTION ===============================================

// Annessa Kwok
// 3148562

// Many of the things that I wanted to implement into my game
// worked for the most part. During the process of creating my
// obstacles, I decided to be more playful with it. Rather than
// having stable obstacles, such as cones and potholes, I decided
// to create opposing cars that would bounce from side to side
// instead of limiting them to the three lanes on the screen.
// The opposing cars and the car that the user controls all work 
// as I was intending it to as well as the working scoreboard and
// the game over screen. After seeing how everything is working, 
// I decided to make it more challenging by adding larger trucks 
// but having them move at a slower velocity. The collision of the 
// cars was a little difficult to create, but I was able to figure 
// out the problem (some variables were not defined in createData 
// and allData.push) and have the game working.

// An aspect that I was not able to implement was the “play again” 
// button. But for now, I don’t find that the absence of the “play 
// again” button to be a crucial aspect of the game, however, 
// it would be nice to include it in for convenient purposes.

// Another aspect I was not able to put into the game was having 
// the large orange trucks to follow specific x coordinates. 
// I tried creating a global variable where parameters = [15, 40, 70]
// indicating that the object will spawn at those specific x coordinates, 
// but it seems like this is not the way to make an object randomly 
// shift from those three specific points.

// I also wanted to implement levels in the game where, when the 
// user reaches a certain score, the level and difficulty of the 
// game increases (Ex. Score: 5, Level 1 becomes level 2). I was 
// able to create text for Level: 1, but sadly, I was not able to 
// increase the number when the score == 5 and the velocity of the 
// cars did not increase.

// Elements that were learned in class that was used in this code 
// included global variables, onkeydown function, animation loop, 
// using velocity, detecting collision, and setting boundaries in 
// a canvas. A part of the code where I was able to draw the details 
// ires, windows) of the cars and trucks were taught by Ian Jarvis 
// outside of class.

// Elements that were not learned in class but was picked up from 
// watching tutorials was how to keep score as well as implementing 
// text (credited to w3schools).

	//www.w3schools.com/graphics/canvas_text.asp

	//www.w3schools.com/graphics/game_score.asp 



