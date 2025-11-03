// Project Title
// Calli Sperrer
// due Oct 26 2025
// Extra for Experts:
//I made use of gifs instead of images. 

let cords = {
  lgX: 100,
  lgY: 200,
  hX: 650,
  hY: 200,
  enemyX: 700,
  bgY: 744, //big guy Y cord
  cY: 725, //charger y cord
  jY: 714, //jumper y cord
  rectX: 350,
  rectY: 350,
  w: 200,
  h: 100,
};

let theBackgrounds = [];

let state = "startScreen";
let character;
let enemies = ["jumper", "big guy", "charger"];
let enemySPD = 4;
let enemyDirection = "left";
let enemyJ;
let enemyC;
let enemyBG;
let enemyJRight;
let enemyCRight;
let enemyBGRight;
let opponent;
let hornetImg;
let lilGuyImg;

let lg = { // lil guy player, lg means lil guy
  damage: 10,
  lgSpeed: 5,
};

let ht = { //hornet player, h or ht means hornet
  damage: 7,
  hSpeed: 8,
};

let lgStand;//setting up character movement and idle animations
let lgStandRight;
let lgRun;
let lgRunRight;
let hornetIdle;
let horentIdleRight;
let hornetRun;
let hornetRunRight;
let direction = "right";//is used to know which way character should face when movement stops

function setup() {
  createCanvas(900, 900);
  theBackgrounds = [webRoom, blueRoom, tramRoom];
}

function preload() {//loading images and animations
  lilGuyImg = loadImage("images-folder/lil-guy.png");
  hornetImg = loadImage("images-folder/hornet.png");
  lgStand = loadImage("images-folder/ghost-standing.gif");
  lgStandRight = loadImage("images-folder/ghost-standing-right.gif");
  lgRun = loadImage("images-folder/hollow-knight-walk.gif");
  lgRunRight = loadImage("images-folder/hollow-knight-walk-right.gif");
  hornetRun = loadImage("images-folder/hornet-run.gif");
  hornetRunRight = loadImage("images-folder/hornet-run-right.gif");
  hornetIdle = loadImage("images-folder/hornet-idle.webp");
  hornetIdleRight = loadImage("images-folder/hornet-idle-right.webp");
  enemyBG = loadImage("images-folder/big-guy-walk.gif");
  enemyJ = loadImage("images-folder/jumper-walk.gif");
  enemyC = loadImage("images-folder/charger-walk.gif");
  enemyBGRight = loadImage("images-folder/big-guy-walk-right.gif");
  enemyJRight = loadImage("images-folder/jumper-walk-right.gif");
  enemyCRight = loadImage("images-folder/charger-walk-right.gif");
  blueRoom = loadImage("images-folder/blue-room.jpg");
  webRoom = loadImage("images-folder/web-room.jpg");
  tramRoom = loadImage("images-folder/tram-room.png");
}



function draw() {
  if (state === "startScreen") {
    background(220);
    showButton();
  }
  if (state === "characterChoice") {
    background(220);
    Choices();
  }
  if (state === "play") {
    if (character === "lilGuy") {
      //background("white");
      backgroundChange();
      //showGround();
      showEnemy();
      lgMove();

    }
    if (character === "hornet") {
      background("white");
      //showGround();
      showEnemy();
      hornetMove();
    }
  }
}


function backgroundChange() {
  if (state === "play") {
    image(blueRoom, 0, 0);
  }
}

function showButton() { //shows the begin button
  stroke("black");
  fill("gray");
  rect(cords.rectX, cords.rectY, cords.w, cords.h);
}

function Choices() {//lets player decide which character to play
  if (state === "characterChoice") {
    image(lilGuyImg, cords.lgX, cords.lgY, lilGuyImg.width*0.2, lilGuyImg.height*0.2);
    image(hornetImg, cords.hX, cords.hY, hornetImg.width*0.2, hornetImg.height*0.23);
  }
  opponent = random(enemies);//choosing a random enemy that will appear
}

