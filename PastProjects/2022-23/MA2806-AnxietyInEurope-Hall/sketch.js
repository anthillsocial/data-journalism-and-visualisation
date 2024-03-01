
let mapVisualisation = function(p){//this is required for instanced mode, allowing this entire vidualisation to be in a function completely second from the second 

  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
   DATASET TITLE: Prevalence of anxiety disorders, males vs. females, 2019
   DATA SOURCE: Our World In Data
   LINK TO DATA: https://ourworldindata.org/grapher/prevalence-of-anxiety-disorders-males-vs-females?time=latest 
   DATA HEADERS: Entity,Code,Year,Prevalence Anxiety disorders Male (Percent),Prevalence Anxiety disorders Female,Population (historical estimates),
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
  let contextParagraph;//we will attach html text to this later
  let mappa = new Mappa("Leaflet"); //create new instance of mappa
  let myMap; // variable for the map
  let myCanvas; // variable to allow canvas to be parented to an html division
  let mapOptions = {
    // setting the latitude, longitude and zoom level for the starting position of the map
    lat: 53.0,
    lng: 10.0,
    zoom: 4, //these coords allow the start position to boradly cover europe
    style: "https://{s}.tile.osm.org/{z}/{x}/{y}.png",
  };
  let minPercentAnxious = 0; //setting these variables up in setup
  let maxPercentAnxious = 0;
  let dataset; //a variable to allow the dataset to be loaded in

  let rowSelected = -1;//means that no row is selected upon loading

  p.preload = function() {
    dataset = p.loadTable(
      "prevalence-of-anxiety-disorders-males-vs-females.csv",
      "header" //loads in the dataset that is in a csv file
    );
  }
  p.setup = function(){
    myCanvas = p.createCanvas(700, 700); // creating and assiging the canvas to a variable
    myCanvas.parent("visualisation1"); //parenting the canvas to a named division in html
    myMap = mappa.tileMap(mapOptions); //display the tile map based on the parameters given
    myMap.overlay(myCanvas); //display the map over the canvas
    contextParagraph = p.createP(""); //variable contains a command to create an empty paragraph
    contextParagraph.parent("context");
    minPercentAnxious = p.min(
      dataset.getColumn("Percentage of Population with Anxiety")
    ); //get the smallest value from the labelled column
    maxPercentAnxious = p.max(
      dataset.getColumn("Percentage of Population with Anxiety")
    ); //gets the largest value from the labelled column
   
  }

  p.draw = function(){
    p.clear();

    for (let row = 0; row < dataset.getRowCount(); row++) {
      //for loop that checks every row
      let latitude = dataset.getNum(row, 6); //get the latitude values for the countries from this row
      let longitude = dataset.getNum(row, 7); //get the longitude values from thee countries from this row
      let percentAnxious = dataset.getNum(row, 8); //get the total percent of people in each country that have anxiety
      let scaledPercentAnxious = p.map(//if used on an ellipse you are scaling the numbers in the dataset from smallest to biggest relative to parameters you want it to be scaled to
        percentAnxious,//get the set of numbers to organise
        minPercentAnxious,//gets the minimum of the range
        maxPercentAnxious,//gets the maximum of the range
        5,//the lowest number will be scaled to 5
        25// the biggest number will be scaled to 25
      );
      p.noStroke();

      let scaleFactor = 3; //scaling the circles so that they fit appropriately on the map
      let extraScaledPercentAnxious = scaledPercentAnxious * scaleFactor; //need to apply this scale to the already calculated accurate scale of the circles

      if (percentAnxious > 14) {
        //the top 5 most anxious were above 14 so this highlights them in pink
        p.fill(255, 153, 204, 200);
        p.stroke(204, 0, 204);
        if (rowSelected == row) {//if this circle is selected
          //apply dark colour in here
          p.fill(255, 51, 204, 200);
          p.stroke(204, 0, 204);
        }
      } else if (percentAnxious < 7) {
        //the top 5 lowest were all under 7 so this colours them blue
        p.fill(153, 255, 255, 200);
        p.stroke(0, 204, 204);
        if (rowSelected == row) {
          p.fill(0, 191, 255, 200);
        }
      } else {
        p.fill(255, 255, 102, 200); //everything else gets coloured yellow
        p.stroke(153, 153, 0);
        if (rowSelected == row) {
         p.fill(230, 230, 0, 200);

          p.stroke(153, 153, 0);
        }
      }
      let pos = myMap.latLngToPixel(latitude, longitude); //converts lat lng cooradinates to pixel points to be used in p5.js commands
      p.ellipse(pos.x, pos.y, extraScaledPercentAnxious, extraScaledPercentAnxious); //position the circles on to the map

      p.textSize(20);
      p.textFont("Shantell Sans")
      //key rectangle
      p.stroke(0);
      p.fill(255);
      p.rect(500, 10, 150, 100);
      //key title text
      p.fill(0);
      p.noStroke();
      p.textAlign(p.CENTER);
      p.text("Key", 575, 30);
      //key elements text
      p.textSize(10);
      p.text("Top 5 Most Anxious", 550, 50);
      p.text("In Between", 532, 70);
      p.text("Top 5 Least Anxious", 551, 90);
      //pink key box
      p.fill(255, 153, 204, 200);
      p.stroke(204, 0, 204);
      p.rect(605, 40, 40, 20);
      //yellow key box
      p.fill(255, 255, 102, 200);
      p.stroke(153, 153, 0);
      p.rect(605, 60, 40, 20);
      //blue key box
      p.fill(153, 255, 255, 200);
      p.stroke(0, 204, 204);
      p.rect(605, 80, 40, 20);

      //getting the circles to change colour and give info when clicked
      let distance = p.dist(p.mouseX, p.mouseY, pos.x, pos.y);//distance is how far/close the cursor is to the x y postion of the circle
      if (distance < extraScaledPercentAnxious/2) {//if distance is less than the size of the circle aka the mouse is within the circles boundaries
        if (p.mouseIsPressed) {//and if the mouse is pressed
          rowSelected = row;//row selected is given the value that matches that country in the CSV file

          
          let countryName = dataset.getString(row, 0);//grab the name of the country
          let anxietyPercent = dataset.getString(row, 8);//grab the total percent of anxiety from the dataset
          if (percentAnxious > 14) {
            let contextInfo = dataset.getString(row, 9);//if in the top 5, grab the html code in the 9th column

            contextParagraph.html(contextInfo);//put the content of column 9 into this html element
            p.fill(204, 0, 204, 200);
            p.stroke(204, 0, 204);
          } else if (percentAnxious < 7) {
            let contextInfo = dataset.getString(row, 9);//if in the bottom 5, also grab html code from 9th column

            contextParagraph.html(contextInfo);
            p.fill(0, 204, 204, 200);
            p.stroke(0, 204, 204);
          } else {
            contextParagraph.html(//if in the middle, display the name and percent of anxiety amongst this default text structure
              countryName +
                " has " +
                anxietyPercent +
                "% of the population suffering from anxiety."
            );
            p.fill(153, 153, 0, 200);
            p.stroke(153, 153, 0);
          }
       
        }
      }
    }
  }
}

