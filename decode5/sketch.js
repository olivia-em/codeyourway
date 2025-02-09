/*
Inspired by Colette and Charles J. Bangert's Complex Intersecting Line (1976) and Roman Verostko's Sketch (1987)
*/

let startX;
let startY;
let endX;
let endY;

let num = 0;
let total = 2000;

let tx = 0;
let ty = 2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(20);
  getStartPoint();
  getEndPoint();
}

function draw() {
  blendMode(BLEND)
  background(0);
  blendMode(DIFFERENCE);
  for (let num = 0; num<total; num++) {
    let colorNoise1 = map(noise(tx), 0, 1, 0, 255)
    let colorNoise2 = map(noise(ty), 0, 1, 0, 255)
    stroke(colorNoise1, 0 , colorNoise2);
    line(startX, startY, endX, endY);
    startX = endX;
    startY = endY;
    getEndPoint();
  }
  noLoop();
}

function getStartPoint() {
  startX = map(noise(tx), 0, 1, 0, width);
  startY = map(noise(ty), 0, 1, 0, height);
}

function getEndPoint() {
  endX = map(noise(tx), 0, 1, 0, width);
  endY = map(noise(ty), 0, 1, 0, height);

  tx += 0.01;
  ty += 0.01;
}

function mousePressed() {
  loop();
}