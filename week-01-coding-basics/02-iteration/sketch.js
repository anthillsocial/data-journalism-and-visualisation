/* * * * * * * * * * * * * * * * * * * * * * * *
       Iteration
 * * * * * * * * * * * * * * * * * * * * * * * */

//declare a variable 'w' and give it a value
//we will use this to control the width of the rectangles
var w = 50;
var h = 50;

//setup is run once when the webpage is first loaded
function setup() {
  createCanvas(500, 500);
  noStroke();
  
}

//do our drawing in the draw() loop
function draw() {

  //background color set to light grey
  background(245);
  
  //a for-loop iterates through a set of commands within the code block a defined number of times
  //It typically has three elements, separated by semi-colons
  //Firstly, you declare a counter variable (this is conventionally called 'i') and most often you want to give this a value of '0'
  //Secondly, you tell it how high you want it to count to--our counter 'i' must be less than 10
  //Finally, 'i++' means that every time the instructions are repeated, increment our counter 'i' by one
  //Thus, on the first loop, i=0; on the second loop, i=1; on the third, i=2, etc...
  
  for(var i=0; i<10; i=i+1){
    fill(25*i, 0, 255); //multiply the 'red' fill value by 'i' so that it increases every time the loop is executed
    rect(i*w, 150, w, h); //move each rectangle horizontally to the right each iteration
    
    ellipse(i*w+w/2, 250, w, h); //move each ellipse horizontally
    
    triangle(i*w, 350, i*w+w/2, 350-h, i*w+w, 350); //some messy looking arithmetic here, but basically doing the same as above but for triangles
  }
  
}
