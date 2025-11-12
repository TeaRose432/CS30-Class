// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Dog  {
  constructor(name) {
    this.age = 0;
    this.name = name;
  }

  bark() {
    console.log(this.name + " says woof");
  }
}

let fido = new Dog("fido");
let snoopy = new Dog("snoopy");

function setup() {
  createCanvas(windowWidth, windowHeight);
  fido.bark();
  snoopy.bark();
}

function draw() {
  background(220);
}
