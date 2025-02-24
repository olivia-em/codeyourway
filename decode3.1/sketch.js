/*
Inspired by Georg Nees' Schotter

Based on a translation from Code as a Creative Medium:
https://github.com/CodeAsCreativeMedium/exercises/blob/main/02_iteration/15_recoding_schotter/schotter_js/schotter_js.js
*/

let angle = 0;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noFill();
  strokeWeight(2);
  frameRate(15);
  // angleMode(DEGREES);
}

function draw() {
  blendMode(BLEND);
  background(0,0,0);
  // blendMode(DIFFERENCE);
  cellSize = min(width / 25, height / 25);
  
  for (let y = 0; y < height; y += cellSize -10) {
    for (let x = 0; x < width; x += cellSize) {
      push();
      translate(x + cellSize/2, y + cellSize/2);
     
      rotateAmount = sin(angle);
      rotate(rotateAmount);
      // fill(0,0 ,map(x,0,width,100,0));
      // stroke(0,0 ,map(x,0,width,0,100));

      stroke(map(y,0,height,360,0),100 ,map(x,0,width,0,100));
      fill(map(y,0,height,0,360),100,map(x,0,width,100,0));

      square(-cellSize / 2 , -cellSize / 2, cellSize+ 10* sin(angle));
      pop();
      
    }
    angle += 0.5;
    // angle += 10;
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  angle = 0;
}