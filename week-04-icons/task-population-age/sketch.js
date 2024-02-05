/*
  Title: Proportion of selected age groups of world population and in regions in 2022 
  Organisation: Population Reference Bureau
  Source: https://www.statista.com/statistics/265759/world-population-by-age-and-region/
  Headers: Region,Under 15 years,Over 65 years

  TASK: 
  - Can you generate this graphic using the data 
  in pop-age.csv ? 
  - Can you add text which describes the data? 
*/

let randomHue = 0;

let numRows = 10;
let numCols = 10;
let unitSize = 50;
let margin = 75;

function setup(){
  createCanvas(600, 700);
  
  colorMode(HSB); //HSB = HUE (0-360), SATURATION (%), BRIGHTNESS (%)
    
}

function draw(){
  background(190, 40, 30);
  
  
  let index = 0;
  
  for(let row = 0; row < numRows; row++){
    for(let col = 0; col < numCols; col++){
      
      let x = margin+(col * unitSize);
      let y = margin+(row * unitSize);
      
      fill(0, 0, 100);
      
      ellipse(x, y, unitSize-5, unitSize-5);

      
      index++;
    }
  }
  
  noStroke();
  fill(100);
  textSize(22);
  textFont("Outfit");
  text("Text", 50, height-margin);
  
}