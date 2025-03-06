/*
Based on Alexander Miller’s video on Recreating Vintage Computer Art with Processing and inspired by John Whitney's work:
https://www.youtube.com/watch?v=LaarVR1AOvs&t=181s
*/

let t = 0;
let numLines = 126;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  strokeWeight(2);
}

function draw() {
  background(0,50);
  translate(width / 2, height / 2);

  let amplitude = min(width,height) / 5;

  for (let i = 0; i < numLines; i++) {
    let x1 = sin((t + i) / 10) * amplitude;
    let y1 = cos((-t + i) / 10) * amplitude + sin(((t + 1) / 5) * 50);
    
    let x2 = sin((t + i) / 20) * (amplitude * 2);
    let y2 = cos((-t + i) / 10) * (amplitude * 2);

    let cx1 = sin(i/numLines) * amplitude; // Control Point 1
    let cy1 = cos(i/numLines) * amplitude;

    let cx2 = sin(i/numLines) * amplitude; // Control Point 2
    let cy2 = cos(i/numLines) * amplitude;

    let c = lerpColor(color(0,200,255,200), color(255,55,0,200), i*2 / numLines);
    stroke(c);
    fill(c)
    curve(cx1, cy1, x1, y1, x2, y2, cx2, cy2);
  }

  t += 0.2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}