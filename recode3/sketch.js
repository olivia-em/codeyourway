// https://editor.p5js.org/p5/sketches/Color:_Radial_Gradient

let dim;
let seed = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  background(0);
  noStroke();
  ellipseMode(RADIUS);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  dim = min(width/2, height/2);
  background(0);
  for (let x = 0; x <= width + dim; x += dim) {
    drawGradient(x, height / 2);
  }
  noLoop();
}

function drawGradient(x, y) {
  randomSeed(seed);
  let from = color(random(255), random(255), random(255));
  let to = color(random(255), random(255), random(255));
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    if (x % 1 === 0){
      let grad = lerpColor(to, from, map(r,0,radius,0,1));
      fill(grad);
    } else {
      let grad = lerpColor(from, to, map(r,0,radius,0,1));
      fill(grad);
    }
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}

function mouseClicked() {
  seed = random(100);
  loop();
}