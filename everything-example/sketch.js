/*****************************************************************
  DATA: Per Capita Co2 Emissions (US and UK)
  SOURCE: Our World In Data
  LINK: https://ourworldindata.org/explorers/co2?facet=none&country=GBR~USA&Gas=CO%E2%82%82&Accounting=Production-based&Fuel=Total&Count=Per+capita
  HEADERS: Year,UK,US
******************************************************************/
let dataset;

function preload() {
  dataset = loadTable("co2-US-UK.csv", "header");
}

function setup() {
  createCanvas(700, 500);
  colorMode(HSB);
  // PREPARE DATA
  let x = 60; // Where to start drawing the graph from
  let y = 450; // Where to start drawing the graph from
  let setWidth = 600; // width of the graph in pixels 
  let setHeight =  300; // height of the graph in pixels 
  let years = getMaxMinNums(dataset.getColumn(0)); // Get max/min/clean number values
  let ukco2 = getMaxMinNums(dataset.getColumn(1)); // Get max/min/clean number values
  let usco2 = getMaxMinNums(dataset.getColumn(2)); // Get max/min/clean number values
  
  // TEST DATA (replaces CSV data above)
  //years = getMaxMinNums( [1,2,3,4,5,6,7.0] );
  //ukco2 = getMaxMinNums( [1.5,2,3,4,5,6,7] );
  //ukco2.baseline = -10; 
  //years.baseline = -10; 
}

