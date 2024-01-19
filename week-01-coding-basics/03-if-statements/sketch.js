/* * * * * * * * * * * * * * * * * * * * * * * *
       If statements 
 * * * * * * * * * * * * * * * * * * * * * * * */

let myVar = 0; //a variable used in the first if statement
let showRect = true; //try changing this to 'false'

function setup(){
  createCanvas(500, 500);
}

function draw(){
  background(0);
  noStroke();
  
  //check if myVar is less than 50
  if(myVar < 50){
    fill(255, 0, 0);
    ellipse(100, height/2, 100, 100);
  }
  
  //check if our boolean variable showRect is true
  if(showRect==true){
    fill(0, 0, 255);
    rect(200, 200, 100, 100);
  }
  
  //check if mouseX is greater than 350
  if(mouseX > 350){
    fill(255, 255, 0);
  }else{
    noFill();
    stroke(255, 255, 0);
  }
  //always drawing the triangle, but fill colour depends on if statement
  triangle(350, 300, 400, 200, 450, 300);

}
