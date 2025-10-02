//Interactive Scene assignment
//for extra for experts I added control to the circles size via the mouse wheel
//Calli Sperrer for compsci 30
//due October 3rd 2025

let playerHP = 100;
let enemyHP = 100;
let damage = 20; //this is the damage the player deals to the enemy
let playerSpeed = 5;
let enemySpeed = 3;
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
let state = "startScreen"; // the required state variable

function setup() {
  createCanvas(800, 800);
}

function draw() {
  if (state === "startScreen") {
    background("gray");
    showText();
    showButton();
  }
  if (state === "play") {
    background(240);
    moveCircle();
    showPlayer();
    chasePlayer();
    showEnemy();
    hitEnemy();
  }
  if ( state === "gameOver") {
    background("red");
    showButton();
  }
}
function showText() {
  if (state === "startScreen") {
    textAlign(CENTER);
    text("To begin press the button. Use WASD controls to run from the enemy square. Use the scroll wheel to change player circles size.", 400, 200);
    textAlign(CENTER);
    text("The smaller the player is the faster they move. The larger the player is the more damage they do. Click on enemies with your mouse to damage them", 400, 225);
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
  if (squareX < playerX) {
    squareX += enemySpeed;
  } 
  if (squareY < playerY) {
    squareY += enemySpeed;
  }
  if (squareX > playerX) {
    squareX -= enemySpeed;
  } 
  if (squareY > playerY) {
    squareY -= enemySpeed;
  }
}

function showButton() {
  fill("white");
  rect(rectX, rectY, w, h);
}

function mousePressed() { // has nested loops
  if (state === "gameOver" || state === "startScreen") {
    if (mouseX >= rectX && mouseX <= rectX + w && mouseY >= rectY && mouseY <= rectY + h) {
      playerX = 50; //resetting the game
      playerY = 50;
      squareX = 700;
      squareY = 700;
      playerHP = 100;
      enemyHP = 100;
      state = "play";
    } 
  }
}


function mouseClicked() {
  if (state === "play") {
    if (mouseX >= squareX && mouseX <= squareX && mouseY >= squareY && mouseY <= squareY) {
      enemyHP -= damage;
      if (enemyHP <= 0) {
        state = "gameOver";
      }
    }
  }
}



function gotHit() { // has the required nested loop
  if (squareX >= playerX && squareX <= playerX + circleSize && squareY >= playerY && squareY <= playerY + circleSize) {
    playerHP -= 20;
    if (playerHP <= 0) {
      state = "gameOver";
    }
  }
}
