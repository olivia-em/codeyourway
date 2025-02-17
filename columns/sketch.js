let total = 50;
let columnWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  columnWidth = width / total;
  noFill();
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(DIFFERENCE);
  frameRate(5);

  let colHeight = height/2;

  for (let counter = 0; counter < total; counter++) {
    let x = counter * columnWidth;
    let y = height / 4 + random(-20, 20);; // Adding randomness to y position

    // Set random stroke weight between 1 and 7
    strokeWeight(random(2, 8));

    // Set random stroke color
    stroke(random(255), random(255), random(255));

    // Set random fill color
    fill(random(255), random(255), random(255));

    rect(x, y, columnWidth, colHeight); // Adjusting width of rectangles
  }

  // noLoop(); // Uncommented to stop the draw loop
}
