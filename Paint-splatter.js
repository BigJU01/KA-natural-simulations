background(0, 0, 0);
var generator = new Random(1);
var draw = function() {
    var numX = generator.nextGaussian();
    var numY = generator.nextGaussian();
    var num1 = generator.nextGaussian();
    var num2 = generator.nextGaussian();
    var num3 = generator.nextGaussian();
    var standardDeviation = 100;
    var mean =200;
    var x = standardDeviation * numX + mean;
    var y = standardDeviation * numY + mean;
    var y1 = standardDeviation * num1 + mean;
    var y2 = standardDeviation * num2 + mean;
    var y3 = standardDeviation * num3 + mean;
    noStroke();
    fill(y1,y2,y3);
    ellipse(x, y, 16, 16);
};
