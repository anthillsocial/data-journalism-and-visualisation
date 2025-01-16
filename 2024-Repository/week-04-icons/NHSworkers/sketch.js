/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: NHS staff from overseas: statistics
 DATA SOURCE: UK Parliament
 LINK TO DATA: https://commonslibrary.parliament.uk/research-briefings/cbp-7783/
 HEADERS: nationality,quantity

 TASK: Can you add coloured graphics to this visualisation? 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

let dataset;
let scale = 2000; //divisor
let iconSize = 30;
let padding = 20; //whitespace around each icon
let margin = 100; //whitespace around the visualisation

let medic; //the image we want to display in the graphic

function preload(){
  dataset = loadTable("nhs-staffing.csv", "header");
  medic = loadImage("body.png");
}

function setup() {
  createCanvas(700, 400); 
}

function draw() {
  background(255);
  
  //heading for the visualisation
  fill(0);
  textAlign(LEFT);
  textSize(32);
  text("NHS Workers by Nationality", margin, 60);

  
  for(let row=0; row<dataset.getRowCount(); row++){
    let quantity = dataset.getNum(row, 1);
    let scaledQuantity = round(quantity/scale); //scale down the quantity
    
    //calculate the y value for the row
    let y = margin+row*(iconSize+padding);
    
    //add a text label
    textAlign(RIGHT);
    let nationality = dataset.getString(row, 0); //get nationality
    fill(0);
    noStroke();
    textSize(12); //make the font size smaller
    text(nationality, margin-padding, y + iconSize); //show the nationality label
    

    //now we loop through each icon we wish to display on the current row
    for(let i=0; i < scaledQuantity; i++){
      let x = margin+i*iconSize; //calculate x position
      //show the icon!
      image(medic, x, y, iconSize, iconSize);
    }
    
  }
  
  //graph key
  image(medic, width-margin-iconSize, height-50, 20, 20);
  textSize(8);
  textAlign(LEFT);
  text(scale+" people", width-margin, height-30);
  
  
}
