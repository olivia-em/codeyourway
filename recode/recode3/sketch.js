/*
Inspired by "De La Serie (Des) Ordres" by Vera Molnár, 1974
Plotter drawing in ink on Benson plotter paper 	 	
*/

let cellSize;
let positions = [];
let cellImages = [];
let swapPairs = [];
let swapFrameCount = 0;
let swapDuration = 60; // Duration of the swap animation in frames
let seed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  initializePositions();
  createCellImages();
  createSwapPairs();
}

function draw() {
  background(255, 230, 220);
  noFill();
  stroke(2);
  cellSize = min(width / 10, height / 10);

  if (swapFrameCount < swapDuration) {
    swapFrameCount++;
  } else {
    swapFrameCount = 0;
    createSwapPairs();
  }

  // Clear the original positions of the cells being swapped
  for (let i = 0; i < swapPairs.length; i++) {
    let pair = swapPairs[i];
    let pos1 = positions[pair.index1];
    let pos2 = positions[pair.index2];

    if (pos1 && pos2) {
      fill(255, 230, 220);
      noStroke();
      rect(pos1.x + cellSize / 2, pos1.y + cellSize / 2, cellSize, cellSize);
      rect(pos2.x + cellSize / 2, pos2.y + cellSize / 2, cellSize, cellSize);
    }
  }

  // Draw the static cells
  for (let i = 0; i < positions.length; i++) {
    let x = positions[i].x;
    let y = positions[i].y;
    if (x !== undefined && y !== undefined) {
      image(cellImages[i], x, y, cellSize, cellSize);
    }
  }

  // Draw the moving cells
  animateSwaps();
}

function initializePositions() {
  positions = [];
  cellSize = min(width / 10, height / 10);
  for (let x = 0; x < width; x += cellSize) {
    for (let y = 0; y < height; y += cellSize) {
      positions.push({ x: x, y: y });
    }
  }
}

function createCellImages() {
  randomSeed(seed);
  cellImages = [];
  for (let i = 0; i < positions.length; i++) {
    let pg = createGraphics(cellSize, cellSize);
    pg.rectMode(CENTER);
    pg.noFill();
    pg.stroke(2);

    let chance = random(1);
    if (chance < 0.5) {
      pg.noFill();
      pg.stroke(random(255), random(255), random(255));
      pg.square(cellSize / 2 + random(-5, 5), cellSize / 2 + random(-5, 5), cellSize - 10);
      pg.stroke(random(255), random(255), random(255));
      pg.square(cellSize / 2, cellSize / 2 + random(-5, 5), cellSize / 2);
      pg.stroke(random(255), random(255), random(255));
      pg.square(cellSize / 2 + random(-5, 5), cellSize / 2, cellSize / 4);
      pg.stroke(random(255), random(255), random(255));
      pg.square(cellSize / 2 + random(-5, 5), cellSize / 2, cellSize / 6);
    } else {
      pg.noFill();
      pg.stroke(random(255), random(255), random(255));
      pg.square(cellSize / 2, cellSize / 2 + random(-5, 5), cellSize / 2);
      pg.stroke(random(255), random(255), random(255));
      pg.square(cellSize / 2, cellSize / 2 + random(-5, 5), cellSize / 3);
      pg.stroke(random(255), random(255), random(255));
      pg.fill(random(255), random(255), random(255), 50);
      pg.square(cellSize / 2 + random(-5, 5), cellSize / 2, cellSize / 4);
      pg.stroke(random(255), random(255), random(255));
      pg.square(cellSize / 2 + random(-5, 5), cellSize / 2, cellSize / 6);
    }

    cellImages.push(pg);
  }
}

function createSwapPairs() {
  swapPairs = [];
  let numPairs = 5; // Number of pairs to swap
  for (let i = 0; i < numPairs; i++) {
    let index1 = floor(random(positions.length));
    let index2 = getAdjacentIndex(index1);
    if (index2 !== undefined) {
      swapPairs.push({ index1: index1, index2: index2 });
    }
  }
}

function getAdjacentIndex(index) {
  let adjacentIndices = [];
  let cols = floor(width / cellSize);
  let rows = floor(height / cellSize);

  // Calculate row and column of the current index
  let row = floor(index / cols);
  let col = index % cols;

  // Add adjacent indices (left, right, top, bottom)
  if (col > 0) adjacentIndices.push(index - 1); // Left
  if (col < cols - 1) adjacentIndices.push(index + 1); // Right
  if (row > 0) adjacentIndices.push(index - cols); // Top
  if (row < rows - 1) adjacentIndices.push(index + cols); // Bottom

  // Return a random adjacent index
  return adjacentIndices.length > 0 ? random(adjacentIndices) : undefined;
}

function animateSwaps() {
  for (let i = 0; i < swapPairs.length; i++) {
    let pair = swapPairs[i];
    let pos1 = positions[pair.index1];
    let pos2 = positions[pair.index2];

    if (pos1 && pos2) {
      let t = swapFrameCount / swapDuration;
      let x1 = lerp(pos1.x, pos2.x, t);
      let y1 = lerp(pos1.y, pos2.y, t);
      let x2 = lerp(pos2.x, pos1.x, t);
      let y2 = lerp(pos2.y, pos1.y, t);

      // Clear the original positions
      fill(255, 230, 220);
      noStroke();
      rect(pos1.x + cellSize / 2, pos1.y + cellSize / 2, cellSize, cellSize);
      rect(pos2.x + cellSize / 2, pos2.y + cellSize / 2, cellSize, cellSize);

      image(cellImages[pair.index1], x1, y1, cellSize, cellSize);
      image(cellImages[pair.index2], x2, y2, cellSize, cellSize);
    }
  }
}

function mouseClicked() {
  seed = millis(); // Update the seed based on the current time
  createCellImages();
  createSwapPairs();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  initializePositions();
  createCellImages();
  createSwapPairs();
}