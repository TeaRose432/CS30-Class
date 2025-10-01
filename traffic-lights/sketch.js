// traffic lights
// Calli Sperrer
// 10/1/2025
//
let state = "go";
let timeState = 2000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  stateChange();
}

function stateChange() {
  if (millis() < timeState) {
    state = "go";
  } 
  else if (millis() < timeState*2) {
    state = "slow";
  }
  else if (millis() < timeState*4) {
    state = "stop";
  }
  else {
    state = "go";
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  if (state === "go") {
    fill("green");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
  else {
    fill("gray");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
  if (state === "slow") {
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
  else {
    fill("gray");
    ellipse(width/2, height/2, 50, 50); //middle
  }
  if (state === "stop") {
    fill("red");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else {
    fill("gray");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
}
