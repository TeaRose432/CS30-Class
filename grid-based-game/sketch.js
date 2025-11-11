// Grid based assignment
// Calli Sperrer
// due Nov 12 2025
// Extra for Experts:
//

const CELL_SIZE = 100;
const GRID_DIMENSIONS = 3;
//the indentation is to make it clear what is apart of the 2d array
let craftingGrid = [[0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]];
let cols = 3;
let rows = 3;
let stickImg1;
let diamondImg1;
let stickImg2;
let diamondImg2;
let stickImg3;
let diamondImg3;

let cords = {
  stickX1: 500,
  stickY1: 5,
  diamondX1: 600,
  diamondY1: 5,
  stickX2: 500,
  stickY2: 65,
  diamondX2: 600,
  diamondY2: 85,
  stickX3: 500,
  stickY3: 125,
  diamondX3: 600,
  diamondY3: 165,
};

function preload() {
  stickImg1 = loadImage("images-folder/stick.png");
  diamondImg1 = loadImage("images-folder/diamond.png")
  stickImg2 = loadImage("images-folder/stick.png");
  diamondImg2 = loadImage("images-folder/diamond.png")
  stickImg3 = loadImage("images-folder/stick.png");
  diamondImg3 = loadImage("images-folder/diamond.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
}

function draw() {
  background("blueviolet");
  displayGrid();
  displayItems();
  fillGrid();
}

function displayGrid() {
  for (let y = 0; y < GRID_DIMENSIONS; y++) {
    for (let x = 0; x < GRID_DIMENSIONS; x++) {
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function displayItems() {
  image(stickImg1, cords.stickX1, cords.stickY1, stickImg1.width*0.5, stickImg1.height*0.5);
  image(diamondImg1, cords.diamondX1, cords.diamondY1, diamondImg1.width*0.2, diamondImg1.height*0.2);
  image(stickImg2, cords.stickX2, cords.stickY2, stickImg2.width*0.5, stickImg2.height*0.5);
  image(diamondImg2, cords.diamondX2, cords.diamondY2, diamondImg2.width*0.2, diamondImg2.height*0.2);
  image(stickImg3, cords.stickX3, cords.stickY3, stickImg3.width*0.5, stickImg3.height*0.5);
  image(diamondImg3, cords.diamondX3, cords.diamondY3, diamondImg3.width*0.2, diamondImg3.height*0.2);
}

function mouseDragged() {
  if (mouseX >= cords.stickX1 && mouseX <= cords.stickX1 + stickImg1.width*0.5 && mouseY >= cords.stickY1 && mouseY <= cords.stickY1 + stickImg1.height*0.5) {
    cords.stickX1 = mouseX - stickImg1.width/4;
    cords.stickY1 = mouseY - stickImg1.height/4;
    image(stickImg1, cords.stickX1, cords.stickY1, stickImg1.width*0.5, stickImg1.height*0.5);
  }
}

function fillGrid() {
  if ()
}