//adapted from Mappa tutorial
//for more, see: https://mappa.js.org/docs/simple-map.html

// Options for map
const options = {
  lat: 0,  //initial latitude
  lng: 0,  //initial longitude
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
  //we create our canvas element, and store it in the variable 'canvas'
  canvas = createCanvas(640, 800);

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);
  
  /*Now we apply our canvas element as an overlay on the map
    this allows us to draw and interact with the underlying map, 
    and keeps the canvas and the map in alignment at all times!
  */
  myMap.overlay(canvas);
}
