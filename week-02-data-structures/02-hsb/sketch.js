/*
  Working with HSB colour  
  TASK: Draw a series of shapes while increasing
  either hue, saturation, and brightness each time
*/

// Runs once when our index.html file is first loaded
function setup() {
  createCanvas(700, 550); //width in pixels, height in pixels

  colorMode(HSB);
  noStroke();
}

//draw is run in an infinite loop
function draw() {
  //draw a black background
  background(95);

  // Define a HSB fill color
  fill(0, 100, 100); //hue, saturation, brightness
  // Draw a rectangle with the specified colour 
  rect(150, 150, 50, 250); //x, y, w, h

  // Draw a rectangle with the specified colour 
  fill(0, 50, 100); //hue, saturation, brightness
  rect(250, 150, 50, 250); //x, y, w, h

}
