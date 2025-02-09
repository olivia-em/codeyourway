let startX;
let startY;
let endX;
let endY;

let num = 0;
let total = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // if (frameCount % 5 === 0) {
    blendMode(BLEND);
    background(0);
    blendMode(SCREEN);
    strokeWeight(1);
    getStartPoint();
    getEndPoint();
    for (num = 0; num < total; num++) {
      line(startX, startY, endX, endY);
      getEndPoint();
    }
  // }
  noLoop();
}

function getStartPoint() {
  stroke(random(0, 255), random(0, 255), random(0, 255));
  startX = width / 2;
  startY = height / 2;
}

function getEndPoint() {
  stroke(random(0, 255), random(0, 255), random(0, 255));
  endX = random(0, width);
  endY = random(0, height);
}

function mousePressed() {
  loop();
}