
let dataset;
let margin = 150;

let scale = 3;
let spacing = 100;

let maxVal;
let minVal;

let graphBaseLine;

function preload(){
  dataset = loadTable("subscriber-data.csv", "header");
}

function setup(){
  let myCanvas = createCanvas(725, 625);
  myCanvas.parent("canvas-container");
  
  minVal = min(dataset.getColumn("Streamers"));
  maxVal = max(dataset.getColumn("Streamers"));
  console.log("Min: "+minVal);
  console.log("Max: "+maxVal);
  
  graphBaseLine = height-margin/2;

}

function draw(){
  background(30);
  
  for(let row=0; row<dataset.getRowCount(); row++){
    let platformName = dataset.getString(row, 0);
    let shareOfStreamers = dataset.getNum(row, 1) * scale;

    
    let x = margin+(row*spacing);
    let y = graphBaseLine;

    
    //LABEL
    fill(300);
    noStroke();
    textSize(10);
    textAlign(CENTER);
    text(platformName, x, y+20);
    
    //BARS
    fill(300);
    rect(x-spacing/7.8, y, spacing/4, -shareOfStreamers);
   
    
  }
  
  
  fill(20);
  noStroke();
  rect(0, 0, width, 120);
  fill(300);
  textSize(18);
  textAlign(LEFT);
  text("The UK's Most Popular Music Platforms", margin/8, 50);
  
  textSize(12);
  fill(300);
  text("MUSIC PLATFORMS", margin/8, 75);
  
  
  
  displayAxis(margin/2, graphBaseLine, 10);
  
  textAlign(RIGHT);
  text("Data collected: Statista", width-margin/8, height-margin/8);
}

function displayAxis(x, y, interval){
  
  textAlign(RIGHT);
  for(let yt=0; yt <= 100; yt+=interval){
    noStroke();
    fill(300);
    textSize(8);
    text(yt, x-8, y-(yt*scale));
    stroke(55);
    line(x, y-(yt*scale), x-5, y-(yt*scale));
  }

  line(x, y, x, y-(100*scale));
  line(x, y, margin*2+(1+dataset.getColumnCount())*spacing, y);
  
}