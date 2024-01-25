let dataset; //create variable to store our dataset

let size = 50;

function preload() {
  dataset = loadTable("climate-data.csv", "header");
}

function setup() {
  createCanvas(500, 550);

  noStroke();
  colorMode(HSB);
}

function draw() {
  background(0, 0, 95);
  textSize(10);

  for (let i = 0; i < dataset.getRowCount(); i++) {
    let temp = dataset.getNum(i, 2);
    let year = dataset.getNum(i, 1);

    //calculate x and y positions for each grid tile
    let x = (i * size) % width;
    let y = floor((i * size) / width) * size;

    fill(180 - temp * 180, 60, 90);
    rect(x, y, size, size);

    fill(0);
    text(year, x, y+5, size, size);
  }

  fill(0);
  textAlign(LEFT);
  textSize(16);
  text("Global Temperature Averages", 5, height - 30);
  textSize(10);
  text("Deviations from 20th Century Average", 5, height - 10);

  displayKey();
}

function displayKey() {
  let tempColumn = dataset.getColumn("Mean");

  let minTemp = min(tempColumn);
  let maxTemp = max(tempColumn);
  textSize(10);

  fill(180 - minTemp * 180, 60, 90);
  rect(width - 35, height - 35, 30, 30);
  textAlign(CENTER);
  fill(0, 0, 100);
  text(minTemp, width - 35, height - 25, 30, 30);

  fill(180, 60, 90);
  rect(width - 70, height - 35, 30, 30);
  textAlign(CENTER);
  fill(0, 0, 100);
  text(0, width - 70, height - 25, 30, 30);

  fill(180 - maxTemp * 180, 60, 90);
  rect(width - 105, height - 35, 30, 30);
  textAlign(CENTER);
  fill(0, 0, 100);
  text(maxTemp, width-105, height-25, 30, 30);
}
