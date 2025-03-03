/*
Based on Alexander Miller’s video on Recreating Vintage Computer Art with Processing and inspired by John Whitney's work:
https://www.youtube.com/watch?v=LaarVR1AOvs&t=181s
*/

let t = 0;
let seed=25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(2);
  stroke(255);
}

function draw() {
  background(0, 5);
  
  translate(width / 2, height / 2);

  randomSeed(seed);
  let from = color(random(255), random(255), random(255));
  let to = color(random(255), random(255), random(255));

  let amplitude = min(width,height) / 3;

  let x1 = sin(t / -10) * amplitude;
  let y1 = cos(t / 10) * amplitude;

  let x2 = sin(t / 10) * amplitude;
  let y2 = cos(t / 10) * amplitude;

  for (let i = 0; i < 6; i++) {
    let x = lerp(x1, x2, i / 5);
    let y = lerp(y1, y2, i / 5);
    let c = lerpColor(from, to, i / 5);
    stroke(c);
    fill(c);
    circle(x, y, 10);
  }

  // line(x1, y1, x2, y2);
  t += 0.5;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function mouseClicked() {
  seed = random(1000);
  loop();
}