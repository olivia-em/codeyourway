let minSize, amount, x, y;

function setup() { // only run once, no animation
  createCanvas(windowWidth, windowHeight); // window size dependent
  background(0); // black background
  // rectMode(CENTER); // center of canvas
  // noFill();

  minSize = min(width, height);
  amount = minSize / 25;

  // console.log(amount)
  blendMode(BLEND);
  background(0);
  blendMode(DIFFERENCE);
  strokeWeight(10);

  change();
}

function change() {
  for (let i = 1; i < amount; i++) {
    // random horizontal and vertical distance 
    // from center of canvas within limits
    // range of randomness now increases with i
    let x = random(width / 2 - amount * i, width / 2 + amount * i);
    let y = random(height / 2 - amount * i, height / 2 + amount * i);
    // random colors for fill and stroke
    stroke(random(0, 255), random(0, 255), random(0, 255));
    fill(random(0, 255), random(0, 255), random(0, 255))
    circle(x, y, amount/3 * i); // width increase for each i
  }
}

function mouseClicked() {
  change()
}

