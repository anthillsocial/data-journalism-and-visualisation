/*
  DATA: Sample Data
  HEADERS: Year,Value,Value2


  NOTE: A histogram is a graphical display of data 
  using bars of different heights. It is similar to a 
  Bar Chart, but a histogram groups numbers into ranges.
  See: https://www.mathsisfun.com/data/histograms.html
*/

let dataset = [];


let margin = 50;

function preload() {
  dataset = loadTable("./sample.csv", "header");
}

//run once when our index.html file is first loaded
function setup() {
  createCanvas(600, 500); //width in pixels, height in pixels
  noStroke();
  colorMode(HSB);
}

function draw() {
  background(241, 5, 95);

  //loop through every row in the dataset

  for (let row = 0; row < dataset.getRowCount(); row++) {
    //get value from column 1
    let y1 = dataset.getString(row, 1);
    //get value from column 2
    let y2 = dataset.getString(row, 2);
  
    //value from column 1
    fill(241, 45, 65);
    rect(margin + row * 50, height, 40, -y1);
    
    //stack value from column 2 on top
    fill(15, 75, 90);
    rect(margin + row * 50, height-y1, 40, -y2);
  }
}
