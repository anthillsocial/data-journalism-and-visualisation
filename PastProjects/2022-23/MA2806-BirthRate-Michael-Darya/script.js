/*************************************************************************************************
DATA SET TITLE: Birth Rate 1938-2021
DATA SORCE: Statista
LINK TO DATA: https://www.statista.com/statistics/281416/birth-rate-in-the-united-kingdom-uk/?locale=en
DATA HEADERS: Topic, Years, Rate (per 1,000 population)
*************************************************************************************************/

let dataset; //refer to data file

let scaleFactor = 10;

function preload() {
  //loading the dataset
  dataset = loadTable("birth-rate.csv", "csv");
}

function setup() {
  let canvas = createCanvas(950, 450);
  canvas.parent("canvas-container");
}

function draw() {
  background(245);

  fill(55);
  textSize(18);
  textAlign(CENTER);
  text("Total Fertility Rate, England and Wales, 1938-2020", width / 2, 50);

  for (let row = 0; row < dataset.getRowCount(); row++) {
    let BirthRate = dataset.getString(row, 2); //row, col
    let Years = dataset.getNum(row, 1); //row, col

    let x = 50 + row * 10;
    let y = height - 50;
    
    let dotX = x;
    let dotY = y-15-(BirthRate*scaleFactor); //the y position of each dot on the graph
    let dotSize = 5;
    
    let d = dist(mouseX, mouseY, dotX, dotY);
    
    if(d < dotSize){
      fill(155, 195, 245);
      textAlign(LEFT);
      text(Years+": "+BirthRate, mouseX+10, mouseY-10);
    }else{
      fill(55);
    }
    ellipse(x, dotY, dotSize, dotSize);

    
    stroke(55);
    line(50, y-15, width-50, y-15);
    fill(55);
    textAlign(CENTER);
    textSize(10);
    noStroke();
    //text(BirthRate, x, y + 100);
    if(Years%10 ==0){
      text(Years, x, y);
    }
  }
}
