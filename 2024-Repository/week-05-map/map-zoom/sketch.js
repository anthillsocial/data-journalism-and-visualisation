// Options for map
const options = {
  lat: 0,
  lng: 0,
  zoom: 4,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
}

// Create an instance of Leaflet
const mappa = new Mappa('Leaflet');
let myMap;

let canvas;
let meteorites;

function setup() {
  canvas = createCanvas(640, 580).parent('canvasContainer');

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);


  fill(70, 203,31); 
  stroke(100);
}

// The draw loop is fully functional but we are not using it for now.
function draw() {}

