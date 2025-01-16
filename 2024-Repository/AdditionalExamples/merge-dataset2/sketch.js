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
let myMap;
let canvas;

let dataset;
let deathTable;
let msoaTable; 

let minMag;
let maxMag;

// https://p5js.org/reference/#/p5.Table/findRow

function preload() {
    deathTable = loadTable('A2.COVIDDeaths2020.csv', 'csv', 'header');
    msoaTable = loadTable('B.MSOAs2011.csv', 'csv', 'header');
    //dataset = loadTable("earthquakes1970-2014.csv", "header");
}

function setup() {
  // Create our canvas & map elements, and store it in the variable 'canvas'
  canvas = createCanvas(500, 500);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  noStroke();
}

function draw() {
  // Clear the pixel buffer - this works like 'background()'
  clear();
  // Loop through the death data 
  // Only grabs 50 data points as VERY slow with whole dataset 
  for (let row = 0; row < deathTable.getRowCount(); row++) {
  //for (let row = 0; row < 50; row++) {
    let myrow = deathTable.getRow(row);
    let name = deathTable.getString(row, 'ONS geography MSOA name');
    let code = deathTable.getString(row, 'MSOA code');
    let may = deathTable.getString(row, 'May');
    let loc = findLatLon(code); 
    if(loc!=null){
      //print(name, loc.lat, loc.lon, may); 
      let pos = myMap.latLngToPixel(loc.lat, loc.lon);
      let size = 10;
      addWord(myrow[1]); 
      //ellipse(pos.x, pos.y, size, size);
      //text(may, pos.x, pos.y);
    }
  }
   
}

// Find lat/lon/name of a MSOA code reference in B.MSOAs2011.csv
function findLatLon(code){
  let row = msoaTable.findRow(code, 'Code');
  if(row===null){
    //print('Not found:'+code);
    return null;
  }
  return {
    'name':row.getString('Name'),
    'lat':row.getNum('Latitude'),
    'lon':row.getNum('Longitude')
  }
}


/* Function to add text to HTML element*/
function addWord(row){
  let div = document.getElementById('csvOutput');
  div.innerHTML += row+'\n';
}
