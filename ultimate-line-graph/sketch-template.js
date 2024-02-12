/*****************************************************************
  DATA: Per Capita Co2 Emissions (US and UK)
  SOURCE: Our World In Data
  LINK: https://ourworldindata.org/explorers/co2?facet=none&country=GBR~USA&Gas=CO%E2%82%82&Accounting=Production-based&Fuel=Total&Count=Per+capita
  HEADERS: Year,UK,US
******************************************************************/
let dataset;
let x = 60; // Where to start drawing the graph from
let y = 450; // Where to start drawing the graph from
let setWidth = 600; // width of the graph in pixels 
let setHeight =  300; // height of the graph in pixels 
let years, ukco2, usco2; // Variable to save air data in

function preload() {
  dataset = loadTable("co2-US-UK.csv", "header");
}

function setup() {// Variable to save air data in
  createCanvas(700, 500);
  colorMode(HSB);
  // PREPARE DATA
  years = cleanData(dataset.getColumn(0)); 
  ukco2 = cleanData(dataset.getColumn(1)); 
  usco2 = cleanData(dataset.getColumn(2)); 
  // GET MAX & MIN VALUES 
  console.log(getMaxMin(years)); 
  console.log(getMaxMin(ukco2)); 
  console.log(getMaxMin(usco2)); 
}

function draw() {
  background(240); // Colour the background  
  drawHeader();    // Draw the head area

  // DRAW THE X and Y AXIS
  let xScale = [1800, 2020, "20"]; // min, max, intervals (as a string)
  let yScale = [0, 24, "2.0"];     // min, max, intervals (string determins decimal places)
  drawXAxis(x, y, xScale, setWidth);
  drawYAxis(x, y, yScale, setHeight);

  // DRAW LINE GRAPH for UK and US
  let hsb = [180, 65, 65];
  drawLine(x, y, xScale, yScale, setWidth, setHeight, years, ukco2, hsb) // UK
  drawLine(x, y, xScale, yScale, setWidth, setHeight, years, usco2, [360, 65, 65]) // US 
  
  // Stop the loop and finish drawing
  noLoop();
}

// Draw the top area  of the sketch 
function drawHeader(){
  push();
  fill(17);
  rect(0, 0, width, 100);
  fill(98);
  textAlign(LEFT);
  textSize(18);
  text("Co2 Emissions Per Capita, in Tonnes (1800-2020)", 50, 40);
  textSize(18);
  fill(180, 65, 65);
  text("UK", 50, 65);
  fill(360, 65, 65);
  text("US", 50, 85);
  pop();
}

// Make sure the datapoints are numbers and not strings! 
function cleanData(data){
  // Loop through all numbers in the array
  for(let i=0; i<data.length; i++){
    data[i] = Number(data[i]);
  }
  return data; 
}


// Draw data as a line
function drawLine(x, y, xScale, yScale, setWidth, setHeight, Xdata, Ydata, hsb){
  push();       // Save existing fill+stroke colours
  beginShape(); // Start the vector shape
  noFill();     // Its a line & not a solid
  stroke(hsb);  // Colour of the line
  // Loop through the array of numbers
  for(let i=0; i<Xdata.length; i++){
    let xValue = Xdata[i]; 
    let yValue = Ydata[i]; 
    // Convert max/min value to x/y cordinates
    xPos = map(xValue, xScale[0], xScale[1], x, x+setWidth); 
    yPos = map(yValue, yScale[0], yScale[1], y, y-setHeight); 
    vertex(xPos, yPos);
  }
  endShape(OPEN);// End the vector shape
  pop();         // Back to old fill+stroke colours
}

/*********************************************
* HELPFULL FUNCTIONS FOR GENERATING GRAPHS   * 
**********************************************/

// Draw the graph Y axis. 
function drawYAxis(x, y, yScale, myheight){
  let min = yScale[0]; //min(numbers); 
  let max = yScale[1];    //numbers.max;  
  let interval = Number(yScale[2]); // Convert thr string to a number
  let decimals = countDecimals(yScale[2]); 
  push();
  // Draw the line 
  stroke(18); // Set colour of the line
  line(x, y, x, y-myheight); //draw line 
  // Draw ticks and labels
  for(let i=min; i<=max; i+=interval){
    // Calculate the y position of the ticks / labels
    yPos = map(i, min, max, y, y-myheight); 
      stroke(18);
      line(x, yPos, x-5, yPos); //draw a tick
      // Draw the label
      noStroke(); //turn off stroke for text
      fill(18); //fill colour of text
      textAlign(RIGHT);
      label = i.toFixed(decimals);
      text(label, x-7, yPos+4); //write the value for the current tick 
  }
  pop();
}

// Draw the graph Y axis. 
function drawXAxis(x, y, xScale, myWidth){
  let min = xScale[0]; //min(numbers); 
  let max = xScale[1];    //numbers.max;  
  let interval = Number(xScale[2]);
  let decimals = countDecimals(xScale[2]); 
  push();
  // Draw the line 
  stroke(18); // Set colour of the line
  line(x, y, x+myWidth, y); //draw line 
  // Generate the ticks
  for(let i=min; i<=max; i+=interval){
    // Calculate the x position of the ticks / labels
    xPos = map(i, min, max, x, x+myWidth); 
      stroke(18);
      line(xPos, y, xPos, y+5); //draw a tick
      // Draw the label
      noStroke(); //turn off stroke for text
      fill(18); //fill colour of text
      label = i.toFixed(decimals);
      text(label, xPos-5, y+15); //write the value for the current tick 
  }
  pop();
}

// Grab the maximum and minimum values of an array
// and make sure its an array of Integers NOT strings 
function getMaxMin(data){
  let min = null; 
  let max = null;
  // Loop through all numbers in the array
  data.map(function(item){
    let num = Number(item); // Make sure its a number not a string
    if(item>max || max==null){max=num} // Save max
    if(item<min || min==null){min=num} // Save min
    return num;
  })
  // Return the data in a key-value array
  return {
    "min":min,
    "max":max
  }
}

// Check if the string represents a decimal and return decimal places
function countDecimals(value) { 
  if(value.includes(".")){
    return value.split(".")[1].length;  
  }else{
    return 0; 
  }
};

