/*
Inspired by William Kolomyjec’s Random Squares

Based on a translation from Nick Santaniello:
http://recodeproject.com/translation/nick-santaniello-direct-untitled-1-various
*/

let total;
let sqSize;
let sizeDifference;
let seed = 1;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  strokeWeight(2);
  fill(0,0,255);

  let minDimension = min(width, height);
  total = minDimension / 80;

  sqSize = width / total;
  sizeDifference = sqSize / 6;
}

function draw() {
  blendMode(BLEND);
  background(0);
  blendMode(EXCLUSION);
  orbitControl(); // Enables mouse interaction (rotate and zoom)
  randomSeed(seed);
  // rotateX(-QUARTER_PI / 3);
  // rotateY(QUARTER_PI / 3);

  for (let r = 0; r < total; r+=1) {
    for (let c = 0; c < total; c+=1) {
      let x = r * sqSize - width / 2;
      let y = c * sqSize - height / 2;
      

      push();
      translate(x, y, 0);
      square(0, 0, sqSize);
      pop();

      let zOffset;
      if (r % 2 === 0) {
        zOffset = 50;
      } else {
        zOffset = -50;
      }

      for (let i = 1; i < 6; i++) {
        let newX = x + i;
        let newY = y + i;
        let newZ = zOffset * i;
        let newSize = sqSize - i/2* sizeDifference;

        push();
        translate(newX, newY, newZ);
        rect(0, 0, newSize);
        pop();
      }
    }
  }
}


//////////////////////////////

/*
Inspired by William Kolomyjec’s Random Squares

Based on a translation from Nick Santaniello:
http://recodeproject.com/translation/nick-santaniello-direct-untitled-1-various
*/

// let total;
// let sqSize;
// let sizeDifference;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(255);
//   rectMode(CENTER);
//   strokeWeight(2);
//   noFill();

//   let minDimension = min(width, height);
//   total = minDimension / 80;

//   sqSize = width / total;
//   sizeDifference = sqSize / 6;
// }

// function draw() {
//   translate(sqSize / 2, sqSize / 2);

//   for (let r = 0; r < total; r++) {
//     for (let c = 0; c < total; c++) {
//       let x = r * sqSize;
//       let y = c * sqSize;
//       square(x, y, sqSize);

//       let offsetX = random(-5, 5);
//       let offsetY = random(-5, 5);

//       for (let i = 1; i < 6; i++) {
//         let newX = c * sqSize + i * offsetX;
//         let newY = r * sqSize + i * offsetY;
//         let newSize = sqSize - i * sizeDifference;
//         rect(newX, newY, newSize);
//       }
//     }
//   }
//   noLoop();
// }
