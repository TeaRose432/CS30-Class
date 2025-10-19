// Project Title
// Calli Sperrer
// due Oct 26 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let lgx = 100;
let lgy = 200;
let hx = 650;
let hy = 200;

let lilGuyImg = {
  damage: 10,
  speed: 3,
  option: 1,
};

let hornetImg = {
  damage: 7,
  speed: 5,
  option: 2,
};

function preload() {
  lilGuyImg = loadImage("lil-guy.png");
  hornetImg = loadImage("hornet.png");
}

function setup() {
  createCanvas(900, 900);
}

function draw() {
  background(220);
  choices();
}

function choices() {
  image(lilGuyImg, lgx, lgy, lilGuyImg.width*0.2, lilGuyImg.height*0.2);
  image(hornetImg, hx, hy, hornetImg.width*0.2, hornetImg.height*0.23)
}