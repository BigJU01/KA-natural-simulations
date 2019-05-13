//displaying motion of confetti raining down
//Setting to radians
angleMode = "radians";
var confetti = function() {
    this.color = color(random(0,255),random(0,255),random(0,255));
    this.size = floor(random(1,10));
    this.position = new PVector(random(0,400),random(0, 400));
    this.velocity = new PVector(random(4,-2),random(5,-5)); 
    this.acceleration = new PVector(2 ,0.0010);
    this.angle = random(0,3);
    this.aVelocity = 0;
    this.aAcceleration = this.size*0.001;
};
//drawing and spinning/rotating confetti
confetti.prototype.display = function() {
    noStroke();
    fill(this.color);
    pushMatrix();
    translate(this.position.x, this.position.y);
    rotate(this.angle);
    ellipse(this.position.x, this.position.y, this.size+5, this.size+5);
    popMatrix();
};
//moving confetti
confetti.prototype.move = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.size/2);
    this.position.add(this.velocity);
};
//checking edges
confetti.prototype.checkEdges = function() {
     if (this.position.x < 0) {
        this.position.x= 5;
    }else if (this.position.x > 400) {
        this.position.x= 5;
    }
    else if (this.position.y > 400) {
        this.position.y= 5;
    }
    else if (this.position.y < 0) {
        this.position.y= 10;
    }

};
//calling confetti functions
confetti.prototype.go = function() {
    this.move();
    this.display();
    this.checkEdges();
    this.angle += this.aVelocity;
    this.aVelocity += this.aAcceleration;
    if (this.aVelocity > 0.05){
        this.aVelocity = 0;
    }
};
//making confetti
var Confetti = [];
for (var i = 0; i < 500; i++){
    Confetti[i] = new confetti();
}
//drawing confetti
var draw = function() {
    background(0, 34, 255);
    for (var i = 0; i < Confetti.length; i++) {
        Confetti[i].go();
    }
};
