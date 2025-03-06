

let particle;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  particle = new particles();
 noStroke();
 
}

function draw() {
  blendMode(BLEND);
  background(0);
  // blendMode(EXCLUSION);
  
  translate(width/2,height/2,-height);

  // Enables mouse interaction
  particle.update();
 

}

/// Particle System using Perlin Noise Spheres
function particles() {
  this.modx = [];
  this.mody = [];
  this.modz = [];
  this.index = 0;
  this.zoff = [];
  this.xoff = 0;
  this.yoff = 0;

  let incremx = floor(width / 30);
  let incremy = floor(height / 30);

  for (let col = -2*width; col < 2*width; col += incremx) {
    for (let row = -height; row < height; row += incremy) {
      this.modx.push(0);
      this.mody.push(0);
      this.modz.push(0);
      this.zoff.push(0.01);
    }
  }

  this.update = function () {
    this.index = -1;
    this.xoff = 0;
    translate(0,-height/2,-2*height);
    rotateX(PI/2);
   
   
    for (let col = -2*width; col < 2*width; col += incremx) {
      this.xoff += 0.05;
      this.yoff = 0;
      
      for (let row = -height; row < height; row += incremy) {
        this.yoff += 0.05;
        this.index += 1;
        this.zoff[this.index] += 0.025;

        let zn = map(noise(this.xoff, this.yoff, this.zoff[this.index]), 0, 1, -height/2, height/2);

        push();
        translate(col - width/2, row - height/4, 0);
       
        fill(map(col,-width,width,0,255),map(row,-height,height,0,255),255);
     
        /// Animated Perlin Noise Circle
        let noiseFactor = noise(this.xoff, this.yoff, frameCount * 0.001);
        drawCircle(noiseFactor, noiseFactor, zn, noiseFactor);

        pop();
      }
      
    }
  };
}

/// Generates a circle using Perlin noise for motion & size
function drawCircle(newX, newY, newZ, newNoise) {
  push();
  translate(newX * newNoise * 4, newY * newNoise * 4, newZ * newNoise * 4);
  sphere(newNoise * 5); // Larger sphere for better visibility
  pop();
}




///////////////////////////////////////

/*
Based on Matt Pearson's "Listing i.1 A generative system in 24 lines of code" in the Introduction to Generative Art, 2011, p. xxiii

License:
No part of this publication may be reproduced, stored in a retrieval system, or transmitted, in any form or by means electronic, mechanical, photocopying, or otherwise, without prior written permission of the publisher, with the exception of the Introduction, Chapter 1, Chapter 6, and the source code throughout, which are available under a Creative Commons (Attribution-NonCommercial 3.0) license.
See creativecommons.org/licenses/by-nc/3.0/. Note that Creative Commons distribution of the images in the Introduction and in Chapter 1 is limited to those by Matt Pearson only.
*/

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(255);
//   noFill();

//   let xstart = random(10);
//   let ty = random(10);

//   translate(width / 2, height / 2);

//   for (let y = -height / 8; y <= height / 8; y += 3) {
//     ty += 0.02;
//     let tx = xstart;
//     for (let x = -width / 8; x <= width / 8; x += 3) {
//       tx += 0.02;
//       let noiseFactor = noise(tx, ty);
//       drawCircle(x, y, noiseFactor);
//     }
//   }
// }
  
// function draw() {}
  
// function drawCircle(newX, newY, newNoise) {
//   push();
//   translate(newX * newNoise * 4, newY * newNoise * 4);
//   circle(0, 0, newNoise * 10);
//   pop();
// }
  
