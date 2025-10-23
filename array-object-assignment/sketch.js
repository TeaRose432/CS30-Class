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

let lilGuyImg = {
  damage: 10,
  speed: 3,
};

let hornetImg = {
  damage: 7,
  speed: 5,
};

let timeDelay;
let lgStandFrame1;
let lgStandFrame2;
let lgStandFrame3;
let lgStandFrame4;
let lgStandFrame5;

function preload() {
  lilGuyImg = loadImage("images-folder/lil-guy.png");//choice images
  hornetImg = loadImage("images-folder/hornet.png");
  lgStandFrame1 = loadImage("images-folder/lg-stand1.png");
  lgStandFrame2 = loadImage("images-folder/lg-stand2.png");
  lgStandFrame3 = loadImage("images-folder/lg-stand3.png");
  lgStandFrame4 = loadImage("images-folder/lg-stand4.png");
  lgStandFrame5 = loadImage("images-folder/lg-stand5.png");
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
      background(200);
      showPlayer();
      lgMove();

    }
    if (character === "hornet") {
      background(180);
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
  console.log(mousePressed);
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

function showPlayer() {
  while (keyIsDown !== true) {
    image(lgStandFrame1, cords.lgX, cords.lgY, lgStandFrame1.width, lgStandFrame1.height);
    image(lgStandFrame2, cords.lgX, cords.lgY, lgStandFrame2.width, lgStandFrame2.height);
    image(lgStandFrame3, cords.lgX, cords.lgY, lgStandFrame3.width, lgStandFrame3.height);
    image(lgStandFrame4, cords.lgX, cords.lgY, lgStandFrame4.width, lgStandFrame4.height);
    image(lgStandFrame5, cords.lgX, cords.lgY, lgStandFrame5.width, lgStandFrame5.height);
  }

}

function lgMove() {
  if (keyIsDown(87)) {//press w
    cords.lgY -= lilGuyImg.speed;
  }
  if (keyIsDown(83)) {//press s
    cords.lgY += lilGuyImg.speed;
  }
  if (keyIsDown(68)) {//press d
    cords.lgX += lilGuyImg.speed;
  }
  if (keyIsDown(65)) {//press a
    cords.lgX -= lilGuyImg.speed;
  }
}