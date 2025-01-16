/* * * * * * * * * * * * * * * * * * * * * * * *
       Array 
 * * * * * * * * * * * * * * * * * * * * * * * */

let length = 10; //we will use this variable to specify the length of the array
let randomNums = []; //declare an empty array called randomNums

function setup(){
  createCanvas(500, 500);
  colorMode(HSB);

  //count from 0 up to the end of the array
  for(let i=0; i<length; i++){
    //at every index in the array, set a new random number between 0 and 250
    randomNums[i] = random(0, 250);
  }
}

function draw(){
  background(220, 15, 100);
  stroke(220, 65, 50);
  strokeWeight(2);

  //count from 0 up to the end of the array
  for(let i=0; i<length; i++){
    fill(220, 45, 85);
    //draw a rect 10 pixels wide and with 
    rect(i*50, 0, 50, randomNums[i]);
  }
}
