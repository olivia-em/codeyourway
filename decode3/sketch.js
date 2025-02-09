let startX;
let startY;
let endX;
let endY;
let pattern;
let minSize;
let sizing;
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let seed = random(1000);
  minSize = min(width, height);
  sizing = minSize - 50;
  pattern = createGraphics(windowWidth, windowHeight);
  pattern.background(0);
  pattern.blendMode(DIFFERENCE);
  randomSeed(seed)
  console.log(seed) // I like ~522
  for (let i = 0; i < 20; i++) {

    startX = random(0, width);
    startY = random(0, height);
    endX = random(0, width);
    endY = random(0, height);
    pattern.strokeWeight(random(1, 5));
    pattern.stroke(random(0, 255), random(0, 255), random(0, 255));
    pattern.noStroke()
    pattern.fill(random(0, 255), random(0, 255), random(0, 255));
    pattern.beginShape();
    pattern.curveVertex(startX, startY);
    pattern.curveVertex(random(0, width), random(0, height));
    pattern.curveVertex(random(0, width), random(0, height));
    pattern.curveVertex(random(0, width), random(0, height));
    pattern.curveVertex(random(0, width), random(0, height));
    pattern.curveVertex(endX, endY);
    pattern.endShape();
  }

  shape = createGraphics(windowWidth, windowHeight);
  shape.ellipse(width / 2, height / 2, sizing, sizing);
  pattern = pattern.get(); // convert to image
  pattern.mask(shape);

}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(DIFFERENCE);
  angleMode(DEGREES)
  imageMode(CENTER);
  translate(width/2,height/2)
  push()
  rotate(angle)
  image(pattern, 0, 0);
  pop()
  push()
  rotate(-angle)
  image(pattern, 0,0);
  pop()
  angle += 0.2
}


// test out different seeds, if there's one you particularly like then 
// you could potentially comment this out, and set the seed to 
// the number you like most for the same result everytime 
// function mousePressed() {
//   seed = random(1000);

// }

