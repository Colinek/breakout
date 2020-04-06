var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

var ballRadius = 10;
// starting point for the x,y position of the ball
var x = canvas.width/2;
var y = canvas.height-30;
// add value to x and y per frame-draw to 'make' ball move
var dx = 2;
var dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x,y,ballRadius,0, Math.PI*2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // clear canvas/frame before drawing new frame
  ctx.clearRect(0,0, canvas.width, canvas.height);
  drawBall();
  // update x & y pos of ball
  x += dx;
  y += dy;

  // check for wall collision
  // top and bottom of screen:
  if(y + dy > canvas.height || y + dy < 0) {
    dy = -dy;
  }
  if(x + dx > canvas.width || x + dx < 0) {
    dx =-dx;
  }
}

setInterval(draw, 10);
