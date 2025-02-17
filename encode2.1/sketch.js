/*
Inspired by "rectangular forms" by the Belfort Group
Published in Computer Graphics and Art, 1976, Vol. 1, No. 3 	
*/

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  // blendMode(BLEND);
  // background(0);
  // blendMode(DIFFERENCE);

  background(0);
  cellSize = min(width / 10, height / 10);

  for (let x = 0; x < width + cellSize; x += cellSize) {
    for (let y = 0; y < height + cellSize; y += cellSize) {
      
      let chance = random(1);

      if (chance < 0.1) {
        fill(6, 18, 253);
      } else if (chance < 0.4) {
        fill(0);
      } else if (chance < 0.6) {
        fill(50, 210, 250);
      } else if (chance < 0.8) {
        fill(255, 51, 0);
      } else {
        fill(0, 22, 187);
      }
      square(x, y, cellSize);

      if (chance < 0.1) {
        fill(6, 18, 253);
      } else if (chance < 0.4) {
        fill(0);
      } else if (chance < 0.6) {
        fill(50, 210, 250);
      } else if (chance < 0.8) {
        fill(255, 51, 0);
      } else {
        fill(0, 22, 187);
      }
      circle(x, y, cellSize);
    }
  }
  noLoop();
}

function mousePressed() {
  loop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
