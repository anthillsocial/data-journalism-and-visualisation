let img; // Declare variable 'img'.

function setup() {
  createCanvas(720, 400);
  img = loadImage('myimage.png'); // Load image
}

function draw() {
  // Display image at actual size at x/y (0,0)
  image(img, 0, 0);
  // Displays half size image at x/y (0, 100)
  image(img, 0, 100, img.width/2, img.height/2);
}