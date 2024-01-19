/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE:   Civilian Deaths in Afghanistan (Jun - Dec 2021)
 DATA SOURCE:     Action on Armed Violence
 LINK TO DATA:    http://www.explosiveviolencedata.com/filters
 HEADERS:         Month Index,Month,Civilians Killed,Description
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

 let dataset;

 let barWidth = 75;
 let margin = 30;
 let scaling = 2;
 
 let infoParagraph;
 let infoHeader;
 
 function preload() {
   dataset = loadTable("civ-deaths_afghanistan_2021-6-12.csv", "header");
 }
 
 //run once when our index.html file is first loaded
 function setup() {
   let visualisation = createCanvas(560, 600); //width in pixels, height in pixels
   visualisation.parent("canvas-tag"); // See index.html
 
   infoHeader = createP("Click chart to display further information");
   infoHeader.parent("context-tag");
   infoHeader.class("date");
 
   infoParagraph = createP();
   infoParagraph.parent("context-tag"); // See index.html
 }
 
 //draw is run in a loop
 function draw() {
   background(55);
   fill(245);
   textSize(18);
   textAlign(LEFT);
   //text("Civilian Deaths by Month, Jun-Dec 2021", 25, 45);
   cursor(ARROW);
   noStroke();
 
   for (let row = 0; row < dataset.getRowCount(); row++) {
     let abbrDate = dataset.getString(row, 0);
     let infoDate = dataset.getString(row, 1);
     let civDeaths = dataset.getNum(row, 2);
 
     let barX = row * (barWidth + 5);
     let barY = height - 100;
     let barHeight = civDeaths * scaling;
 
     if (
       mouseX > barX &&
       mouseX < barX + barWidth &&
       mouseY > barY - barHeight &&
       mouseY < barY
     ) {
       fill("#ffe100");
       cursor("pointer");
       if (mouseIsPressed) {
         let infoText = dataset.getString(row, 3);
         infoHeader.html(infoDate);
         infoParagraph.html(infoText);
       }
     } else {
       fill(245);
     }
 
     rect(barX, barY, barWidth, -barHeight);
 
     textSize(16);
     textAlign(CENTER);
     text(abbrDate, barX + barWidth / 2, barY + 25);
     fill("#ffe100");
     textSize(20);
     text(civDeaths, barX + barWidth / 2, barY - barHeight - 10);
   }
 }
 