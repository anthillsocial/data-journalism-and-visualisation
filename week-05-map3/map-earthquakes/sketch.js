/* * * * * * * * * * * * * * * * * * D A T A * * * * * * * * * * * * * * * * * * * * * * * *

 THE DATA IN THIS SKETCH COMES
 FROM THE UN'S HUMANITARIAN
 DATA EXCHANGE. SEE THE DATA:
 https://data.humdata.org/dataset/catalog-of-earthquakes1970-2014/resource/10ac8776-5141-494b-b3cd-bf7764b2f964

* * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Options for map
const options = {
  lat: 0, //initial latitude
  lng: 0, //initial longitude
  zoom: 3, //initial zoom level
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png" //where we are getting our map tiles from
};

// Create an instance of Leaflet
const mappa = new Mappa("Leaflet");
//we use myMap to refer to the world map displayed on our canvas
let myMap;
//we need to treat our canvas a bit differently than usual when working with maps
let canvas;

let dataset;
let minMag;
let maxMag;

function preload() {
  dataset = loadTable("earthquakes1970-2014.csv", "header");
}

function setup() {
  //we create our canvas element, and store it in the variable 'canvas'
  canvas = createCanvas(1280, 720);

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);

  /*Now we apply our canvas element as an overlay on the map
    this allows us to draw and interact with the underlying map, 
    and keeps the canvas and the map in alignment at all times!
  */
  myMap.overlay(canvas);

  noStroke();

  minMag = min(dataset.getColumn("Magnitude"));
  maxMag = max(dataset.getColumn("Magnitude"));
}

function draw() {
  //clear the pixel buffer - this works like 'background()', refreshing the canvas every frame
  clear();

  let hoverRow = -1;
  let hoverPos;
  let hoverMag;
  let hoverMagSize;
  let hoverMagColor;
  let hoverDate;

  for (let row = 0; row < dataset.getRowCount(); row++) {
    let datetime = dataset.getString(row, 0);
    let date = split(datetime, " ")[0];
    let lat = dataset.getNum(row, 1);
    let lng = dataset.getNum(row, 2);
    let mag = dataset.getNum(row, 4);

    let pos = myMap.latLngToPixel(lat, lng);

    let magColor = map(mag, minMag, maxMag, 0, 255);
    let magSize = map(mag, minMag, maxMag, 5, 20);

    stroke(magColor, 0, 255 - magColor, 200);
    fill(magColor, 0, 255 - magColor, 55);

    let distance = dist(mouseX, mouseY, pos.x, pos.y);
  

    if (distance < magSize) {
      hoverRow = row;
      fill(magColor, 0, 255 - magColor);
      hoverPos = pos;
      hoverMag = mag;
      hoverMagColor = magColor;
      hoverMagSize = magSize;
      hoverDate = date;
    }

    ellipse(pos.x, pos.y, magSize, magSize);
  }

  if (hoverRow > -1) {
    textAlign(CENTER);
    noStroke();
    fill(hoverMagColor, 0, 255-hoverMagColor);
    text(hoverDate + ", " + hoverMag, hoverPos.x, hoverPos.y - hoverMagSize);
  }

  fill(0);
  noStroke();
  textAlign(RIGHT);
  textSize(25);
  text("Major Earthquakes since 1970", width - 20, 40);
  textSize(12);
  text(
    "Visualising " +
      dataset.getRowCount() +
      " earthquakes between " +
      minMag +
      " and " +
      maxMag +
      " on the Richter Scale",
    width - 20,
    60
  );
}
