/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: World Soybean Production
 DATA SOURCE: Our World In Data
 LINK TO DATA: https://ourworldindata.org/explorers/global-food?tab=chart&facet=none&Food=Soybeans
 DATA HEADERS: Product,Country,Year,Land Use (ha)
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

 let scale = 500000;
 let graphBaseLine = 0;
 let spacing = 100;
 
 function preload(){
   dataset = loadTable('soybean-2018-land-use.csv', 'header');
 }
 
 function setup() {
   createCanvas(1000, 500); //width in pixels, height in pixels
   
   graphBaseLine = height/2;
 }
 
 //draw is run in a loop
 function draw() {
   
   background(245);
   
   for(let row = 0; row < dataset.getRowCount(); row++){
     let area = dataset.getNum(row, 3);
     let scaledArea = area/scale;
     let country = dataset.getString(row, 1);
     
     let x = 75+row*spacing;
     let y = graphBaseLine;
     
     noStroke();
     fill(245, 105, 155);
     ellipse(x, y, scaledArea, scaledArea);
     
     fill(55);
     textSize(12);
     textAlign(CENTER);
     text(country, x+5, y+100);
     textSize(8);
     text(area, x+5, y+115);
   }
   
   textAlign(LEFT);
   textSize(24);
   text("Soybean producing countries, by Land Use (in Hectares)", 50, 75);
   
   textSize(8);
   textAlign(RIGHT);
   text("Source: Our World In Data", width-25, height-25);
 
 }
 