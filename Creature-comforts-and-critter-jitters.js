//squirrel moves around the screen lookin for nuts and the shark goes after it with force of attraction  
//setting gravity
var G=1;
//mover function
var Mover = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(random(width),random(height));
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
//function which applys accerlation
Mover.prototype.applyForce= function(force){
  var f = PVector.div(force, this.mass);
  this.acceleration.add(f);
};
//function that updates position and acceleration
Mover.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};
//function that displays "shark"
Mover.prototype.displayShark = function() {
    noStroke();
    image(getImage("avatars/primosaur-ultimate"),this.position.x,this.position.y,75,75);
};
//function that displays "squirrel"
Mover.prototype.displaySquirrel = function() {
    noStroke();
    image(getImage("avatars/duskpin-sapling"),this.position.x,this.position.y,35,35);
};
//function calculating attraction force (squirrel)
Mover.prototype.calculateAttractionSquirrel = function(m){
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    var strength = (G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
};
//function calculating attraction force (shark)
Mover.prototype.calculateAttractionShark = function(m){
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    var strength = (G * this.mass * m.mass) / (-distance * distance);
    force.mult(strength);
    return force;
};
//conditons regarding boarders
Mover.prototype.checkEdges = function(){
    //check if position is greater than 400 (width)
    if (this.position.x > width-50) {
    this.position.x = width-50;
    this.acceleration.set(-0.5,0);
    } 
    //check if position is less than 0 (width)
    else if (this.position.x < 0) {
    this.position.x = 0;
    this.acceleration.set(0.5,0);
    }
    //check if position is greater than 400 (height)
    if (this.position.y > height-50) {
    this.position.y = height-50;
    this.acceleration.set(0,-0.5);
  } 
    //check if position is less than 0 (height)
    else if (this.position.y < 0) {
    this.position.y = 0;
    this.acceleration.set(0,0.5);
  }
};
//creating squirrel and shark by passing values to Mover function
var squirrel = new Mover(10,random(width),random(height));
var shark = new Mover(5,random(width),random(height));
draw = function() {
    background(245, 71, 71);
    var force = squirrel.calculateAttractionSquirrel(shark);
    squirrel.applyForce(force);
    squirrel.checkEdges();
    squirrel.update();
    squirrel.displaySquirrel();
    force = shark.calculateAttractionShark(squirrel);
    shark.applyForce(force);
    shark.checkEdges();
    shark.update();
    shark.displayShark();
};
