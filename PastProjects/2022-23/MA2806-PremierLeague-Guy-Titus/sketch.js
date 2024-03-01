/* * * * * * * * * * * * * * * * * * D A T A * * * * * * * * * * * * * * * * * * * * * * * *

 THE DATA IN THIS SKETCH COMES
 FROM THE WIKIPEDIA PAGE 'LIST OF OIL SPILLS'. SEE THE DATA:
 https://en.wikipedia.org/wiki/List_of_oil_spills
* * * * * * * * * * * * * * * * * * ** * * * * * * * * * * * * * * * * * * * * * * * * * * */

// Options for map
const options = {
  lat: 0, //initial latitude
  lng: 0, //initial longitude
  zoom: 3, //initial zoom level
  style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png", //where we are getting our map tiles from
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

let contextParagraph;
let currRow = -1;

function preload() {
  dataset = loadTable("premierleague-teams.csv", "header");
  console.log(dataset);
}

function setup() {
  //we create our canvas element, and store it in the variable 'canvas'
  canvas = createCanvas(1280, 720);
  canvas.parent("canvas-container");

  // Create a tile map and overlay the canvas on top.
  myMap = mappa.tileMap(options);

  /*Now we apply our canvas element as an overlay on the map
    this allows us to draw and interact with the underlying map, 
    and keeps the canvas and the map in alignment at all times!
  */
  myMap.overlay(canvas);

  contextParagraph = createP(""); //create an empty HTML paragraph
}

function draw() {
  //clear the pixel buffer - this works like 'background()', refreshing the canvas every frame
  clear();
  for (let row = 0; row < dataset.getRowCount(); row++) {
    //Oligarch,Hometown,Hometown_LatLng,Stadium,Club,Stadium_LatLng, Stadium_Address
    let oligarchName = dataset.getString(row, 0);
    let oligarchHometown = dataset.getString(row, 1);
    let stadium = dataset.getString(row, 4);
    let club = dataset.getString(row, 5);
    let r = dataset.getRow(row);
    console.log(r);
    let clubColour = dataset.getString(row, 7);
    //let stadiumAddress = dataset.getString(row, 7);
    
    
    let oligarchLatLng = getLatLng(dataset.getString(row, 2));

    let oligarchPos = myMap.latLngToPixel(oligarchLatLng.lat, oligarchLatLng.lng);
    let stadiumLatLng = getLatLng(dataset.getString(row, 5));

    let stadiumPos = myMap.latLngToPixel(stadiumLatLng.lat, stadiumLatLng.lng);
    

    stroke(0);

    //measure distance between each spill position and the mouse cursor
    let distanceToOligarch = dist(mouseX, mouseY, oligarchPos.x, oligarchPos.y);
    if (distanceToOligarch < 8) {
      fill(clubColour);
      stroke(clubColour);
      
      if(mouseIsPressed){
         currRow = row;
      }    
    
    } else {
      fill(0);
    }

    ellipse(oligarchPos.x, oligarchPos.y, 20, 20);
    ellipse(stadiumPos.x, stadiumPos.y, 20, 20);

    line(oligarchPos.x, oligarchPos.y, stadiumPos.x, stadiumPos.y);


    
  }
  
  if(currRow > -1){
    //noStroke();
    //fill(0);
    //textAlign(CENTER);
    let selectedOligarch = dataset.getString(currRow, 0);
    //text(selectedOligarch, width/2, height/2);
    contextParagraph.html(selectedOligarch);
  }
}

function getLatLng(latlngData){
    let splitLatLng = split(latlngData, ", ");
    let latitude = splitLatLng[0]; //get the 'first part' of the data
    let longitude = splitLatLng[1]; //get the second
  
    return {lat: latitude, lng: longitude};
}
