// constructor function
function Snake() {

this.x = 0; //current location
this.y = 0; // current location
this.xspeed = 1;
this.yspeed = 0;
this.total = 0;
this.tail = [];




// if distance is 1 pixel away between snake and food, then consume food.
this.eat = function(pos){
	var d = dist(this.x, this.y, pos.x, pos.y); //pos.x is food, pos.y is food
	
	if (d < 1) { // < 1 pixel
	this.total++; //if we eat food, add to the snake, increment total.
	return true;
	}
	
	else {
	return false;
	}
}

this.dir = function(x, y) {
	this.xspeed = x;
	this.yspeed = y;
}

this.death = function() {
	for (var i = 0; i < this.tail.length; i++){
		var pos = this.tail[i]; // check each portion of tail
		var d = dist(this.x, this.y, pos.x, pos.y);
		if (d < 1) { // if the head of the snake comes within 1 pixel of another portion of itself
		alert ("game over");
		s.dir(0,0); //reset direction to not moving
		this.x = 0; //x coord for resetting our snake to top left
		this.y = 0; // y coord for resetting our snake to top left
			this.total = 0; //reset snake to 1
			this.tail = [];
		}
	}
}

//updates the game board
this.update = function() {
	if (this.total === this.tail.length){ //if the length of our snake is the same size as our array, run this function. This ensures that the empty space is created before we try adding a new piece onto the snake.
	for (var i = 0; i < this.tail.length-1; i++) {
		this.tail[i] = this.tail[i+1];//shift each part of the snake up another position, leave an empty space for the addition of another snake part (see next line of code).
	}
}
	this.tail[this.total-1] = createVector(this.x,this.y); // at the new empty spot, create another square.
	
	
	this.x = this.x + this.xspeed*scl; //multiply by scale of 20 to change speed
	this.y = this.y + this.yspeed*scl; // multiply by scale of 20 to change speed
	
	
	//p5 constrain function to keep the snake from going off of the screen.
	this.x = constrain(this.x, 0, width-scl);
	this.y = constrain(this.y, 0, height-scl);
}

this.show = function() {
	
	fill('limegreen'); // white fill color
	
	for (var i = 0; i < this.total; i++) {
		rect(this.tail[i].x, this.tail[i].y, scl, scl);
	}

	rect(this.x, this.y, scl, scl);

}
}