/*
Inspired and based on @b2renger's Noise et coordonnees polaires:
https://github.com/b2renger/p5js-designing-interactive-patterns?_x_tr_sl=auto&_x_tr_tl=en&_x_tr_hl=en&_x_tr_pto=wapp#noise-et-coordonnees-polaires

Coding Train video 3.4 Polar Coordinates (don't worry about vectors):
https://thecodingtrain.com/tracks/the-nature-of-code-2/noc/3-angles/4-polar-coordinates
*/

let tx = 0;
let ty = 1000;
let tz = 2000;
let rot = 0;
numLines = 200;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(0);
  strokeWeight(0.2);
  blendMode(SCREEN);
}

function draw() {
  background(0);
  randomSeed(25);
  //rotateX(rot);
  //rotateY(rot);
  orbitControl();
  let angle = noise(tx / 2) * TWO_PI * 4;
  // translate(width / 2, height / 2);
  
  let minDimension = min(width, height)
  for (let i = 0; i<numLines; i++){
  let radius = noise(tx, ty, tz) * minDimension/2;
  let x1 = cos(angle*i/10) * noise(tx, ty, tz) * minDimension/2;
  let y1 = sin(angle*i/10) * noise(tx, ty, tz) * minDimension/2;
  let z1 = sin(angle*i/100) * noise(tx, ty, tz) * minDimension/2;


  stroke(random(255), random(255), random(255));
  line(x1, y1, z1, 0,0,0);
  }
  tx += 0.0005;
  ty += 0.0005;
  tz += 0.0005;
  //rect(0,100,100,100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}
