// Project Title
// Calli Sperrer
// due Oct 26 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 50;
let y = 50;

let lilGuyImg = {

};

function preload() {
  lilGuyImg = loadImage("lil-guy.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  showLilGuy;
}

function showLilGuy() {
  image(lilGuyImg, x, y, lilGuyImg.width*0.2, lilGuyImg.height*0.2);
}