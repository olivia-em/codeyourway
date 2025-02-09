/*
Inspired by George Nees' Micro-Innovation Series (1966)
*/

let x;
let y;
let w;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();
  // strokeWeight(2);
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(DIFFERENCE);
  // stroke(random(0, 255), random(0, 255), random(0, 255));


  for (let i = 0; i < 400; i++) {

    if (random(10) < 5) { // most rectangles will be taller than wide
      w = random(5, 25); // smaller width
      h = random(50, 150); // taller height
    } else {
      w = random(50, 150); // larger width
      h = random(5, 25); // smaller height
    }
    x = random(w, width - w);
    y = random(h, height - h);
    stroke(random(0, 255), random(0, 255), random(0, 255));
    // stroke(random(0, 255));
    strokeWeight(random(1, 20)); // random stroke weight
    ellipse(x, y, w, h); 
    // stroke(random(0, 255));
    // stroke(random(0, 255), random(0, 255), random(0, 255));
    rect(x, y, w, h); // rect on top of ellipse
  }
  noLoop();
}

function mousePressed() {
  loop();
}