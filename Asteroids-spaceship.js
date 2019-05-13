//Move the spaceship with left and right arrow keys
//Setting angle to radians
angleMode = "radians";
//Mover function used to make spaceship
var Mover = function(x,y) {
    this.position = new PVector(x,y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.topspeed = 4;
    this.xoff = 1000;
    this.yoff = 0;
    this.r = 16;
};
//calculating accerleration for spaceship
Mover.prototype.move = function(){
    this.acceleration.y += 1.0;
    this.acceleration.x += 1.0;
};
//updating velocity,position,acceleration
Mover.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};
//applying a force
Mover.prototype.applyForce = function(force) {
    this.acceleration.add(force);
};
//turning spaceship left
Mover.prototype.turnLeft = function() {
    angleMode = "degree";
    var left = PVector.get(this.velocity);
    left.rotate(-PI/4);
    //println(left);
    this.applyForce(left);
};
//turning spaceship right
Mover.prototype.turnRight = function() {
    angleMode = "degree";
    var right = PVector.get(this.velocity);
    right.rotate(PI/4);
   // println(right);
    this.applyForce(right);
};
// display spaceship 
Mover.prototype.display = function() {
    var angle = this.velocity.heading();
    stroke(0);
    strokeWeight(2);
    fill(127);
    pushMatrix();
    translate(this.position.x, this.position.y);
    rotate(angle);
    rect(-3,6,10,10);
    rect(14,6,10,10);
    triangle(-10,10,10,-25,30,10);
    fill(212, 204, 204);
    rect (-2,-5,24,5);
    popMatrix();
};
//checking edges in relation to the spaceship
Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } 
  else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } 
  else if (this.position.y < 0) {
    this.position.y = height;
  }
};

var spaceShip = new Mover(width/2,height/2);
//Checking if left arrow,right arrow, or z is pressed
keyPressed = function(){
    if(keyCode === LEFT)
    {
        spaceShip.turnLeft();
    }
    else if (keyCode === RIGHT){
        spaceShip.turnRight();
    }
    else if (keyCode === 90){
        spaceShip.move();
    } 
};
//Drawing function
var draw = function() {
  background(0, 0, 0);
  text("press z for boost",166,378,270,168);
  text("press left arrow to turn left",137,349,258,140);
  text("press right arrow to turn right",133,363,258,140);
  spaceShip.update();
  spaceShip.checkEdges();
  spaceShip.display(); 
};