function draw() {
  background(240); // Colour the background  
  drawHeader();    // Draw the head area

  // DRAW THE X and Y AXIS: xPos,yPos,width,max,min,interval,showLastValue,decimalPlaces
  drawXAxis(x, y, setWidth, years, 20, false, 0);
  drawYAxis(x, y, setHeight, ukco2, 1.0, false, 1);

  // DRAW LINE GRAPH for UK and US
  let hsb = [180, 65, 65];
  drawLine(x, y, setWidth, setHeight, years, ukco2, hsb) // UK
  drawLine(x, y, setWidth, setHeight, years, usco2, [360, 65, 65]) // US 
  
  // DRAW LOLLIPOPS 
  //let pops = getMaxMinNums( [3,7,8,11,16] );
  //let lols = getMaxMinNums( [2,5,8,9,12] );
  //pops.baseline = -10;
  //lols.baseline = -10;
  //let labels =  ["one", "two", "three", "four", "five"]; 
  //drawLollypops(x, y, setWidth, setHeight, pops, lols, [360, 65, 65], labels); 

  // Stop the loop and finish drawing
  //noLoop();
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


// Draw data as a line
function drawLine(x, y, setWidth, setHeight, Xnums, Ynums, hsb, labels=null){
  push();       // Save existing fill+stroke colours
  beginShape(); // Start the vector shape
  noFill();     // Its a line & not a solid
  stroke(hsb);  // Colour of the line
  if(Ynums.baseline!=null){
    Ynums.min = Ynums.baseline;
  }
  if(Xnums.baseline!=null){
    Xnums.min = Xnums.baseline;
  }
  // Loop through the array of numbers
  for(let i=0; i<Xnums.numbers.length; i++){
    xValue = Xnums.numbers[i]; 
    yValue = Ynums.numbers[i]; 
    xPos = map(xValue, Xnums.min, Xnums.max, x, x+setWidth); 
    yPos = map(yValue, Ynums.min, Ynums.max, y, y-setHeight); 
    //console.log(xPos, yPos)
    //fill(hsb)
    //ellipse(xPos, yPos, 5);
    //text(labels[i], xPos, yPos); 
    noFill()
    vertex(xPos, yPos);
  }
  endShape(OPEN);// End the vector shape
  pop();         // Back to old fill+stroke colours
}

// Draw column of data as a line
function drawLollypops(x, y, setWidth, setHeight, Xnums, Ynums, hsb, labels=null){
  push();       // Save existing fill+stroke colours
  noFill();     // Its a line & not a solid
  stroke(hsb);  // Colour of the line
  if(Ynums.baseline!=null){
    Ynums.min = Ynums.baseline;
  }
  if(Xnums.baseline!=null){
    Xnums.min = Xnums.baseline;
  }
  // Loop through the array of numbers
  for(let i=0; i<Xnums.numbers.length; i++){
    xValue = Xnums.numbers[i]; 
    yValue = Ynums.numbers[i]; 
    xPos = map(xValue, Xnums.min, Xnums.max, x, x+setWidth); 
    yPos = map(yValue, Ynums.min, Ynums.max, y, y-setHeight); 
    //console.log(xPos, yPos)
    fill(hsb);
    line(xPos,y, xPos, yPos);
    ellipse(xPos, yPos, 30);
    fill(200);
    text(labels[i], xPos-8, yPos); 
    noFill()
  }
  //endShape(OPEN);// End the vector shape
  pop();         // Back to old fill+stroke colours
}



/*********************************************
* HELPFULL FUNCTIONS FOR GENERATING GRAPHS   * 
**********************************************/

// Draw the graph Y axis. 
function drawYAxis(x, y, myheight, numbers, interval, drawend=false, decplace=null){
  let min = numbers.min; 
  let max = numbers.max; 
  // If a basline variable has been set then adjust the display
  if(numbers.baseline!=null){
    min = numbers.baseline;
  }
  push();
  // Draw the line 
  stroke(18); // Set colour of the line
  line(x, y, x, y-myheight); //draw line 
  // Draw ticks and labels
  let range = max-min;
  let remainder = range%interval; 
  let newmax = max; 
  // Make sure all numbers fit in the scale
  if(max%interval>0){newmax = max+(interval-remainder)}
  // Generate the ticks
  for(let i=min; i<=newmax; i+=interval){
    // Calculate the x position of the ticks / labels
    yPos = map(i, min, newmax, y, y-myheight); 
    // Determine if we draw the last label or not
    if(i<=max || drawend==true){ 
      stroke(18);
      line(x, yPos, x-5, yPos); //draw a tick
      // Draw the label
      noStroke(); //turn off stroke for text
      fill(18); //fill colour of text
      textAlign(RIGHT);
      if(decplace===null){
        label = i;
      }else{
        label = i.toFixed(decplace);
      }
      text(label, x-7, yPos+4); //write the value for the current tick 
    }
  }
  pop();
}

// Draw the graph X axis
function drawXAxis(x, y, mywidth, numbers, interval, drawend=false, decplace=null){
  let min = numbers.min; 
  let max = numbers.max; 
  // If a basline variable has been set then adjust the display
  if(numbers.baseline!=null){
    min = numbers.baseline;
  }
  push();
  // Draw the line 
  stroke(18); // Set colour of the line
  line(x, y, x+mywidth, y); //draw line 
  // Draw ticks and labels
  let range = max-min;
  let remainder = range%interval; 
  let newmax = max; 
  if(max%interval>0){newmax = max+(interval-remainder)}
  for(let i=min; i<=newmax; i+=interval){
    // Calculate the x position of the ticks / labels
    xPos = map(i, min, newmax, x, x+mywidth); 
    // Determine if we draw the last label or not
    if(i<=max || drawend==true){ 
      stroke(18);
      line(xPos, y, xPos, y+5); //draw a tick
      // Draw the label
      noStroke(); //turn off stroke for text
      fill(18); //fill colour of text
      if(decplace===null){
        label = i;
      }else{
        label = i.toFixed(decplace);
      }
      text(label, xPos-5, y+15); //write the value for the current tick 
    }
  }
  pop();
}

// Grab the maximum and minimum values of an array
// and make sure its an array of Integers NOT strings 
function getMaxMinNums(myarray){
  let min = null; 
  let max = null;
  // Loop through all numbers in the array
  let numbs = myarray.map(function(item){
    let num = Number(item); // Make sure its a number
    if(item>max || max==null){max=num} // Calc max
    if(item<min || min==null){min=num} // Calc min
    return num;
  })
  // Return the data
  return arr = {
    "max":max, 
    "min":min,
    "numbers":numbs
  }
}



