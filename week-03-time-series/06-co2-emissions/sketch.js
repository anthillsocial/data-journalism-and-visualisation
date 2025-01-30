/*
  DATA: Co2 Emissions 1751-2010
  HEADERS: Year,Total,Gas Fuel,Liquid Fuel,Solid Fuel,Cement,Gas Flaring,Per Capita
*/

let dataset;

let maxEmissions = 0;
let minEmissions = 0;

let range = 0;
let yScale = 1;

let datapointWidth = 5; //default distance between each datapoint on the chart
let chartWidth;
let baseline;
let margin = 50;

function preload() {
  dataset = loadTable("./global-co2.csv", "header");
}

//run once when our index.html file is first loaded
function setup() {
  createCanvas(800, 500); //width in pixels, height in pixels
  noStroke();
  colorMode(HSB);

  maxEmissions = max(dataset.getColumn("Total"));
  minEmissions = min(dataset.getColumn("Total"));

  range = maxEmissions - minEmissions;
  yScale = height / 2 / range;

  chartWidth = width - margin * 2;
  datapointWidth = chartWidth / dataset.getRowCount();
  baseline = height - 100;

  console.log("Num rows: " + dataset.getRowCount() + "; Range: " + range);
}

function draw() {
  background(0, 0, 15);

  drawChartLabel();
  drawAxes();

  drawChart();

  noLoop();
}

function drawChart() {
  for (let i = 0; i < dataset.getRowCount(); i++) {
    let x = margin + i * datapointWidth;
    let y1 = dataset.getNum(i, 1) * yScale;
    let y2 = dataset.getNum(i, 5) * yScale;

    noStroke();
    fill(255, 50, 100); //total
    rect(x, baseline, datapointWidth, -y1);
    fill(190, 50, 100); //cement
    rect(x, baseline, datapointWidth, -y2);
  }
}

function drawChartLabel() {
  noStroke();

  stroke(0, 0, 15);
  noFill();
  rect(margin - 5, margin - 25, 320, 75);

  noStroke();
  textAlign(LEFT);
  textSize(20);
  fill(245, 1, 98);
  text("Global Co2 emissions, 1751-2010", margin, margin);
  textSize(12);
  fill(255, 50, 100); //total

  text("Total in millions of metric tonnes", margin, margin + 20);
  fill(190, 50, 100); //cement
  text("Co2 produced during cement production", margin, margin + 40);
}

function drawAxes() {
  strokeWeight(1);
  stroke(245, 1, 98);
  textAlign(CENTER);
  line(margin, baseline, width - margin, baseline);
  fill(245, 1, 98);
  for (let i = 0; i < dataset.getRowCount(); i += 50) {
    stroke(245, 1, 98);
    line(
      margin + i * datapointWidth,
      baseline,
      margin + i * datapointWidth,
      baseline + 10
    );
    noStroke();
    text(dataset.getNum(i, 0), margin + i * datapointWidth, baseline + 23);
  }

  let max = maxEmissions * yScale;
  console.log(max);
  stroke(245, 1, 98);
  textAlign(LEFT);
  line(width - margin, baseline, width - margin, baseline - max);
  for (let j = 0; j < max; j += 50) {
    stroke(245, 1, 98);
    line(width - margin, baseline - j, width - margin + 5, baseline - j);
    noStroke();
    fill(245, 1, 98);
    text(round(j / yScale), width - margin + 10, baseline - j + 4);
  }
}
