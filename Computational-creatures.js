//declaring variables
var Xpos;
var Ypos;
//creature function
var creature = function(){
    this.position = new PVector(random(width),random(height));
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
//creature constructor
creature.prototype.update = function() {
    //declaring mouse
    var mouse = new PVector(mouseX,mouseY);
    var direction = PVector.sub(mouse, this.position);
    //normalizing
    direction.normalize();
    //multiplying
    direction.mult(0.2);
    //setting accerlation to direction
    this.acceleration=direction;
    //adding acceleration to velocity
    this.velocity.add(this.acceleration);
    //limiting velocity
    this.velocity.limit(3.5);
    //adding velocity to position
    this.position.add(this.velocity);
};
//function that displays creature
creature.prototype.display = function(){
    //animal
    image(getImage("avatars/piceratops-ultimate"),this.position.x,this.position.y,60,60);
};
//conditons regarding boarders
creature.prototype.checkEdges = function(){
    //check if position is greater than 400 (width)
    if (this.position.x > width) {
    this.position.x = 0;
    } 
    //check if position is less than 0 (width)
    else if (this.position.x < 0) {
    this.position.x = width;
    }
    //check if position is greater than 400 (height)
    if (this.position.y > height) {
    this.position.y = 0;
  } 
    //check if position is less than 0 (height)
    else if (this.position.y < 0) {
    this.position.y = height;
  }
};
//making an array
var beast = [];
//making multiple creatures
for (var i = 0; i < 20; i++) {
    //variable set to object
    beast[i] = new creature(); 
}
draw = function() {
    background(147, 198, 217);
    noStroke();
    //colouring sun
    fill(247, 255, 0);
    //drawing sun
    ellipse(364,34,150,150);
    fill(255, 89, 0);
    ellipse(368,30,100,100);
    fill(255, 0, 0);
    ellipse(396,-1,100,100);
    //looping creature function
    for (var i = 0; i < beast.length; i++) {
        //calling update constructor
        beast[i].update();
        //calling checkEdges constructor
        beast[i].checkEdges();
        //calling display constructor
        beast[i].display(); 
    }
};
