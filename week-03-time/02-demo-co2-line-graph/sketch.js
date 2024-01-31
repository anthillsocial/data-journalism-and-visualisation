/*
  DATA: Per Capita Co2 Emissions (US and UK)
  SOURCE: Our World In Data
  LINK: https://ourworldindata.org/explorers/co2?facet=none&country=GBR~USA&Gas=CO%E2%82%82&Accounting=Production-based&Fuel=Total&Count=Per+capita
  HEADERS: Year,UK,US

  TASKS - Can you:   
  1. Fix this sketch
  1. Source and load alternative data? 
  2. Add small dots to each data point? 
  3. Add X axis ticks & text? 

*/

let dataset;
let scale = 10;
let colour;

function preload() {
  dataset = loadTable("co2-US-UK.cs", "header");
}

function setup() {
  createCanvas(1000, 500);
  colorMode(HSB);
}

function draw() {
  
  // Make sure we are working with lines
  noFill();

  // Draw the UK line
  colour = [180, 65, 65]; // Hue, Saturation, Brightness
  drawLine(1, colour) // column, colour
  
  // Draw the US line
  colour = [360, 65, 65]; // Hue, Saturation, Brightness
  rawLine(2, colour) // column, colour

  // Draw the header area
  drawHeader();

  // Draw the x/y axis
  drawAxis(50, height-100, 0, 25, scale, 5);
}

 // Draw column of data as a line
function drawLine(column, colour){
  beginShape();
  stroke(colour);
  for (let row = 0; row < dataset.getRowCount(); row++) {
    let emissions = dataset.getNum(row, column);
    let scaledEmissions = emissions*scale;
    let x = 50+(row*4);
    let y = height-100;
    vertex(x, y-scaledEmissions);
  }
  endShape(OPEN);
}

// Draw the top area  of the sketch 
function drawHeader(){
  fill(17);
  noStroke();
  rect(0, 0, width, 100);
  textAlign(LEFT);
  fill(98);
  noStroke();
  textSize(18);
  text("Co2 Emissions Per Capita, in Tonnes (1800-2020)", 50, 40);
  textSize(18);
  fill(180, 65, 65);
  text("UK", 50, 65);
  fill(360, 65, 65);
  text("US", 50, 85);
}

// Draw the graph X & Y axis
function drawAxis(x, y, mini, maxi, scaleFactor, interval){

  // DRAW THE X AXIS 
  stroke(18); // Set colour of the line
  line(x, y, width-x, y); //draw x axis

  // DRAW THE Y AXIS 
  stroke(18); // Set colour of the line
  let axisHeight = (maxi-mini) * scaleFactor; // calc height of Y axis
  let increment =  interval * scaleFactor; // Calc position of ticks
  line(x, y, x, y-axisHeight); //draw y axis
  textAlign(RIGHT); //align text to the right so it's neatly formatted!
  textSize(11);
  // Loop through to draw each tick on the y axis
  for(let yt=0; yt <= axisHeight; yt+=increment){
    stroke(18);
    line(x, y-yt, x-5, y-yt); //draw a tick
    noStroke(); //turn off stroke so it doesn't effect the text
    fill(18); //fill colour of text
    text((yt/scale), x-10, y-yt); //write the value for the current tick
  }

}