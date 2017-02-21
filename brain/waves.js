$(function() {

if (typeof(Humble) == 'undefined') window.Humble = {};
Humble.Trig = {};
Humble.Trig.init = init;

var unit = 100,
    canvas, context, canvas2, context2,
    height, width, xAxis, yAxis,
    draw;
function init() {

    canvas = document.getElementById("sineCanvas");


    canvas.width = 3000;
    canvas.height = 400;

    context = canvas.getContext("2d");
    context.font = '18px sans-serif';
    context.strokeStyle = '#000';
    context.lineJoin = 'round';

    height = canvas.height;
    width = canvas.width;

    xAxis = Math.floor(height/2);
    yAxis = 0;

    context.save();
    draw();
}

draw = function () {
    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.stroke();

    context.save();
    context.strokeStyle = '#e34949';
    context.fillStyle = '#fff';
    context.lineWidth = 1;

    context.beginPath();
    drawSine(draw.t, 0, 0);
    drawSine(draw.t+0.001, 1, -0.4);
    context.stroke();




    context.strokeStyle = '#c5ff9c';
    context.beginPath();
    drawSine(draw.t-1, 0.5, -0.2);
    context.stroke();

    context.restore();

    draw.seconds = draw.seconds - .0013;
    draw.t = draw.seconds*Math.PI;
    setTimeout(draw, 35);
};
draw.seconds = 0;
draw.t = 0;

function drawSine(t, addx, addy) {

    // Set the initial x and y, starting at 0,0 and translating to the origin on
    // the canvas.
    var x = t + addx;
    var y = Math.sin(x)/2 + addy;
    context.moveTo(yAxis+addy, unit*y+xAxis+addx);

    // Loop to draw segments
    for (i = yAxis; i <= width; i += 10) {
        x = t+(-yAxis+i)/unit + addx;
        y = Math.sin(x)/2 + addy;
        context.lineTo(i+addx, unit*y+xAxis);
    }
}


Humble.Trig.init()

});