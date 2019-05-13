background(0, 204, 255);
var drawRange = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 16, height/2);
        stroke(74, 48, 48);
        rect(t*99, height-y, 1, y);
        stroke(143, 107, 107);
        rect(t*120, height-y, 1, y);
        stroke(181, 165, 165);
        rect(t*140, height-y, 1, y);
        if(random(67)<60){
        fill(11, 61, 6);
        noStroke();
        ellipse(random(0,400),random(height-y/1.0,400),5,5+y/-3);
        }
    }
};
var xoff = 0.0;
for (var x = 50; x < 175; x++) {
    var yoff = 0.0;
    for (var y = 50; y < 100; y++) {
        var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
        stroke(bright, bright, bright);
        point(x, y);
        yoff += 0.02;
    }
    xoff += 0.02;
}
    var xoff = 0.0;
for (var x = 200; x < 325; x++) {
    var yoff = 0.0;
    for (var y = 150; y < 200; y++) {
        var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
        stroke(bright, bright, bright);
        point(x, y);
        yoff += 0.01;
    }
    xoff += 0.01;
}
    for(var b=0; b<5 ;b++){
        var num;
        var num1;
        num=random(5,395);
        num1=random(5,269);
        image(getImage("avatars/aqualine-ultimate"),num,num1,20,20);
    }

drawRange();
