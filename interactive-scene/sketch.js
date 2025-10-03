//Interactive Scene assignment
//for extra for experts I added control to the circles size via the mouse wheel
//Calli Sperrer for compsci 30
//due October 3rd 2025
//Used some code from the demos in class
//used the ps.j5 reference for things like mousewheel, text, and constrain.
//please dont show my project :,)

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
let canvasHeight = 800;
let canvasWidth = 800;
let state = "startScreen"; // the required state variable

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  if (state === "startScreen") {
    background("gray");
    showText();
    showButton();
  }
  if (state === "play") {
    background(240);
    gotHit();
    playerStatChange();
    moveCircle();
    showPlayer();
    chasePlayer();
    showEnemy();
  }
  if ( state === "gameOver") {
    background("red");
    showButton();
  }
  if (state === "winScreen") {
    background("green");
    showButton();
  }
}
function showText() { //text giving instructions in the start screen
  if (state === "startScreen") {
    textAlign(CENTER);
    text("To begin press the button. Use WASD controls to run from the enemy square. Use the scroll wheel to change player circles size.", 400, 200);
    textAlign(CENTER);
    text("The smaller the player is the faster they move. The larger the player is the more damage they do. Click on enemies with your mouse to damage them", 400, 225);
  } 
}


//this is to change the circles size
function mouseWheel() {
  console.log(circleSize);
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
  playerX = constrain(playerX, circleSize/2, canvasWidth - circleSize/2); // keeps player inside the canvas
  playerY = constrain(playerY, circleSize/2, canvasHeight - circleSize/2);
  circleSize = constrain(circleSize, 10, 40); //constrains circle size
}

function showPlayer() {
  fill("purple");
  circle(playerX, playerY, circleSize);
}

function showEnemy(){
  fill("red");
  square(squareX, squareY, squareSize);
}

function chasePlayer() {// has the enemy chase the player
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
  squareX = constrain(squareX, squareSize/2, canvasWidth - squareSize/2); // keeps enemy inside canvas
  squareY = constrain(squareY, squareSize/2, canvasWidth - squareSize/2);
}

function showButton() { //the start/restart button for all states except play
  fill("white");
  rect(rectX, rectY, w, h);
}

function mousePressed() { // has nested loops
  if (state === "gameOver" || state === "startScreen" || state === "winScreen") {
    if (mouseX >= rectX && mouseX <= rectX + w && mouseY >= rectY && mouseY <= rectY + h) {
      playerX = 50; //resetting the game
      playerY = 50;
      squareX = 700;
      squareY = 700;
      playerHP = 100;
      enemyHP = 100;
      damage = 20;
      circleSize = 25;
      playerSpeed = 5;
      state = "play";
    } 
  }
}


function mouseClicked() {// this checks if you are clicking inside of the enemy to deal damage
  if (state === "play") {
    if (mouseX >= squareX && mouseX <= squareX + squareSize && mouseY >= squareY && mouseY <= squareY + squareSize) {
      enemyHP -= damage;
      if (enemyHP <= 0) {
        state = "winScreen";
      }
    }
  }
}



function gotHit() { // has the required nested loop, and checks if the player is touching the enemy
  if (squareX >= playerX && squareX <= playerX + circleSize && squareY >= playerY && squareY <= playerY + circleSize) {
    playerHP -= 10;
    if (playerHP <= 0) {
      state = "gameOver";
    }
  }
}

function playerStatChange() {// changes the players stats based on circle size
  console.log(playerSpeed);
  console.log(damage);
  if (circleSize <= 24 && circleSize >= 16) {//there is certainly a better way to do this, this is if size is below 25
    damage = 15;
    playerSpeed = 6;
  }
  else if (circleSize <= 15 && circleSize >= 12){
    damage = 10;
    playerSpeed = 7;
  }
  else if (circleSize <= 11) {
    damage = 5;
    playerSpeed = 8;
  }
  else if (circleSize >= 26 && circleSize <= 29) {
    playerSpeed = 4;
    damage = 25;
  }
  else if (circleSize >= 30 && circleSize <= 34) {// this is if size is above 25
    playerSpeed = 3;
    damage = 30;
  }
  else if (circleSize >= 35 && circleSize <= 39) {
    playerSpeed = 3;
    damage = 35;
  }
  else if(circleSize >= 40) {
    playerSpeed = 3;
    damage = 40;
  }
}