let mapVis = new p5(mapVisualisation);//says that this is a seperate instance of of p5.js tot he below code


let secondVis = function(p){//the function containing all the code for the second visualisation
  let halfMan;//variables to hold the icons for the gender isotype visualisation
  let halfWoman;
  let man;
  let woman;
  let personSize = 75;//contorls the size of each icon on the visualisation
  let collision = 0;//no buttons are clicked at the start
  
  p.preload = function(){//loading the icons in
    halfMan = p.loadImage("https://cdn.glitch.global/f82fc12d-fe6f-4a1c-bac4-506e040d81e6/Half_Man%201.png?v=1679521710443")
    halfWoman = p.loadImage("https://cdn.glitch.global/f82fc12d-fe6f-4a1c-bac4-506e040d81e6/Half_Woman%201.png?v=1679531115741")
    man = p.loadImage("https://cdn.glitch.global/f82fc12d-fe6f-4a1c-bac4-506e040d81e6/Full_Man%201.png?v=1679521722115")
    woman = p.loadImage("https://cdn.glitch.global/f82fc12d-fe6f-4a1c-bac4-506e040d81e6/Full_Woman.png?v=1679521717360")
  }
  
  p.setup = function(){
    let cnv = p.createCanvas(700, 700);
    p.background(155);
    cnv.parent("visualisation2");//parents it to the div of the same name so it is embedded in it
   
  }
  
  p.draw = function(){
    //Base
    p.background(255,204,230);
    p.stroke(255)
    p.strokeWeight(3)
     p.line(350,0,350,500)
    p.line(0,500,700,500)
    //Key
    p.fill(255)
    p.rectMode(p.CORNER)
    p.rect(20,550,200,125)
    p.textAlign(p.CENTER)
    p.noStroke()
    p.fill(0)
    p.textSize(16)
    p.text("Key",120,570)
    p.image(man,20,570,50,50)
    p.image(woman,170,600,50,50)
    p.textSize(11)
    p.text("= 1% of the country's men",130,590)
    p.text("1% of the country's women =",100,635)
     p.text("Half images represent 0.5%",120,660)
    
    p.textFont("Shantell Sans")
    
    
    //Poland
    //Men
    p.image(man,250,50,personSize,personSize)
    p.image(man,225,50,personSize,personSize)
    p.image(halfMan,200,50,personSize,personSize)
    
    //Women
     p.image(woman,380,50,personSize,personSize)
     p.image(woman,405,50,personSize,personSize)
     p.image(woman,430,50,personSize,personSize)
     p.image(woman,455,50,personSize,personSize)
    
    //Button
    p.fill(255, 153, 204)
   
    let polandX =30
    let polandY=60
    let polandW= 100
    let polandH=50
    
    p.rect(polandX,polandY,polandW,polandH)
   p.textAlign(p.CORNER)
    p.fill(255)
    p.textSize(20)
       p.text("Poland",80,90)
    if((p.mouseX>polandX)&&(p.mouseX<polandX + polandW)&&(p.mouseY>polandY)&&(p.mouseY<polandY +polandH)){//collision detection for the mouse hitting the rectangle
      if(p.mouseIsPressed){
        collision=1//when clicked display the corresponding text 
        
      }
    }
   
    
    //Czech Republic
    //Men
    p.image(man,250,150,personSize,personSize)
    p.image(man,225,150,personSize,personSize)
    p.image(halfMan,200,150,personSize,personSize)
    
     //Women
     p.image(woman,380,150,personSize,personSize)
      p.image(woman,405,150,personSize,personSize)
      p.image(woman,430,150,personSize,personSize)
      p.image(woman,455,150,personSize,personSize)
      p.image(halfWoman,480,150,personSize,personSize)
    
    //Button
    p.fill(255, 153, 204)
    let czechX =5
    let czechY=160
    let czechW= 150
    let czechH=50
    p.rect(czechX,czechY,czechW,czechH)
     p.fill(255)
           p.text("Czech Republic",80,190)
     if((p.mouseX>czechX)&&(p.mouseX<czechX + polandW)&&(p.mouseY>czechY)&&(p.mouseY<czechY +czechH)){
      if(p.mouseIsPressed){
        collision=2
        
      }
    }
    
    
    //Norway
    //Men
    p.image(man,250,250,personSize,personSize)
     p.image(man,225,250,personSize,personSize)
     p.image(man,200,250,personSize,personSize)
     p.image(man,175,250,personSize,personSize)
     p.image(man,150,250,personSize,personSize)
     p.image(halfMan,125,250,personSize,personSize)
    
     //Women
     p.image(woman,380,250,personSize,personSize)
     p.image(woman,405,250,personSize,personSize)
     p.image(woman,430,250,personSize,personSize)
     p.image(woman,455,250,personSize,personSize)
     p.image(woman,480,250,personSize,personSize)
     p.image(woman,505,250,personSize,personSize)
     p.image(woman,530,250,personSize,personSize)
     p.image(woman,555,250,personSize,personSize)
     p.image(woman,580,250,personSize,personSize)
    
    //Button
    p.fill(255, 153, 204)
    let norwayX =30
    let norwayY=260
    let norwayW= 100
    let norwayH=50
    p.rect(norwayX,norwayY,norwayW, norwayH)
     p.fill(255)
           p.text("Norway",80,290)
    if((p.mouseX>norwayX)&&(p.mouseX<norwayX + norwayW)&&(p.mouseY>norwayY)&&(p.mouseY<norwayY +norwayH)){
      if(p.mouseIsPressed){
        collision=3
        
      }
    }
  
  
    //Portugal
    //Men
    p.image(man,250,350,personSize,personSize)
     p.image(man,225,350,personSize,personSize)
     p.image(man,200,350,personSize,personSize)
     p.image(man,175,350,personSize,personSize)
     p.image(man,150,350,personSize,personSize)
     p.image(man,125,350,personSize,personSize)
     p.image(halfMan,100,350,personSize,personSize)
    
     //Women
     p.image(woman,380,350,personSize,personSize)
    p.image(woman,405,350,personSize,personSize)
    p.image(woman,430,350,personSize,personSize)
    p.image(woman,455,350,personSize,personSize)
    p.image(woman,480,350,personSize,personSize)
    p.image(woman,505,350,personSize,personSize)
    p.image(woman,530,350,personSize,personSize)
    p.image(woman,555,350,personSize,personSize)
    p.image(woman,580,350,personSize,personSize)
    p.image(woman,605,350,personSize,personSize)
    p.image(woman,630,350,personSize,personSize)
    
    //Button
    p.fill(255, 153, 204)
    let portugalX =30
    let portugalY=360
    let portugalW= 100
    let portugalH=50
    p.rect(portugalX,portugalY,portugalW,portugalH)
     p.fill(255)
           p.text("Portugal",80,390)
     if((p.mouseX>portugalX)&&(p.mouseX<portugalX + portugalW)&&(p.mouseY>portugalY)&&(p.mouseY<portugalY +portugalH)){
      if(p.mouseIsPressed){
        collision=4
        
      }
    }
    
    //Button Text Box
    
    if (collision == 1){
      p.fill(255, 153, 204)
    p.rect(300,525,350,150)
    p.fill(255)
    p.textSize(30)
       p.text("Poland",475,560)
      p.textSize(15)
      p.text("Poland has the least amount of anxious men in their country compared to the rest of Europe at 2.45%. The percentage of Polish women with anxiety is higher at 4.19%",475,575,300,525)
    }
    if (collision == 2){
      p.fill(255, 153, 204)
    p.rect(300,525,350,150)
    p.fill(255)
    p.textSize(30)
       p.text("Czech Republic",475,560)
       p.textSize(15)
      p.text("The Czech Republic has the second least amount of anxious men in their country compared to the rest of Europe at 2.49%. The percentage of Czech women with anxiety is higher at 4.29%",475,575,300,525)
    }
    if (collision == 3){
      p.fill(255, 153, 204)
    p.rect(300,525,350,150)
    p.fill(255)
    p.textSize(30)
       p.text("Norway",475,560)
      p.textSize(15)
      p.text("Norway has the second most amount of anxious men in their country compared to the rest of Europe at 5.71%. The percentage of Norwegian women with anxiety is higher at 8.88%",475,575,300,525)
    }
    if(collision == 4){
      p.fill(255, 153, 204)
    p.rect(300,525,350,150)
    p.fill(255)
    p.textSize(30)
        p.text("Portugal",475,560)
       p.textSize(15)
      p.text("Portugal has the most amount of anxious men in their country compared to the rest of Europe at 6.49%. The percentage of Portuguese women with anxiety is higher at 10.86%",475,575,300,525)
    }
    
    
  }
  
}

let vis2 = new p5(secondVis);//sets this as the second instance of p5.js