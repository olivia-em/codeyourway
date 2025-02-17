/*
Inspired by "De La Serie (Des) Ordres" by Vera Molnár, 1974
Plotter drawing in ink on Benson plotter paper 	 	
*/

let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {

  background(255,230,220);
  noFill();
  stroke(2);
  cellSize = min(width / 10, height / 10);

  for (let x = 0; x < width + cellSize; x += cellSize) {
    for (let y = 0; y < height + cellSize; y += cellSize) {
      
      let chance = random(1);

    if (chance < 0.5) {
      noFill();
      stroke(random(255), random(255), random(255));
        square(x+random(-5, 5), y+random(-5, 5), cellSize-10);
        stroke(random(255), random(255), random(255));
        square(x, y+random(-5, 5), cellSize/2);
        stroke(random(255), random(255), random(255));
        square(x+random(-5, 5), y, cellSize/4);
        stroke(random(255), random(255), random(255));
        square(x+random(-5, 5), y, cellSize/6);
      } else {
        noFill();
        stroke(random(255), random(255), random(255));
        square(x, y+random(-5, 5), cellSize/2);
        stroke(random(255), random(255), random(255));
        square(x, y+random(-5, 5), cellSize/3);
        stroke(random(255), random(255), random(255));
        fill(random(255), random(255), random(255),50);
        square(x+random(-5, 5), y, cellSize/4);
        stroke(random(255), random(255), random(255));
        square(x+random(-5, 5), y, cellSize/6);
      }
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
