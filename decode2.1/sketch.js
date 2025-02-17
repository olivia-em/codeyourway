/*
Inspired by works from Frieder Nake's Matrix Multiplication Series
*/

let cellSize;
let sign;
let seed = 2;
let angle;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  fill(1, 25, 145);
  stroke(255,0,0);
  strokeWeight(2);
  angle = random(0, -60);
}

function draw() {
  // blendMode(BLEND);
  background(0);
  blendMode(HARD_LIGHT);
  randomSeed(seed);
  cellSize = min(width / 5, height / 5);

  for (let x = cellSize / 2; x < width; x += cellSize) {
    for (let y = cellSize / 2; y < height; y += cellSize) {
        
      push();
      translate(x, y);

      let chance = random(1);
      if (chance < 0.5) {
        sign = 1;
      } else {
        sign = -1;
      }

      rotate(angle * sign);

      if ((angle * sign) < 0) {
        square(0, 0, cellSize);
        angle+=0.08;
      } else {
        square(0, 0, cellSize);
        (angle+=0.08)*-1
      }
      pop();
    }
  }
}

function mousePressed() {
  seed = random(50000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}