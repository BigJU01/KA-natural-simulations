//setting to radians
angleMode = "radians";
//making star
var Star = function(){
    this.color = color(240, 240, 12, 150);
    this.size=floor(random(5,10));
    this.position = new PVector(random(0,400),random(0, 400));
    this.velocity = new PVector(random(3,-3),random(3,-3)); 
    this.acceleration = new PVector(random(-3, 3) ,random (-3, 3));
    this.timeLivin = 300;
    this.LifeCounter = 0;
};
//star life 
Star.prototype.update = function(){
    this.timeLivin -= 5;
    this.size += this.LifeCounter/40;
    
    if (this.LifeCounter < 10){
        this.LifeCounter++;
    }
    
    if (this.LifeCounter >= 10){
        this.LifeCounter = 0;
    }
    
    if (this.timeLivin < 100){
        this.color = color(194, 180, 194, 120);
    }
};
//Displaying star
Star.prototype.display = function() {
    noStroke();
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.size, this.size);
};
//Moving star
Star.prototype.move = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.size/3);
    this.position.add(this.velocity);
};
//Checking if star dies
Star.prototype.isDead = function() {
    if (this.timeLivin  < 0) {
        return true;
    } else {
        return false;
    }
};
//Checking edges 
Star.prototype.checkEdges = function() {
     if (this.position.x < 0) {
        this.acceleration = new PVector(3 , this.acceleration.y);
    }else if (this.position.x > 400) {
        this.acceleration = new PVector(-3 ,this.acceleration.y);
    }
    else if (this.position.y > 400) {
        this.acceleration = new PVector(this.acceleration.x , -3);
    }
    else if (this.position.y < 0) {
        this.acceleration = new PVector(this.acceleration.x , 3);
    }
};
//Calling functions
Star.prototype.go = function() {
    this.move();
    this.update();
    this.display();
    this.checkEdges();
};
//Particlesystem function for array of stars
var ParticleSystem = function(position) {
    this.stars = [];
};
//function for particles
ParticleSystem.prototype.addParticle = function() {
    this.stars.push(new Star());
};
//Particlesystem function
ParticleSystem.prototype.run = function() {
    for (var i = this.stars.length-1; i >= 0; i--) {
        var p = this.stars[i];
        p.go();
        if (p.isDead()) {
            this.stars.splice(i, 1);
        }
    }
};
//Setting star to particle system
var star = new ParticleSystem();
//Draw function
var draw = function() {
    background(0, 0, 0);
    star.run();
    if (frameCount % 5 === 0){
        star.addParticle();
    }
};
