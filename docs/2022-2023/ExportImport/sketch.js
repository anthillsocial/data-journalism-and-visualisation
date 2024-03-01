let mappa = new Mappa("Leaflet");

let myMap;
let myCanvas;

let mapOptions = {
  lat: 40.741895,
  lng: -73.989308,
  zoom: 4,
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

let dataset;

function preload() {
  dataset = loadTable("us-exports.csv", "header");
}

function setup() {
  myCanvas = createCanvas(500, 500);

  myMap = mappa.tileMap(mapOptions);

  myMap.overlay(myCanvas);
  
}

function draw(){
  clear();
  
  for(let row=0; row<dataset.getRowCount(); row++){
    let latitude = dataset.getNum(row, 2);
    let longitude = dataset.getNum(row, 3);
    
  fill(90);
  let pos = myMap.latLngToPixel(latitude, longitude);
  console.log(pos);
  ellipse(pos.x, pos.y, 5, 5);
  }
}