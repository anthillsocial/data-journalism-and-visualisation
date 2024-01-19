/* *********************************
*    Loading a CSV file 
*    https://p5js.org/reference/#/p5/loadTable
************************************/

// Declare global variables 
let dataset;
let country; 
let landuse; 
let y; 

// Load data.csv file within preload() 
function preload(){
  // Load the data into 'dataset' 
  dataset = loadTable('data.csv','header');
}

function setup(){
  createCanvas(500, 300); 
  colorMode(HSB);
  background(0, 0, 90);
}
