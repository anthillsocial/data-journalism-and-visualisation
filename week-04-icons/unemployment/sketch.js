/*
  TASK: 
  - Can you add a description of the data in this comment 
    area in a similar way to the other examples?
  - Can you resize the display so it fits in a smaller screen size?
*/


let icon;
let dataset;
let unit = 200; //how much each unit will represent in relation to the dataset
let margin = 50; //whitespace around edges of the chart
let iconSize = 50;


//load both image and table in the preload function
function preload(){
  icon = loadImage('person.png');
  dataset = loadTable('uk-unemployment-00-19.csv', 'header');
}

function setup() {
  createCanvas(1050, 950); //width in pixels, height in pixels
  noStroke();
}

//draw is run in a loop
function draw() {
  //draw a white background
  background(255, 254, 252);
  
  //header
  fill(255, 0, 0);
  textFont("avenir");
  textAlign(RIGHT);
  textSize(40);
  let header = "Unemployment\n in Great Britain\n 2007-2019";
  text(header, width-margin, margin);

  image(icon, width-margin-iconSize, 220, iconSize, iconSize);
  textSize(15);
  fill(0);
  text("200,000 people", width-margin, 270);
  
  //source
  textSize(15);
  text("Source: ONS", width-35, height-5);
  
  //loop through each row
  for(let i=0; i<dataset.getRowCount(); i++){
    let unemployment = round(dataset.getNum(i, 1)/unit);
    
    //set fill colour to red again
    fill(255, 0, 0);
    
    //add year label
    textSize(15);
    textAlign(CENTER);
    let samplePeriod = dataset.getString(i, 0);
    text(samplePeriod, margin, margin+i*(iconSize+20));
    
    //loop to draw each unit in vertical column
    imageMode(CENTER);
    for(let j=0; j<unemployment; j++){
      fill(0);
      let y = margin+i*(iconSize+20);
      let x = margin+iconSize+j*(iconSize/2+10);
      image(icon, x, y, iconSize, iconSize);
    }
    
  }
  
}