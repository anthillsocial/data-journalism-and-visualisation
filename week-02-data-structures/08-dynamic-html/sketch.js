//1. 
//declare a variable for the paragraph
let infoParagraph;

function setup(){
  dataCanvas = createCanvas(600, 600);
  dataCanvas.parent('canvas-tag');
  
  //2. 
  // Create an HTML paragraph
  infoParagraph = createP('');
  
  //3. 
  // Insert it into 'canvas-tag'
  infoParagraph.parent('canvas-tag');
}

function mousePressed(){
  //4. 
  //update the content of the paragraph
  let currentdate = new Date(); 
  var datetime = currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
  infoParagraph.html('hello world!\n'+datetime);
}