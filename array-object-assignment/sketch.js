// Project Title
// Calli Sperrer
// due Oct 26 2025
// Extra for Experts:
//
let cords = {
  lgX: 100,
  lgY: 200,
  hX: 650,
  hY: 200,
  rectX: 350,
  rectY: 350,
  w: 200,
  h: 100,
};

let state = "startScreen";
let character;
let enemies = ["jumper", "big guy", "charger"];
let hornetImg;
let lilGuyImg;

let lg = { // lil guy player, lg means lil guy
  damage: 10,
  lgSpeed: 8,
};

let ht = { //hornet player, h or ht means hornet
  damage: 7,
  hSpeed: 8,
};

let lgStand;
let lgStandRight;
let lgRun;
let lgRunRight;
let hornetStand;
let hornetRun;
let direction = "right";

function preload() {
  lilGuyImg = loadImage("images-folder/lil-guy.png");//choice images
  hornetImg = loadImage("images-folder/hornet.png");
  lgStand = loadImage("images-folder/ghost-standing.gif");
  lgStandRight = loadImage("images-folder/ghost-standing-right.gif");
  lgRun = loadImage("images-folder/hollow-knight-walk.gif");
  lgRunRight = loadImage("images-folder/hollow-knight-walk-right.gif");
  hornetRun = loadImage("images-folder/hornet-run.gif");
}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  if (state === "startScreen") {
    background(220);
    showButton();
  }

  if (state === "characterChoice") {
    background(220);
    showChoices();
  }

  if (state === "play") {
    if (character === "lilGuy") {
      background("white");
      lgMove();

    }
    if (character === "hornet") {
      background(180);
      hornetMove();
    }
  }
}

function showButton() { 
  stroke("black");
  fill("gray");
  rect(cords.rectX, cords.rectY, cords.w, cords.h);
}

function showChoices() {
  if (state === "characterChoice") {
    image(lilGuyImg, cords.lgX, cords.lgY, lilGuyImg.width*0.2, lilGuyImg.height*0.2);
    image(hornetImg, cords.hX, cords.hY, hornetImg.width*0.2, hornetImg.height*0.23);
  }
}

function mousePressed() {
  if (state === "startScreen") {
    if (mouseX >= cords.rectX && mouseX <= cords.rectX + cords.w && mouseY >= cords.rectY && mouseY <= cords.rectY + cords.h) {
      state = "characterChoice";
    }
  }
  if (state === "characterChoice") {
    if (mouseX >= cords.lgX && mouseX <= cords.lgX + lilGuyImg.width*0.2 && mouseY >= cords.lgY && mouseY <= cords.lgY + lilGuyImg.height*0.2) {
      character = "lilGuy";
      state = "play";
    }
    if (mouseX >= cords.hX && mouseX <= cords.hX + hornetImg.width*0.2 && mouseY >= cords.hY && mouseY <= cords.hY + hornetImg.height*0.23) {
      character = "hornet";
      state = "play";
    }
  }
}

function lgMove() {
  if (keyIsDown(68)) {//pressed d
    cords.lgX += lg.lgSpeed;
    image(lgRunRight, cords.lgX, cords.lgY);
    direction = "right";
  }
  else if (keyIsDown(65)) {//pressed a
    cords.lgX -= lg.lgSpeed;
    image(lgRun, cords.lgX, cords.lgY);
    direction = "left";
  }
  else {
    if (direction === "left") {
      image(lgStand, cords.lgX, cords.lgY);
    }
    if (direction === "right") {
      image(lgStandRight, cords.lgX, cords.lgY);
    }
  }
}

function hornetMove() {
  if (keyIsDown(68)) {//pressed d
    cords.hX += ht.hSpeed;
    image(hornetRun, cords.hX, cords.hY);
    direction = "right";
  }
  else if (keyIsDown(65)) {//pressed a
    cords.hX -= ht.hSpeed;
    image(hornetRun, cords.hX, cords.hY);
    direction = "left";
  }
  else {
    if (direction === "left") {
      image(lgStand, cords.hX, cords.hY);
    }
    if (direction === "right") {
      image(lgStandRight, cords.hX, cords.hY);
    }
  }
}