/*
Inspired by Vera Molnár's Dispersion and simliar works
*/
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0,0,255,100);
  angleMode(DEGREES);
  stroke(0);
  strokeWeight(2);
}

function draw() {
  frameRate(20);
  blendMode(BLEND);
  background(0,0,0);
  // blendMode(DIFFERENCE);

  let columnWidth = min(width / 20, height / 20);
  let rowHeight = height / 4;
  for (let x = 0; x < width; x+= columnWidth/2) {
    for (let y = -100; y < height; y+=rowHeight) {
      y += random(-15, 15)*sin(angle);
      rect(x, y, columnWidth * 0.7, rowHeight);  
    }
  }
  angle+=2
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}