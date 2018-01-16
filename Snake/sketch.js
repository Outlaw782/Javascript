var s;
var scl = 30; //sets the size of our squares, MUST BE A MULTIPLE OF OUR CANVAS DIMENSIONS
var food;
var direction = "null"; // to determine which direction our snake is going.


function setup(){
	createCanvas(600, 600);
	s = new Snake();
	frameRate(15); //changes framerate of snake game.
	pickLocation();
}

// floor rounds us down, makes sure were using whole numbers
// this divides our canvas into an actual grid, so food appears correctly on the grid.
function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

// background color
function draw() {
	background('#222222'); //canvas color
	
		if (s.eat(food)){
		pickLocation(); // if food is eaten, call pick location to spawn more food.
	}
	
	s.death();
	s.update();
	s.show();

	

	
	fill("yellow"); //food color
	rect(food.x, food.y, scl, scl);
	

}


function keyPressed(){

	
	if (keyCode === UP_ARROW){
		if (direction == "down") //this if keeps the player from reversing his direction to the opposite way & killing himself.
		{
			return false;
		}
		s.dir(0, -1); //0 on x axis, -1 is up.
		direction = "up";
	}
	
	else if (keyCode === DOWN_ARROW) {
		if (direction == "up")
		{
			return false;
		}
	s.dir(0, 1);
	direction = "down";
	}
	
	else if (keyCode === RIGHT_ARROW) {
		if (direction == "left")
	{
		return false;
	}
	s.dir(1, 0);
	direction = "right";
	}
	
	else if (keyCode === LEFT_ARROW) {
		if (direction == "right")
		{
			return false;
		}
	s.dir(-1, 0);
	direction = "left";
	}
}