function mousePressed() {
  if (state === "startScreen") {//checks if start button is pressed
    if (mouseX >= cords.rectX && mouseX <= cords.rectX + cords.w && mouseY >= cords.rectY && mouseY <= cords.rectY + cords.h) {
      state = "characterChoice";
    }
  }
  if (state === "characterChoice") {//checks which character is chosen
    if (mouseX >= cords.lgX && mouseX <= cords.lgX + lilGuyImg.width*0.2 && mouseY >= cords.lgY && mouseY <= cords.lgY + lilGuyImg.height*0.2) {
      character = "lilGuy";
      cords.lgX = 450;
      cords.lgY = 740;
      state = "play";
    }
    if (mouseX >= cords.hX && mouseX <= cords.hX + hornetImg.width*0.2 && mouseY >= cords.hY && mouseY <= cords.hY + hornetImg.height*0.23) {
      character = "hornet";
      cords.hX = 450;
      cords.hY = 740;
      state = "play";
    }
  }
}

// function showGround() {//draws the ground characters and enemies stand on
//   fill("gray");
//   noStroke();
//   rect(0, 800, 900, 100);
// }

function showEnemy() { //draws and controls the movement for enemies
  if (cords.enemyX <= 5) {
    enemyDirection = "right";
  }
  if (cords.enemyX >= 830) {
    enemyDirection = "left";
  }
  if (enemyDirection === "left") {
    if (opponent === "big guy") {
      cords.enemyX -= enemySPD;
      image(enemyBG, cords.enemyX, cords.bgY, enemyBG.width*0.4, enemyBG.height*0.4);
    }
    if (opponent === "charger") {
      cords.enemyX -= enemySPD;
      image(enemyC, cords.enemyX, cords.cY, enemyC.width*0.4, enemyC.height*0.4);
    }
    if (opponent === "jumper") {
      cords.enemyX -= enemySPD;
      image(enemyJ, cords.enemyX, cords.jY, enemyJ.width*0.4, enemyJ.height*0.4);
    }
  }
  if (enemyDirection === "right") {
    if (opponent === "big guy") {
      cords.enemyX += enemySPD;
      image(enemyBGRight, cords.enemyX, cords.bgY, enemyBGRight.width*0.4, enemyBGRight.height*0.4);
    }
    if (opponent === "charger") {
      cords.enemyX += enemySPD;
      image(enemyCRight, cords.enemyX, cords.cY, enemyCRight.width*0.4, enemyCRight.height*0.4);
    }
    if (opponent === "jumper") {
      cords.enemyX += enemySPD;
      image(enemyJRight, cords.enemyX, cords.jY, enemyJRight.width*0.4, enemyJRight.height*0.4);
    }
  }
}

function lgMove() {//movement for lil guy
  if (keyIsDown(68)) {//pressed d
    cords.lgX += lg.lgSpeed;
    image(lgRunRight, cords.lgX, cords.lgY, lgRunRight.width*0.4, lgRunRight.height*0.4);
    direction = "right";
  }
  else if (keyIsDown(65)) {//pressed a
    cords.lgX -= lg.lgSpeed;
    image(lgRun, cords.lgX, cords.lgY, lgRun.width*0.4, lgRun.height*0.4);
    direction = "left";
  }
  else {
    if (direction === "left") {
      image(lgStand, cords.lgX, cords.lgY, lgStand.width*0.4, lgStand.height*0.4);
    }
    if (direction === "right") {
      image(lgStandRight, cords.lgX, cords.lgY, lgStandRight.width*0.4, lgStandRight.height*0.4);
    }
  }
}

function hornetMove() {//movement for hornet
  if (keyIsDown(68)) {//pressed d
    cords.hX += ht.hSpeed;
    image(hornetRunRight, cords.hX, cords.hY);
    direction = "right";
  }
  else if (keyIsDown(65)) {//pressed a
    cords.hX -= ht.hSpeed;
    image(hornetRun, cords.hX, cords.hY);
    direction = "left";
  }
  else {
    if (direction === "left") {
      image(hornetIdle, cords.hX, cords.hY, hornetIdle.width*0.4, hornetIdle.height*0.4);
    }
    if (direction === "right") {
      image(hornetIdleRight, cords.hX, cords.hY, hornetIdleRight.width*0.4, hornetIdleRight.height*0.4);
    }
  }
}