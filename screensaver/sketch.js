let numPoints = 200; // Number of points in the shape
let numLines = 8; // Number of lines connecting the points
let t = 0;
let radius;
let rot = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //colorMode(HSB, 360, 100, 100);
  noFill();
  strokeWeight(1.5);
  stroke(255);
  radius = min(width, height) / 5;
  background(0);
  // noLoop();
}

function draw() {
  background(0);
  orbitControl(); 
  randomSeed(0);
  //rotateZ(rot);
  
  for (let j = 0; j < numLines; j++) {
    
    let phase = j * TWO_PI / numLines; 
   
    beginShape();

  for (let i = 0; i < numPoints; i++) {
  

    let angle = map(i, 0, numPoints, 0, TWO_PI); // Distribute points evenly in a circle

    let r = radius + sin(angle * 3 + t + phase) * 50 + cos(angle * 5 + t) * 30;

    let c = lerpColor(color(random(255),0,random(255)), color(0,random(255),random(255)), j*2 /numLines);
    stroke(c);
    
    let x = r * cos(angle);
    let y = r * sin(angle);
    let z = sin(angle * 2 + t) * 160;
    //let z = 0;

    vertex(x, y, z);
  }
  endShape(CLOSE);
  //rot+=0.001;
}
  
  t += 0.02; 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
  radius = min(width, height) / 5;
}
