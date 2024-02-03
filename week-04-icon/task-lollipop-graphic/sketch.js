/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: What the data is about?
 DATA SOURCE: what organisation/person collected the data?
 LINK TO DATA: where did you get the data from?
 HEADERS: what are the headers of the dataset?
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 
 TASK:  
  1. Can you source and load alternative data? 
  2. Can you add graphics to the lollipops? 

  */

 let scale = 3;

 let dataset;
 
 function preload(){
   dataset = loadTable("parties.csv", "header");
 }
 
 //run once when our index.html file is first loaded
 function setup() {
   createCanvas(1200, 500); //width in pixels, height in pixels
 }
 
 //draw is run in a loop
 function draw() {
   
   background(245);
   
   stroke(55);
   line(0, height-100, width, height-100);
   for(let row=0; row<dataset.getRowCount(); row++){
     let dayIndex = dataset.getNum(row, 1);
     let date = dataset.getString(row, 0);
     let y = height-100;
     let h = y-100;
     let x = dayIndex * scale;
     
     stroke(55);
     noFill();
     line(x, y, x, h);
     fill(245);
     ellipse(x, h, 10, 10);
   }
 
 }
 