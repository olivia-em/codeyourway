let startX;
let startY;
let endX;
let endY;

let num = 0;
let total = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // if (frameCount % 5 === 0) {
    blendMode(BLEND);
    background(0);
    blendMode(SCREEN);
    strokeWeight(1);
    getStartPoint();
    getEndPoint();
    for (num = 0; num < total; num++) {
      line(startX, startY, endX, endY);
      getEndPoint();
    }
  // }
  noLoop();
}

function getStartPoint() {
  stroke(random(0, 255), random(0, 255), random(0, 255));
  startX = width / 2;
  startY = height / 2;
}

function getEndPoint() {
  stroke(random(0, 255), random(0, 255), random(0, 255));
  endX = random(0, width);
  endY = random(0, height);
}

function mousePressed() {
  loop();
}

/////////////////////////////////////////////////////////////

/*
Inspired by Frieder Nake's Zufälliger Polygonzug – 13/9/65 Nr. 7 (Random Polygon (1965) and A. Michael Noll's Gaussian-Quadratic (1963)
*/

// let startX;
// let startY;
// let endX;
// let endY;

// let num = 0;
// let total = 40;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(0);
//   stroke(255);
//   strokeWeight(2);
//   getStartPoint();
//   getEndPoint();
// }

// function draw() {
//   while (num < total) {  
//     line(startX, startY, endX, endY);
//     startX = endX;
//     startY = endY;
//     getEndPoint();
//     num++;
//   }
// }

// function getStartPoint() {
//   startX = random(10, width - 10);
//   startY = random(10, height - 10);
// }

// function getEndPoint() {
//   endX = random(10, width - 10);
//   endY = random(10, height - 10);
// }