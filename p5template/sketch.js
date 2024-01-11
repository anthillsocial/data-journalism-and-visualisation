
let x = 0;

function setup() {
  createCanvas(500, 500); // canvas width/height
  background(0); // Make background black
}

function draw(){
  // Start - draw a white ellipse
  fill(255)
  rect(x, height/2, 20); // x, y, w, h
  x += 5;
  if(x>width){
    x = 0;
  }
}