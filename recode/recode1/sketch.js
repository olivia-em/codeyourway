let tx1 = 0;
let ty1 = 1000;
let noiseStep = 0.1;
let speed = 0.5
let seed = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 1);
  rectMode(CENTER)

}

function draw() {
  if (frameCount % 100 === 0) {
    blendMode(BLEND);
    background(0, 0, 0);
    blendMode(DIFFERENCE)
    randomSeed(seed);
    let minSize = min(width, height);
    let sizing = minSize / 20;
    for (let j = 0; j <= height / sizing; j++) {
      let ypos = j * sizing;
      for (let i = 0; i <= width / sizing; i++) {
        let xpos = i * sizing;
        let h = map(noise(tx1 + i * noiseStep, ty1 + j * noiseStep), 0, 1, 150, 360)

        fill(h, 100, 100)
        stroke(0, 0, 0)
        strokeWeight(0.5)
        if (i * j % 2 === 0) {
          rect(xpos, ypos, sizing * random(0.5, 3), sizing * random(0.5, 3));
        } else {
          ellipse(xpos, ypos, sizing * random(0.5, 3), sizing * random(0.5, 3));
        }
      }
    }
    ty1 += speed;
  }
  // noLoop();
}

// function mousePressed() {
//   tx1 = random(1000);
//   ty1 = random(1000);
//   s1 = random(2000);
//   s2 = random(2500);
//   loop();
// }

