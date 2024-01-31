/*
  CLIMATE CHANGE DATA taken from 
  https://datahub.io/core/global-temp#readme

*/

let tempData = [];
let temp = [];
let year = [];
let rowIndex = 0;

console.log('Hello tom')

let barWidth = 5; //default thickness for each bar on the chart
let chartWidth;
let chartY;
let margin = 50;

let maxTemp = 0;
let minTemp = 0;

function preload() {
  tempData = loadTable("./annual-gistemp-1900.csv", "header");
}

//run once when our index.html file is first loaded
function setup() {
  createCanvas(800, 500); //width in pixels, height in pixels
  noStroke();
  colorMode(HSB);

  rowIndex = 0;
  for (let i = 0; i < tempData.getRowCount(); i += 2) {
    year[rowIndex] = tempData.getString(i, 1);
    temp[rowIndex] = tempData.getNum(i, 2);
    rowIndex++;
  }

  maxTemp = max(temp);
  minTemp = min(temp);

  chartWidth = width - margin * 2;
  barWidth = chartWidth / rowIndex;
  chartY = height/2+50;
  
  console.log(
    "Num rows: " +
      rowIndex +
      "; Max Temp: " +
      maxTemp +
      "; Min Temp: " +
      minTemp
  );
}

function draw() {
  background(245, 1, 98);
  
  drawBars();
  drawChartLabel();
  drawAxes();
}

function drawBars() {
  for (let i = 0; i < rowIndex; i++) {
    let x = width - margin - barWidth - i * barWidth;
    let y = chartY;
    let w = barWidth;
    let h = -temp[i] * 100;

    fill(128 - temp[i] * 128, 100, 100);
    rect(x, y, w, h);
  }
}

function drawChartLabel() {
  noStroke();
  textAlign(LEFT);
  fill(0, 100, 0);
  textSize(20);
  text("Global Temperature, 1880-2016", margin, margin);
  textSize(12);
  text("Deviation from 20th century average", margin, margin + 20);
}

function drawAxes() {
  stroke(0);
  //x axis
  line(margin - 10, chartY, width - margin, chartY);
  //y axis
  line(margin, chartY + 100, margin, chartY - 100);

  //labels on y axis
  textAlign(CENTER);
  noStroke();
  textSize(12);
  fill(0);
  text("+1C", margin, chartY - 110);
  text("-1C", margin, chartY + 118);

  textAlign(RIGHT);
  text("avg", margin - 15, chartY + 3);
}
