// Project Title
// Calli Sperrer
// due Oct 26 2025
//https://www.bing.com/videos/riverview/relatedvideo?q=hollowknight+lilguy+in+game+animations&&view=riverview&mmscn=mtsc&mid=073BD6F402F7A237E68B073BD6F402F7A237E68B&&aps=51&FORM=VMSOVR
// Extra for Experts:
//

let lgX = 100;
let lgY = 200;
let hX = 650;
let hY = 200;
let state = "startScreen";
let rectX = 50;
let rectY = 50;
let w = 200;
let h = 100;
let character;

let lilGuyImg = {
  damage: 10,
  speed: 3,
};

let hornetImg = {
  damage: 7,
  speed: 5,
};

function preload() {
  lilGuyImg = loadImage("lil-guy.png");
  hornetImg = loadImage("hornet.png");
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
    }
    if (character === "hornet") {
      background(180);
    }
  }
}

function showButton() { 
  fill("white");
  rect(rectX, rectY, w, h);
}

function showChoices() {
  if (state === "characterChoice") {
    image(lilGuyImg, lgX, lgY, lilGuyImg.width*0.2, lilGuyImg.height*0.2);
    image(hornetImg, hX, hY, hornetImg.width*0.2, hornetImg.height*0.23);
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
    if (mouseX >= lgX && mouseX <= lgX + lilGuyImg.width*0.2 && mouseY >= lgY && mouseY <= lgY + lilGuyImg.height*0.2) {
      character = "lilGuy";
      state = "play";
    }
    if (mouseX >= hX && mouseX <= hX + hornetImg.width*0.2 && mouseY >= hY && mouseY <= hY + hornetImg.height*0.23) {
      character = "hornet";
      state = "play";
    }
  }
}