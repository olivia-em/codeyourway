/*
Inspired by Zdeněk Sýkora's Red-Green Structure 1, 1968, and based onb2renger's offscreen graphics 6:
https://b2renger.github.io/p5js_patterns/pg_6/
*/

let cellSize;
let seed = 100;
let pattern;

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  makeTileDesign();
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(DIFFERENCE);
  randomSeed(seed);
  
  for (let x = cellSize/2; x <= width; x += cellSize) {
    for (let y = cellSize/2; y <= height; y += cellSize) {
      push();
      translate(x, y);
      let angle = (TWO_PI * round(random(1, 5))) / 4;
      rotate(angle);
      // draw the off-screen pixel graphics onto the canvas
      // just like an image file
      image(pattern, 0, 0);
      pop();
    }
  }
}

function makeTileDesign() {
  cellSize = min(width / 5, height / 5);

  pattern = createGraphics(cellSize, cellSize);
  pattern.background(0);
  pattern.blendMode(DIFFERENCE);

  for (let i = 0; i < 50; i++) {

    startX = random(-cellSize, cellSize*2);
    startY = random(-cellSize, cellSize*2);
    endX = random(-cellSize, cellSize*2);
    endY = random(-cellSize, cellSize*2);
    pattern.strokeWeight(random(1, 5));
    pattern.stroke(random(0, 255), random(0, 255), random(0, 255));
    pattern.noStroke()
    pattern.fill(random(0, 255), random(0, 255), random(0, 255));
    pattern.beginShape();
    pattern.curveVertex(startX, startY);
    pattern.curveVertex(random(-cellSize, cellSize*2), random(-cellSize, cellSize*2));
    pattern.curveVertex(random(-cellSize, cellSize*2), random(-cellSize, cellSize*2));
    pattern.curveVertex(random(-cellSize, cellSize*2), random(-cellSize, cellSize*2));
    pattern.curveVertex(random(-cellSize, cellSize*2), random(-cellSize, cellSize*2));
    pattern.curveVertex(endX, endY);
    pattern.endShape();
  }

  shape = createGraphics(cellSize, cellSize);
  shape.circle(0, pattern.height / 2, pattern.width);
  pattern = pattern.get(); // convert to image
  pattern.mask(shape);
}

function mousePressed() {
  seed = random(50000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  makeTileDesign();
}