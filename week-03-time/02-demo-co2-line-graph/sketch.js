/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: What the data is about?
 DATA SOURCE: what organisation/person collected the data?
 LINK TO DATA: where did you get the data from?
 HEADERS: what are the headers of the dataset?
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 
 TASK:  
  1. Can you add text to the lollipops grabbed from the 'context' column? 
     See https://p5js.org/reference/#/p5/text
     Also take alook at "let date =" below as this may give you
     ideas for accessing data. 
  2. Can you fill in DATASET TITLE etc. at the top of this page? 
  3. Can you change the size of the circle based on the number of attendees? 
  4. Can you change the height of the line based on the number of attendees? 
  5. Can you source and load alternative data? 
  6. Can you add an X axis index?
     You could merge ideas from the line graph example 
  */

     let scale = 2.5;
     let dataset;
     
     function preload(){
       dataset = loadTable("parties.csv", "header");
     }
     
     //run once when our index.html file is first loaded
     function setup() {
       createCanvas(700, 500); //width in pixels, height in pixels
     }
     
     //draw is run in a loop
     function draw() {
       
       // Set the background color 
       background(245);
       
       // Set the colour of all lines
       stroke(55);
    
       // Create the base line 
       let y = height-100; 
       line(0, y, width, height-100);
    
       // Loop through the CSV content
       for(let row=0; row<dataset.getRowCount(); row++){
         // Grab data from the CSV file 
         let dayIndex = dataset.getNum(row, 1);
         let date = dataset.getString(row, 0);
         // Calculate line position and size
         let h = y-100; // Height of the line      
         let x = dayIndex*scale; // Location along the line
         // Draw the line and circle 
         line(x, y, x, h);
         fill(215);
         ellipse(x, h, 10, 10);
       }
     
     }
     