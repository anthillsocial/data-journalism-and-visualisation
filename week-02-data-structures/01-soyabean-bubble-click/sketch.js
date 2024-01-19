/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: World Soybean Production
 DATA SOURCE: Our World In Data
 LINK TO DATA: https://ourworldindata.org/explorers/global-food?tab=chart&facet=none&Food=Soybeans
 DATA HEADERS: Product,Country,Year,Land Use (ha)
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

 let dataset; //we use this to refer to our datafile

 let scaleFactor = 0.000003;
 
 let currRow = -1; //currently selected row. -1 means no row has been selected
 
 function preload(){
   //load the table into our dataset variable, specify it's a csv file, flag that it has a header row
   dataset = loadTable("soybean-2018-land-use.csv", "csv", "header");
 }
 
 function setup(){
   createCanvas(1000, 500);
 }
 
 function draw(){
   background(55);
   
   fill(245);
   textSize(24);
   text("Land Use for Soybean Production per Country, 2018", width/2 , 100);
   
   for(let row=0; row < dataset.getRowCount(); row++){
 
     let countryName = dataset.getString(row, 1); //row, col
     let landUse = dataset.getNum(row, 3); //row, col
     
     let scaledLandUse = landUse*scaleFactor;
     
     let x = 100+(row*100);
     let y = height/2;
     
     
     //draw the circles for our bubblechart, one for each country/row in the dataset
     
     let distance = dist(mouseX, mouseY, x, y);
     
     if(distance < scaledLandUse/2){
       //the mouse is hovering over the circle!
       fill(255, 225, 95); //fill yellow
       
       if(mouseIsPressed){
         currRow = row; //set currRow to the current row in our for loop -- the row that we're interacting with/hovering the mouse
       }
     }else{
       //the mouse is NOT hovering over the circle
       fill(245); //fill grey
     }
     ellipse(x, y, scaledLandUse, scaledLandUse);
     
     
     textAlign(CENTER);
     textSize(12);
     noStroke();
     text(countryName, x, y+100);
     text(landUse, x, y+115);
   }
   
   text(245);
   textSize(16);
   if(currRow > -1){
     let captionText = dataset.getString(currRow, 4);
     text(captionText, width/2, height-75);
   }
 }
 
 