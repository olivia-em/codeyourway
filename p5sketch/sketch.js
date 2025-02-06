let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(0, 0, 255);
  circle(x, height / 2, 50)
  if (x > width) {
    x = 0;
  }
  else {
    x++
  }
}