/* * * * * * * * * * * * * * * * * * D A T A * * * * * * * * * * * * * * * * * * * * * * * *
THE DATA IN THIS SKETCH COMES
FROM THE WIKIPEDIA PAGE 'LIST OF OIL SPILLS'. SEE THE DATA:
https://en.wikipedia.org/wiki/List_of_oil_spills

TASK: 
Can you work out why the canvas is black and 
fix the map so you can view the oil spils on a map? 
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
let minSpill;
let maxSpill;

function preload() {
  dataset = loadTable("oilspill-wikidata.csv", "header");
}

function setup() {
  //we create our canvas element, and store it in the variable 'canvas'
  canvas = createCanvas(720, 720);

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);

  /*Now we apply our canvas element as an overlay on the map
    this allows us to draw and interact with the underlying map, 
    and keeps the canvas and the map in alignment at all times!
  */
  myMap.overlay(canvas);

  noStroke();

  minSpill = min(dataset.getColumn("Maximum Spill"));
  maxSpill = max(dataset.getColumn("Maximum Spill"));
  console.log(maxSpill)
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
    let spillSize = trim(dataset.getString(row, 5));
    //console.log(spillSize); 
    if (spillSize !== "unknown") {
      let datetime = dataset.getString(row, 3);
      let latlng = dataset.getString(row, 2);
      let lat = trim(split(latlng, ",")[0]);
      let lng = trim(split(latlng, ",")[1]);
      //console.log(lat);
      let pos = myMap.latLngToPixel(lat, lng);

      let dotSize = map(int(spillSize), minSpill, maxSpill, 10, 100);      

      fill(0, 205);
      ellipse(pos.x, pos.y, dotSize, dotSize);
    }
  }
  
  /*fill(0);
  textSize(35);
  textAlign(RIGHT);
  text('Oil Spill Locations', width-10, 40);
  textSize(15);
  text('Crowdsourced data gathered by Wikipedia Editors', width-10, 65);
  */
}
