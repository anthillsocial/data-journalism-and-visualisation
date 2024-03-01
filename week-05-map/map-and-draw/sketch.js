//adapted from Mappa tutorial
//for more, see: https://mappa.js.org/docs/simple-map.html

// Options for map
const options = {
  lat: 51.425222,  //initial latitude
  lng: -0.563167,  //initial longitude
  zoom: 3, //initial zoom level
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png' //where we are getting our map tiles from
}

// Create an instance of Leaflet
const mappa = new Mappa('Leaflet');

//we use myMap to refer to the world map displayed on our canvas
let myMap;

//we need to treat our canvas a bit differently than usual when working with maps
let canvas;

function setup() {
  // Create our canvas element, and store its reference 
  canvas = createCanvas(640, 800);
  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas); // overlay the canvas on the map
}

function draw(){
  //clear the pixel buffer - this works like 'background()', refreshing the canvas every frame
  clear();

  //this takes a lat/long coordinate, and conveniently gives us back a 'pos' object
  //the pos object has an 'x' and 'y' property, giving us the relative point on our canvas
  let pos = myMap.latLngToPixel(51.425222, -0.563167);
  
  fill(0);
  ellipse(pos.x, pos.y, 5, 5); //draw an ellipse at the desired coordinate
  textSize(20);
  text('Royal Holloway!', pos.x, pos.y-5) //a label with slight y-offset 
}
