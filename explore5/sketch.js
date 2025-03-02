/*
Based on the lissajous curve example from Code as a Creative Medium
https://github.com/CodeAsCreativeMedium/exercises/blob/main/09_curves/06_lissajous/lissajous_js/lissajous_js.js

Lissajous curve:
https://en.wikipedia.org/wiki/Lissajous_curve
*/

let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  strokeWeight(3);
  background(0);
}

function draw() {
  background(0,20);

  let minDimension = min(width, height);
  let radius = (minDimension * 3) / 8;

  for (let i = 0; i < 100; i++) {
    let x1 = cos((-3 * t + i) / 10) * radius + width / 2;
    let y1 = sin((2 * t + i) / 10) * radius + height / 2;

    let x2 = cos((3 * t + i) / 10) * radius + width / 2;
    let y2 = sin((-2 * t + i) / 10) * radius + height / 2;
    
    stroke(map(i,0,100,0,255),map(i,0,50,255,0),map(i,0,100,255,0))

    line(x1, y1, x2, y2);
  }

  t += 0.05;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
