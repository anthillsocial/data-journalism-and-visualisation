/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: World Soybean Production
 DATA SOURCE: Our World In Data
 LINK TO DATA: https://ourworldindata.org/explorers/global-food?tab=chart&facet=none&Food=Soybeans
 DATA HEADERS: Product,Country,Year,Population,Production (t),Food (t),Animal feed (t)
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

 let dataset;
 let margin = 200;
 
 let scale = 25000;
 let spacing = 100;
 
 let maxVal;
 let minVal;
 
 let graphBaseLine;
 
 function preload(){
   dataset = loadTable("soybeans-data.csv", "header");
 }
 
 function setup(){
   createCanvas(725, 625);
   
   minVal = min(dataset.getColumn("Food (t)"));
   maxVal = max(dataset.getColumn("Animal feed (t)"));
   console.log("Min: "+minVal);
   console.log("Max: "+maxVal);
   
   graphBaseLine = height-margin/2;
 
 }
 
 function draw(){
   background(245);
   
   for(let row=0; row<dataset.getRowCount(); row++){
     let countryName = dataset.getString(row, 1);
     let productionVal = dataset.getNum(row, 4) / scale;
     let food = dataset.getNum(row, 5) / scale;
     let animalFeed = dataset.getNum(row, 6) / scale;
     
     let x = margin+row*spacing;
     let y = graphBaseLine;
 
     
     //LABEL
     fill(55);
     noStroke();
     textSize(10);
     textAlign(CENTER);
     text(countryName, x, y+20);
     
     //BARS
     fill(255, 105, 155);
     rect(x-spacing/4, y, spacing/4, -food);
    
     fill(105, 155, 255);
     rect(x, y, spacing/4, -animalFeed);
   }
   
   
   fill(55);
   noStroke();
   rect(0, 0, width, 120);
   fill(245);
   textSize(18);
   textAlign(LEFT);
   text("Soybean allocation per country, in millions of tonnes (2018)", margin/8, 50);
   
   textSize(12);
   fill(255, 105, 155);
   text("Human consumption", margin/8, 75);
   
   fill(105, 155, 255);
   text("Animal Feed", margin/8, 90)
   
   displayAxis(margin/2, graphBaseLine, 0, maxVal, scale, 1000000);
   
   textAlign(RIGHT);
   text("Source: Our World In Data", width-margin/8, height-margin/8);
 }
 
 function displayAxis(x, y, mini, maxi, scale, interval){
   
   
   let lineHeight = (maxi-mini) / scale;
   let increment =  interval/scale;
   stroke(55);
   line(x, y, x, y-lineHeight);
   line(x, y, width-margin/2, y);
   
   textAlign(RIGHT);
   for(let yt=0; yt <= lineHeight; yt+=increment){
     stroke(55);
     line(x, y-yt, x-5, y-yt);
     noStroke();
     fill(55);
     text((yt*scale)/interval, x-10, y-yt);
   }
   
   
 }