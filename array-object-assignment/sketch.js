// Project Title
// Calli Sperrer
// due Oct 26 2025
// Extra for Experts:
//
let cords = {
  lgX: 100,
  lgY: 200,
  hX: 650,
  hY: 200
};
// let lgX = 100;
// let lgY = 200;
// let hX = 650;
// let hY = 200;
let state = "startScreen";
let rectX = 350;
let rectY = 350;
let w = 200;
let h = 100;
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

let hornetWalkFrames = 4;
let lilGuyStandFrames = 5;

function preload() {

  lilGuyImg = loadImage("images-folder/lil-guy.png");
  hornetImg = loadImage("images-folder/hornet.png");
  
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
  rect(rectX, rectY, w, h);
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
    if (mouseX >= rectX && mouseX <= rectX + w && mouseY >= rectY && mouseY <= rectY + h) {
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