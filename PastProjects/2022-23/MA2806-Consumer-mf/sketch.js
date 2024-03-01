let barSketch = function(p){

  let dataset; //CSV FILE
  let scaleFactor = 22;
  let volumeScaleFactor = 1.5;
  let margin = 50;
  let graphBaseline; //Bottom of graph
  let selectedVolume = "";
  let w = 500;
  let h = 500;

   p.preload = function(){
    dataset = p.loadTable("consumer-behaviour.csv", "header");
  }

  p.setup = function(){
    let canvas = p.createCanvas(w,h);
    canvas.parent("barchart-container");
    canvas.position((p.windowWidth - p.width) /2, (p.windowHeight - p.height) /1+2500);

    graphBaseline = p.height-100;

  }

  p.draw = function(){
    p.background(255,255,255);
    p.noStroke();
    p.fill(0);
    p.textSize(11);
    p.text("PERCENTAGE: "+ selectedVolume+ "%", 380, 45);
    p.noStroke();
    p.textSize(11);
    p.text('UK consumers who prefer to buy from sustainable clothing brands in 2020 by age and gender', 30, 20);
    p.textSize(13);
    p.text('MALE', 100, 450);
    p.textSize(13);
    p.text('FEMALE', 240, 450);

    for(let row=0; row<dataset.getRowCount(); row++){


      //PERCENTAGE ON Y AXIS
      let percentage = dataset.getNum(row, 2);
      let scaledPercentage = percentage*scaleFactor;
      
      //VALUE FOR LOLLIPOP
      let volume = dataset.getNum(row, 2);
      let scaledVolume = volume*volumeScaleFactor;

      //AGE RANGE ON X AXIS
      let ageRange = dataset.getString(row, 0);


      let x = margin+(row*30);
      let y = graphBaseline;

      p.noStroke();
      p.fill(0);
      p.textSize(10);
      p.push();
      p.translate(x, y+15);
      p.rotate(p.radians(90));
      p.text(ageRange, 0, 0);
      p.pop();
      
      
    

      p.stroke(0);
      p.line(x,y,x, y-scaledPercentage);
      
      let distance = p.dist(p.mouseX, p.mouseY, x, y-scaledPercentage);
      if (distance < scaledVolume/2){
        p.fill(50,205,50);
        p.stroke(50,205,50);
        selectedVolume = volume;
        
      }
      
      p.ellipse(x,  y-scaledPercentage, scaledVolume, scaledVolume);
      
    }
  }
}

let barchart = new p5(barSketch);


let clothesSketch = function (p) {
  let clothes;
  let interval = 25; //milliseconds
  let prevMillis = 0;
  let clothesSize = 20;
  let clothesImage;
  let ground;
//   Make a list of the clothes image urls
  var imageURLs = ["https://cdn.glitch.global/d956ac17-2928-4aa7-8b36-eb7ead7dbb54/shoeasset.png?v=1679146490484",
                  "https://cdn.glitch.global/d956ac17-2928-4aa7-8b36-eb7ead7dbb54/croptopasset.png?v=1679147138975",
                   "https://cdn.glitch.global/d956ac17-2928-4aa7-8b36-eb7ead7dbb54/jeansasset.png?v=1679147145188",
                   "https://cdn.glitch.global/d956ac17-2928-4aa7-8b36-eb7ead7dbb54/redtopasset.png?v=1679147148482",
                   "https://cdn.glitch.global/d956ac17-2928-4aa7-8b36-eb7ead7dbb54/skirtasset.png?v=1679147155694",
                   "https://cdn.glitch.global/d956ac17-2928-4aa7-8b36-eb7ead7dbb54/topasset.png?v=1679147173716",
                   "https://cdn.glitch.global/d956ac17-2928-4aa7-8b36-eb7ead7dbb54/lilactop.png?v=1679302570387",
                   "https://cdn.glitch.global/d956ac17-2928-4aa7-8b36-eb7ead7dbb54/orangetop.png?v=1679302575114"
                  ];
  

  let limit = 1000; //the amount of objects to spawn

  p.setup = function() {
    let cnv = p.createCanvas(800, 500);
    p.world.gravity.y = 10;
    cnv.parent("canvas-container");
    cnv.position((p.windowWidth - p.width) /2, (p.windowHeight - p.height) /1+1550);

    ground = new p.Sprite();
    ground.y = p.height - 10;
    ground.x = p.width / 2;
    ground.w = p.width;
    ground.h = 5;
    ground.shapeColor = "black";
    ground.collider = "static";

    let rightWall = new p.Sprite();
    rightWall.x = p.width - 10;
    rightWall.y = p.height / 2;
    rightWall.h = p.height;
    rightWall.w = 5;
    rightWall.shapeColor = "black";
    rightWall.collider = "static";

    let leftWall = new p.Sprite();
    leftWall.x = 10;
    leftWall.y = p.height / 2;
    leftWall.h = p.height;
    leftWall.w = 5;
    leftWall.shapeColor = "black";
    leftWall.collider = "static";
  }

  p.draw = function() {
    p.background(255,255,255);

    if (limit > 0 && p.millis() > prevMillis + interval) {
      prevMillis = p.millis();
      p.generate();
    }
  }

  p.generate = function() {
//     pick a random url from the list above using Math.random
    let randomImage = imageURLs[Math.floor(Math.random() * imageURLs.length)];
//     Load the random image
    clothesImage = p.loadImage(randomImage);
    clothes = new p.Sprite();
//     Add the image to the sprite
    clothes.addImage("Clothes", clothesImage);
    clothes.diameter = clothesSize;
    clothes.y = 0;
    clothes.x = p.width / 2;
    limit--;
  }
};
let clothesDrop = new p5(clothesSketch);

