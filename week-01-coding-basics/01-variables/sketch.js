/* * * * * * * * * * * * * * * * * * * * * * * *
Variables
Task: Experiment with changing the values of:
- r 
- background()
- fill()
- circle()
* * * * * * * * * * * * * * * * * * * * * * * */


//here we will use the 'width' and 'height' variables built-in to p5js to center the ellipses
//width = canvas width
//height = canvas height
//width/2 = canvas width divided by 2, i.e. half way across the canvas width

//let's set up our own variable to control the radius of the circles
let r = 400
let tom = "Thats my name!"

//setup is run once when the webpage is first loaded
function setup() {
  //Firstly, you must always create the canvas and specify its width and height
  createCanvas(500, 500); //this is a 500 pixel by 500 pixel square canvas
  
  //turn off outlines
  //noStroke();
}

//do our drawing in the draw() loop
function draw() {

  //background color set to light grey
  background(245, 0, 76); // RGB
  
  //set fill colour to magenta
  fill(255, 55, 155);
  //put 'r' in as the third parameter
  //'r' is the value we assigned it at the top of our sketch
  circle(width/2, height/2, r); // x, y, size
  
  //set fill colour to blue
  fill(55, 155, 255);
  //divide r by 2 to halve the radius
  circle(width/2, height/2, r/3);
}
