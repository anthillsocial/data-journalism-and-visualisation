/* *********************************
*  Loading a CSV file 
*  https://p5js.org/reference/#/p5/loadTable
*  See week 02 lecture content for tasks
************************************/

// Declare global variables 
let dataset;

// Load data.csv file within preload() 
function preload(){
  // Load the data into 'dataset' 
  dataset = loadTable('data.csv','header');
}

function setup(){
  createCanvas(500, 300); 
  colorMode(HSB);
  background(0, 0, 90);
  text(dataset.get(0,0), 50, 50);
}
