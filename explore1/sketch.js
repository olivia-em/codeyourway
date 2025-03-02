let x1, y1, x2, y2;
let angle = 0; // Angle for circular motion
let x2speed, y2speed;
let radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  stroke(255);
  angleMode(RADIANS);
  rectMode(CENTER);

  let dim = min(width, height);
  radius = dim / 2.5; // Keep x1,y1 on this circular path

  x2 = random(-width / 2, width / 2);
  y2 = random(-height / 2, height / 2);

  x2speed = random(2, 4);
  y2speed = random(-4, -2);
}

function draw() {
  blendMode(BLEND);
  background(0, 10);
  blendMode(EXCLUSION);
  translate(width / 2, height / 2);
  let dim = min(width, height);

  // Update x1, y1 to stay on the circular path
  x1 = radius * cos(angle);
  y1 = radius * sin(angle);
  circle(x1, y1, dim / 60);

  for (let i = 0; i < 6; i++) {
    let x = lerp(x1, x2, i / 5);
    let y = lerp(y1, y2, i / 5);
    let c = color(lerp(100, 255, i / 5), 50, 150);
    stroke(c);
    fill(c);
    circle(x, y, dim / 60);
  }

  // Update x2, y2 movement
  line(x1, y1, x2, y2);
  x2 += x2speed;
  y2 += y2speed;

  if (x2 < -width / 2 || x2 > width / 2) x2speed *= -1;
  if (y2 < -height / 2 || y2 > height / 2) y2speed *= -1;

  // Rotate x1, y1 around the circle
  angle += 0.05;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
