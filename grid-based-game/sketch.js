// Grid based assignment
// Calli Sperrer
// due Nov 12 2025

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
let diamondImg3;
let diamondPicImg;
let diamondAxeImg;
let diamondSwordImg
let diamondShovelImg;
let diamondHoeImg;
let itemMade;

let cords = {
  stickX1: 500,
  stickY1: 5,
  diamondX1: 500,
  diamondY1: 150,
  stickX2: 500,
  stickY2: 65,
  diamondX2: 500,
  diamondY2: 220,
  stickX3: 500,
  stickY3: 125,
  diamondX3: 500,
  diamondY3: 290,
};

let circleD = 150;
let circleX = 100;
let circleY = 600
//diamond and stick positions for the grid
let sX1;
let sX2;
let sY1;
let sY2;
let dX1;
let dX2;
let dX3;
let dY1;
let dY2;
let dY3;

function preload() {
  stickImg1 = loadImage("images-folder/stick.png");
  diamondImg1 = loadImage("images-folder/diamond.png");
  stickImg2 = loadImage("images-folder/stick.png");
  diamondImg2 = loadImage("images-folder/diamond.png");
  diamondImg3 = loadImage("images-folder/diamond.png");
  diamondAxeImg = loadImage ("images-folder/diamond-axe.webp");
  diamondHoeImg = loadImage ("images-folder/diamond-hoe.png");
  diamondPicImg = loadImage ("images-folder/diamond-pickaxe.png");
  diamondShovelImg = loadImage ("images-folder/diamond-shovel.png");
  diamondSwordImg = loadImage ("images-folder/diamond-sword.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("blueviolet");
  displayGrid();
  showButton();
  displayItems();
  fillGrid();
  craftingRecipes();
  displayCreation();
}

function displayGrid() {
  for (let y = 0; y < GRID_DIMENSIONS; y++) {
    for (let x = 0; x < GRID_DIMENSIONS; x++) {
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function showButton() { //shows the submit button
  stroke("black");
  circle(circleX, circleY, circleD);
}

function displayItems() {
  //shows the items used for crafting
  image(stickImg1, cords.stickX1, cords.stickY1, stickImg1.width*0.5, stickImg1.height*0.5);
  image(diamondImg1, cords.diamondX1, cords.diamondY1, diamondImg1.width*0.2, diamondImg1.height*0.2);
  image(stickImg2, cords.stickX2, cords.stickY2, stickImg2.width*0.5, stickImg2.height*0.5);
  image(diamondImg2, cords.diamondX2, cords.diamondY2, diamondImg2.width*0.2, diamondImg2.height*0.2);
  image(diamondImg3, cords.diamondX3, cords.diamondY3, diamondImg3.width*0.2, diamondImg3.height*0.2);
}

function mouseDragged() {
  //this is to prevent the cursor from picking up multiple items at once
  if (cords.stickX1 === cords.stickX2 && cords.stickY1 === cords.stickY2) {
    cords.stickX2 = 500;
    cords.stickY2 = 65;
  }
  if (cords.diamondX1 === cords.diamondX2 && cords.diamondY1 === cords.diamondY2 || cords.diamondX3 === cords.diamondX2 && cords.diamondY3 === cords.diamondY2) {
    cords.diamondX2 = 500;
    cords.diamondY2 = 220;
  }
  if (cords.diamondX1 === cords.diamondX3 && cords.diamondY1 === cords.diamondY3) {
    cords.diamondX3 = 500;
    cords.diamondY3 = 290;
  }

  //for movement of the sticks
  if (mouseX >= cords.stickX1 && mouseX <= cords.stickX1 + stickImg1.width*0.5 && mouseY >= cords.stickY1 && mouseY <= cords.stickY1 + stickImg1.height*0.5) {
    cords.stickX1 = mouseX - stickImg1.width/4;
    cords.stickY1 = mouseY - stickImg1.height/4;
    image(stickImg1, cords.stickX1, cords.stickY1, stickImg1.width*0.5, stickImg1.height*0.5);
  }
  if (mouseX >= cords.stickX2 && mouseX <= cords.stickX2 + stickImg2.width*0.5 && mouseY >= cords.stickY2 && mouseY <= cords.stickY2 + stickImg2.height*0.5) {
    cords.stickX2 = mouseX - stickImg2.width/4;
    cords.stickY2 = mouseY - stickImg2.height/4;
    image(stickImg2, cords.stickX2, cords.stickY2, stickImg2.width*0.5, stickImg2.height*0.5);
  }

  //for movement of the diamonds
  if (mouseX >= cords.diamondX1 && mouseX <= cords.diamondX1 + diamondImg1.width*0.2 && mouseY >= cords.diamondY1 && mouseY <= cords.diamondY1 + diamondImg1.height*0.2) {
    cords.diamondX1 = mouseX - diamondImg1.width/9;
    cords.diamondY1 = mouseY - diamondImg1.height/9;
    image(diamondImg1, cords.diamondX1, cords.diamondY1, diamondImg1.width*0.2, diamondImg1.height*0.2);
  }
  if (mouseX >= cords.diamondX2 && mouseX <= cords.diamondX2 + diamondImg2.width*0.2 && mouseY >= cords.diamondY2 && mouseY <= cords.diamondY2 + diamondImg2.height*0.2) {
    cords.diamondX2 = mouseX - diamondImg2.width/9;
    cords.diamondY2 = mouseY - diamondImg2.height/9;
    image(diamondImg2, cords.diamondX2, cords.diamondY2, diamondImg2.width*0.2, diamondImg2.height*0.2);
  }
  if (mouseX >= cords.diamondX3 && mouseX <= cords.diamondX3 + diamondImg3.width*0.2 && mouseY >= cords.diamondY3 && mouseY <= cords.diamondY3 + diamondImg3.height*0.2) {
    cords.diamondX3 = mouseX - diamondImg3.width/9;
    cords.diamondY3 = mouseY - diamondImg3.height/9;
    image(diamondImg3, cords.diamondX3, cords.diamondY3, diamondImg3.width*0.2, diamondImg3.height*0.2);
  }
}

function keyPressed() {
  //this puts the items position inside the actual grid
  if (key === " ") {
    if (sY1 < 3 && sX1 < 3) {
      craftingGrid[sY1][sX1] = 1;
    }
    if (sY2 < 3 && sX2 < 3) {
      craftingGrid[sY2][sX2] = 1;
    }
    if (dY1 < 3 && dX1 < 3) {
      craftingGrid[dY1][dX1] = 2;
    }
    if (dY2 < 3 && dX2 < 3) {
      craftingGrid[dY2][dX2] = 2;
    }
    if (dY3 < 3 && dX3 < 3) {
      craftingGrid[dY3][dX3] = 2;
    }
  }
}

function fillGrid() {
  //this is to set the variables position in the grid
  sX1 = Math.floor(cords.stickX1/CELL_SIZE);
  sY1 = Math.floor(cords.stickY1/CELL_SIZE);
  sX2 = Math.floor(cords.stickX2/CELL_SIZE);
  sY2 = Math.floor(cords.stickY2/CELL_SIZE);
  dX1 = Math.floor(cords.diamondX1/CELL_SIZE);
  dY1 = Math.floor(cords.diamondY1/CELL_SIZE);
  dX2 = Math.floor(cords.diamondX2/CELL_SIZE);
  dY2 = Math.floor(cords.diamondY2/CELL_SIZE);
  dX3 = Math.floor(cords.diamondX3/CELL_SIZE);
  dY3 = Math.floor(cords.diamondY3/CELL_SIZE);
}

function craftingRecipes() {
  //checks if a recipe for an item is in the grid
  //for diamond sword
  if (craftingGrid[0][1] === 2 && craftingGrid[1][1] === 2 && craftingGrid[2][1] === 1)  {
    itemMade = "diamond sword";
  }
  //diamond pickaxe
  else if (craftingGrid[0][0] === 2 && craftingGrid[0][1] === 2 && craftingGrid[0][2] === 2 && craftingGrid[1][1] === 1 && craftingGrid[2][1] === 1) {
    itemMade = "diamond pickaxe";
  }
  //diamond axe
  else if (craftingGrid[0][0] === 2 && craftingGrid[0][1] === 2 && craftingGrid[1][0] === 2 && craftingGrid[1][1] === 1 && craftingGrid[2][1] === 1) {
    itemMade = "diamond axe";
  }
  //diamond hoe
  else if (craftingGrid[0][0] === 2 && craftingGrid[0][1] === 2 && craftingGrid[1][1] === 1 && craftingGrid[2][1] === 1) {
    itemMade = "diamond hoe";
  }
  else if (craftingGrid[0][1] === 2 && craftingGrid[1][1] === 1 && craftingGrid[2][1] === 1) {
    itemMade = "diamond shovel";
  }
}

function displayCreation() {
  //displays what was made from the grid
  if (itemMade === "diamond sword") {
    image(diamondSwordImg, 60, 535, diamondSwordImg.width*0.2, diamondSwordImg.height*0.2);
  }
  if (itemMade === "diamond pickaxe") {
    image(diamondPicImg, 50, 540, diamondPicImg.width*0.09, diamondPicImg.height*0.09);
  }
  if (itemMade === "diamond axe") {
    image(diamondAxeImg, 50, 540,  diamondAxeImg.width*0.9, diamondAxeImg.height*0.9);
  }
  if (itemMade === "diamond hoe") {
    image(diamondHoeImg, 50, 545,  diamondHoeImg.width*1.5, diamondHoeImg.height*1.5);
  }
  if (itemMade === "diamond shovel") {
    image(diamondShovelImg, 50, 545,  diamondShovelImg.width*0.4, diamondShovelImg.height*0.4);
  }
}
