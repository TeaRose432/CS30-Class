//Interactive Scene assignment
//for extra for experts I added control to the circles size via the mouse wheel
//Calli Sperrer for compsci 30
//due October 3rd 2025

let playerSpeed = 4;
let enemySpeed = 4;
let playerX = 50;
let playerY = 50;
let squareX = 700;
let squareY = 700;
let circleSize = 25;
let squareSize = 50;
let rectX = 50;
let rectY = 50;
let w = 200;
let h = 100;
let state = "startScreen";

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (state === "startScreen") {
    background("gray");
    showButton();
  }
  if (state === "play") {
    background(240);
    moveCircle();
    showPlayer();
    chasePlayer();
    showEnemy();
  }
}
//this is to change the circles size
function mouseWheel() {
  if (event.delta > 0) {//scroll up
    circleSize -= 1;
  }
  else { //scroll down
    circleSize +=1;
  }
}
//for wasd controls of the player
function moveCircle() {
  console.log(key);
  if (keyIsDown(87)) {//press w
    playerY -= playerSpeed;
  }
  if (keyIsDown(83)) {//press s
    playerY += playerSpeed;
  }
  if (keyIsDown(68)) {//press d
    playerX += playerSpeed;
  }
  if (keyIsDown(65)) {//press a
    playerX -= playerSpeed;
  }
}

function showPlayer() {
  fill("purple");
  circle(playerX, playerY, circleSize);
}

function showEnemy(){
  fill("red");
  square(squareX, squareY, squareSize);
}

function chasePlayer() {
  if (state === "play") {
    squareX -= enemySpeed;
  } 
}

function showButton() {
  fill("white");
  rect(rectX, rectY, w, h);
}

function mousePressed() {
  if (state === "startScreen") {
    if (mouseX >= rectX && mouseX <= rectX + w && mouseY >= rectY && mouseY <= rectY + h) {
      state = "play";
    } 
  }
}