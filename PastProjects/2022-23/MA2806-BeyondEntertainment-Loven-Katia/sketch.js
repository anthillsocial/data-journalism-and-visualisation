/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 DATASET TITLE: what is the data about?
 DATA SOURCE: what organisation/person collected the data?
 LINK TO DATA: where did you get the data from?
 HEADERS: what are the headers of the dataset?
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// data journalism and visualisation (group project)
let stars = [];
let selected;
// variables
let distCN;

let ChinaScene = 0;
let x; // starting x position for bars
let barWidth; // width of each bar

let dataset; // refers to data file
let datasetA;
let datasetB;
let datasetC;
let datasetD;

let scaleFactor = 1.65; // increase the size of the circles slightly

let angle = 0;
// these icons are 14 X 34
let scene = 0;
let femaleIconX = -246;
let femaleIconY = -90;

let maleIconX = -226;
let maleIconY = -90;

let myFont;

// DATA

let cntotal = [26.28, 44.61, 83.17, 140.7, 203.61, 230.88, 296.51]; // Total Sales revenue of the gaming industry in China
let cntotaldates = [2009, 2011, 2013, 2015, 2017, 2018, 2021]; // Total Sales revenue of the gaming industry in China Dates

let cndevice = [10.2, 10.8, 11.9, 14.2, 18.4, 32, 55]; // sample data
let cndevicename = [
  "VR",
  "TV",
  "Tablet",
  "Handheld",
  "Console",
  "PC",
  "Smartphone",
]; // sample data

let cnpop = [19.57, 25.55, 29.86, 32, 67.66, 72.53, 154.37]; // Monthly active users of leading gaming apps in China 2022
let cnpopname = [
  "Sky",
  "Happy Poker",
  "Mini World",
  "Minecraft",
  "Anipop",
  "Peace Elite",
  "King of Glory",
];

let cnhour = [6, 8, 15, 21, 16, 12, 10, 12]; // How many hours per week do you spend playing video/computer games?
let cnhours = ["None", "<1", "1-3", "4-10", "11-15", "16-20", "21-25", "25<"];

let cncost = [1, 14, 21, 22, 39, 84]; // sample data
let cncostname = ["Other", "Subscription", "Paid*", "Paid", "Free", "Free*"]; // sample data

let rutotal = [1.09, 1.23, 1.4, 1.62, 1.85, 1.67, 1.83]; // Total Sales revenue of the gaming industry in Russia
let rutotaldates = [2017, 2018, 2019, 2020, 2021, 2022, 2023]; // Total Sales revenue of the gaming industry in China Dates

let rudevice = [1, 6, 11, 16, 18, 50, 54]; // Device preference
let rudevicename = [
  "Other",
  "Handheld",
  "TV",
  "Console",
  "Tablet",
  "PC",
  "Smartphone",
];

let rupop = [1.1, 1.1, 1.2, 1.3, 1.4, 2.4, 2.8]; // Leading mobile gaming apps in Russia
let rupopname = [
  "WoT \nBlitz",
  "Roblox",
  "Durak Online",
  "Gardenscapes",
  "Words of Wonders",
  "Homescapes",
  "Brawl Stars",
];

let ruhour = [16, 7, 27, 23, 14, 7, 4, 2]; // How many hours per week do you spend playing video/computer games?
let ruhours = ["None", "<1", "1-5", "6-10", "11-15", "16-20", "20<", "Unknown"];

let rucost = [1.9, 2.2, 3.5]; // Average per capita spending on video game purchases or subscriptions over the past year in Russia in thousands Rubble
let rustname = ["Mobile", "Console", "PC"]; //

let rugender = [66, 34]; // Average per capita spending on video game purchases or subscriptions over the past year in Russia in thousands Rubble
let rusgender = ["Male", "Female"]; //

let catotal = [1.78, 1.91, 2.1, 2.7, 3.23, 3.5, 3.82]; // Total Sales revenue of the gaming industry in Canada
let catotaldates = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

let cadevice = [3.8, 5.4, 10.6, 24.7, 35.5, 36.1, 52.3]; // Device preference
let cadevicename = [
  "VR",
  "TV",
  "Handheld",
  "Tablets",
  "Console",
  "PC",
  "Smartphone",
];

let capop = [1.1, 1.1, 1.2, 1.3, 1.4, 2.4, 2.8]; // Leading mobile gaming apps in Canada
let capopname = [
  "2248",
  "Crowd Evolution",
  "Stick War",
  "Gun Head Run",
  "Survivor.io",
  "Epic Heroes",
  "Stumble Guys",
];

let cahour = [21, 9, 30, 18, 9, 5, 5, 2]; // How many hours per week do you spend playing video/computer games?
let cahours = ["None", "<1", "1-5", "6-10", "11-15", "16-20", "20<", "Unknown"];

let cacost = [1.9, 2.2, 3.5]; // Average per capita spending on video game purchases or subscriptions over the past year in Russia in thousands Rubble
let castname = ["Mobile", "Console", "PC"]; //

let images = []; // An array to store the images
let ruimages = []; // An array to store the images
let caimages = []; // An array to store the images

function preload() {
  images.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/sha2.png?v=1679566545083"
    )
  ); // load the image
  images.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/sha6.png?v=1679566554108"
    )
  ); // load the image
  images.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/sha4.png?v=1679566548065"
    )
  ); // load the image
  images.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/sha5.png?v=1679566550210"
    )
  ); // load the image
  images.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/sha6.png?v=1679566554108"
    )
  ); // load the image
  images.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/sha2.png?v=1679566545083"
    )
  ); // load the image
  images.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/sha1.png?v=1679566543743"
    )
  ); // load the image
  images.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/sha3.png?v=1679566548658"
    )
  ); // load the image

  ruimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ru1.png?v=1679566528610"
    )
  ); // load the image
  ruimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ru2.png?v=1679566530340"
    )
  ); // load the image
  ruimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ru4.png?v=1679566534314"
    )
  ); // load the image
  ruimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ru5.png?v=1679566535405"
    )
  ); // load the image
  ruimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ru6.png?v=1679566537110"
    )
  ); // load the image
  ruimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ru1.png?v=1679566528610"
    )
  ); // load the image
  ruimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ru3.png?v=1679566533422"
    )
  ); // load the image
  ruimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ru2.png?v=1679566530340"
    )
  ); // load the image

  caimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ca2.png?v=1679566516049"
    )
  ); // load the image
  caimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ca6.png?v=1679566526120"
    )
  ); // load the image
  caimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ca4.png?v=1679566522184"
    )
  ); // load the image
  caimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ca5.png?v=1679566525085"
    )
  ); // load the image
  caimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ca6.png?v=1679566526120"
    )
  ); // load the image
  caimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ca2.png?v=1679566516049"
    )
  ); // load the image
  caimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ca1.png?v=1679566515292"
    )
  ); // load the image
  caimages.push(
    loadImage(
      "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ca3.png?v=1679566519209"
    )
  ); // load the image

  buttons = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/buttons.png?v=1679516938122"
  );
  China = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/SHANGHAIBACKGROUND.png?v=1679563838334"
  );
  ChinaGender = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/genderchina.png?v=1679524843963"
  );

  Russia = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/RUSSSSSSSSSSSSSSSSSSIA.png?v=1679516930283"
  );
  Canada = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/canadaGOOSE.png?v=1679566503659"
  );

  femaleIcon1 = loadImage(
    "https://cdn.glitch.global/7de70a70-4cb2-4cbe-8b5b-bbd4b1998625/FemaleIcon3.png?v=1678650350580"
  );
  femaleIcon2 = loadImage(
    "https://cdn.glitch.global/7de70a70-4cb2-4cbe-8b5b-bbd4b1998625/FemaleIcon4.png?v=1678650351881"
  );
  maleIcon1 = loadImage(
    "https://cdn.glitch.global/7de70a70-4cb2-4cbe-8b5b-bbd4b1998625/MaleIcon1.png?v=1678650354617"
  );
  maleIcon2 = loadImage(
    "https://cdn.glitch.global/7de70a70-4cb2-4cbe-8b5b-bbd4b1998625/MaleIcon2.png?v=1678650357523"
  );

  earth = loadImage(
    "https://cdn.glitch.global/430b6047-d9e3-4e65-9212-79a73e538fda/earth.jpg?v=1678705308288"
  );

  earthglow = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/earthglow.png?v=1679318880069"
  );

  earthcloud = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/clouds.png?v=1679319561982"
  );

  // flags!

  flags = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/flags.png?v=1679393094911"
  );

  CNHi = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/cnhi.png?v=1679393109120"
  );
  CNmap = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/china.png?v=1679346446547"
  );

  USHi = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ushi.png?v=1679393133420"
  );
  usmap = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/USA.png?v=1679346655592"
  );

  RUHi = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/ruhi.png?v=1679393114763"
  );
  rumap = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/russia.png?v=1679395514983"
  );

  GRHi = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/gbhi.png?v=1679393098087"
  );
  grmap = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/germany.png?v=1679395523667"
  );

  ukhi = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/grhi.png?v=1679393102656"
  );
  ukmap = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/uk.png?v=1679395507348"
  );

  cahi = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/cahi.png?v=1679393120268"
  );
  camap = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/canada.png?v=1679395518301"
  );

  title = loadImage(
    "https://cdn.glitch.global/b40d8319-5e58-41be-973e-de78f4441d06/title.png?v=1679330349042"
  );

  myFont = loadFont(
    "https://cdn.glitch.global/430b6047-d9e3-4e65-9212-79a73e538fda/Roboto-Medium.ttf?v=1678704557569"
  );
  // uk datasets
  dataset = loadTable("ukgender.csv", "csv", "header"); // specify a header so its not included with the data
  datasetA = loadTable("ukplatform.csv", "csv", "header");
  // canada datasets
  datasetB = loadTable("canadagender.csv", "csv", "header");
  datasetC = loadTable("canadaagepref.csv", "csv", "header");
  datasetD = loadTable("canadareasoning.csv", "csv", "header");
  // usa datasets
  datasetE = loadTable("usasortofsales.csv", "csv", "header");
  datasetF = loadTable("usamiss.csv", "csv", "header");
}

function setup() {
  createCanvas(720, 720, WEBGL);
  textFont(myFont);
  for (let i = 0; i < 500; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background(0);
  print(distCN);

  button1 = dist(mouseX, mouseY, 666, 100);
  button2 = dist(mouseX, mouseY, 666, 165);
  button3 = dist(mouseX, mouseY, 666, 235);
  button4 = dist(mouseX, mouseY, 666, 300);
  button5 = dist(mouseX, mouseY, 666, 370);
  button6 = dist(mouseX, mouseY, 666, 440);
  button7 = dist(mouseX, mouseY, 666, 505);
  button8 = dist(mouseX, mouseY, 310, 298); // 8

  // scene mananger

  if (scene === 0) {
    mainScreen();
  } else if (scene == 1) {
    chinaScreen();
  } else if (scene == 2) {
    russiaScreen();
  } else if (scene == 3) {
    canadaScreen();
  } else if (scene == 4) {
    canadaScreenA();
  } else if (scene == 5) {
    usaScreen();
  } else if (scene == 6) {
    ukScreen();
  } else {
    mainScreen();
  }
}

// main screen (globe)

// countries

// united kingdom (uk)

function mainScreen() {
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  print(scene);
  image(title, -width / 2, -height / 2);
  distCN = dist(mouseX, mouseY, 120, 285);
  distUS = dist(mouseX, mouseY, 610, 390);
  distUK = dist(mouseX, mouseY, 455, 610);
  distRU = dist(mouseX, mouseY, 145, 480);
  distCA = dist(mouseX, mouseY, 615, 500);
  distGR = dist(mouseX, mouseY, 290, 610);

  angleX = map(mouseY, 0, height, 0.0, -1);
  angleY = map(mouseX, 0, width, 0.3, 5.5);

  mapCN = map;

  if (distCN < 45) {
    image(CNHi, -width / 2, -height / 2);
    selected = CNmap;
  } else if (distUS < 45) {
    image(USHi, -width / 2, -height / 2);
    selected = usmap;
  } else if (distUK < 45) {
    image(ukhi, -width / 2, -height / 2);
    selected = ukmap;
  } else if (distRU < 45) {
    image(RUHi, -width / 2, -height / 2);
    selected = rumap;
  } else if (distCA < 45) {
    image(cahi, -width / 2, -height / 2);
    selected = camap;
  } else if (distGR < 45) {
    image(GRHi, -width / 2, -height / 2);
    selected = grmap;
  } else {
    selected = earth;
  }

  image(flags, -width / 2, -height / 2);

  image(earthglow, -width / 2, -height / 2);

  if (mouseX) rotateX(angleX);
  rotateY(angleY);
  texture(selected);
  sphere(150, 150, 150);

  rotateY(angle / 2);
  texture(earthcloud);
  sphere(155, 155, 155);
  angle += 0.002;
}

function chinaScreen() {
  image(China, -width / 2, -height / 2);
  image(buttons, -width / 2, -height / 2);

  if (ChinaScene == 0) {
    textSize(32);
    fill(250, 102, 153);
    text("Gaming in China: Market", -300, -300);
    textSize(16);
    text(
      "The video game market in China is the largest in the world, with a total \nrevenue of over 296.51 billion yuan in 2021 (£35.2 Billion). The market has \nhas grown massively in size, by 2021 it had grown to 11 times its size since 2009. \nOne unique aspect of the Chinese video game market is the dominance of \nfree-to-play (F2P) games. These games generate revenue through in-game \npurchases, such as virtual goods or items that enhance gameplay. This is in \ncontrast to other markets, such as the United States, where pay-to-play models \nare more prevalent.",
      -300,
      -250
    );
    textSize(20);
    fill(200, 200, 50);
    text(
      "Total revenue of video game industry in China from 2009 to 2021 \n(in billion yuan)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < cntotal.length; i++) {
      fill(255);
      let barHeight = cntotal[i];
      let y = height / 2 - barHeight;
      text(cntotal[i], x + 10, y - 20);
      image(images[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(cntotaldates[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 1) {
    textSize(32);
    fill(250, 102, 153);
    text("Gaming in China: Gender", -300, -300);
    textSize(16);
    text(
      "The female gamer market has been on the rise in China, although still lags \nbehind the male market. By 2019, women accounted for 46.2 percent of players in \nChina. A significant challenge is poor representation of women in games. Female \ncharacters are often overly sexualized, reinforcing negative gender norms and \nperpetuating gender inequality in the industry. These challenges are often rooted \nin traditional gender roles and cultural norms that prioritize men over women, \naddressing sexism in gaming in China thus requires addressing the broader \nsocietal issues that underlie it.",
      -300,
      -250
    );
    textSize(20);
    fill(200, 200, 50);
    text("Share of video gamers in China in 2019, by gender", -300, -80);
    image(ChinaGender, -width / 2, -height / 2);
  } else if (ChinaScene == 2) {
    textSize(32);
    fill(250, 102, 153);
    text("Gaming in China: Devices", -300, -300);
    textSize(16);
    text(
      "Like most countries smartphones are the most popular gaming device, however \nPC and console adoption in China is relatively low compared to other countries. \nOne reason for this is government regulation has historically restricted the sale \nof consoles in the country, although these restrictions have been eased in \nrecent years. VR adoption in China is relatively high compared to other countries, \none reason is the popularity of VR arcades in the country, which offer a unique \ngaming experience that cannot be replicated on other devices.",
      -300,
      -250
    );
    textSize(20);
    fill(200, 200, 50);
    text(
      "Most used devices for playing video games in China 2022, \nby payment structure (scale x4)\n * = Includes microtransactions",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < cndevice.length; i++) {
      fill(255);
      let barHeight = cndevice[i] * 6;
      let y = height / 2 - barHeight;
      let variable = cndevice[i];
      text(variable + "%", x + 10, y - 20);
      image(images[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(cndevicename[i], x, y - 1);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 3) {
    textSize(32);
    fill(250, 102, 153);
    text("Gaming in China: Cost and Pirates", -300, -300);
    textSize(16);
    text(
      'The most popular payment model for games in China is the "freemium" model, \nbecause it allows players to enjoy the game for free while still offering \nopportunities to spend money on the game if they choose. This model has been \nparticularly successful in China as a solution to piracy, where the high cost of \nMicrosoft\'s Windows in the early 1990s helped create a culture where piracy \nbecame the norm. Chinese consumers often refuse to pay for software upfront, \nas a result publishers often instead rely on advertising and in-app purchases.',
      -300,
      -250
    );
    textSize(20);
    fill(200, 200, 50);
    text(
      "Online games popularity in China as of April 2022, \nby payment structure (scale x4)\n * = Includes microtransactions",
      -300,
      -80
    );
    x = -width / 2 + 100; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < cncost.length; i++) {
      fill(255);
      let barHeight = cncost[i] * 4;
      let y = height / 2 - barHeight;
      let variable = cncost[i];
      text(variable + "%", x + 10, y - 20);
      image(images[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(cncostname[i], x, y - 1);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 5) {
    textSize(32);
    fill(250, 102, 153);
    text("Gaming in China: Popular/Casual Games", -300, -300);
    textSize(16);
    text(
      'The most popular payment model for games in China is the "freemium" model, \nbecause it allows players to enjoy the game for free while still offering \nopportunities to spend money on the game if they choose. This model has been \nparticularly successful in China as a solution to piracy, where the high cost of \nMicrosoft\'s Windows in the early 1990s helped create a culture where piracy \nbecame the norm. Chinese consumers often refuse to pay for software upfront, \nas a result publishers often instead rely on advertising and in-app purchases.',
      -300,
      -250
    );
    textSize(20);
    fill(200, 200, 50);
    text(
      "Monthly active users of leading gaming apps in China 2022, \n(in millions) (scale x2.5)",
      -300,
      -80
    );
    x = -width / 2 + 50; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < cnpop.length; i++) {
      fill(255);
      let barHeight = cnpop[i] * 2.5;
      let y = height / 2 - barHeight;
      let variable = cnpop[i];
      text(variable + "%", x + 10, y - 20);
      image(images[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(cnpopname[i], x, y - 1);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 4) {
    textSize(32);
    fill(250, 102, 153);
    text("Gaming in China: Hours", -300, -300);
    textSize(16);
    text(
      "Gamers in China are known for spending significantly more time playing video \ngames than their counterparts in other countries. 50% of Chinese players play \nfor over 10 hours a week, compared to Canada where only 20% of players played \nfor more than 10 hours a week. Many popular games, such as Honor of Kings\n and Happy Elements' Anipop, incorporate social elements that allow gamers to play \nwith friends and connect with other players. This creates a sense of community and \nsocialisation that can keep gamers engaged for longer periods. \nChina also has the world's biggest esports industry, where gaming is more \naccepted as a professional sport which contributes to the popularity of \ngaming as a pastime.",
      -300,
      -250
    );
    textSize(20);
    fill(200, 200, 50);
    text(
      "China: How many hours per week do you spend playing \nvideo/computer games? 2018, \n(scale x12)",
      -300,
      -40
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < cnhour.length; i++) {
      fill(255);
      let barHeight = cnhour[i] * 10;
      let y = height / 2 - barHeight;
      let variable = cnhour[i];
      text(variable + "%", x + 10, y - 20);
      image(images[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(cnhours[i], x, y - 1);
      x += barWidth + 20; // add some spacing between bars
    }
  } else {
  }
}

function russiaScreen() {
  image(Russia, -width / 2, -height / 2);
  image(buttons, -width / 2, -height / 2);

  if (ChinaScene == 1) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Gender", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Share of video game players in Russia by gender, \n(scale x6)",
      -300,
      -140
    );
    x = -width / 2 + 140; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rugender.length; i++) {
      fill(255);
      let barHeight = rugender[i] * 6;
      let y = height / 2 - barHeight;
      text(rugender[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rusgender[i], x + 10, y + barHeight);
      x += barWidth + 200; // add some spacing between bars
    }
  } else if (ChinaScene == 2) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Devices", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Most popular devices for gaming in Russian by %, \n(scale x7)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rudevice.length; i++) {
      fill(255);
      let barHeight = rudevice[i] * 7;
      let y = height / 2 - barHeight;
      text(rudevice[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rudevicename[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 3) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Costs", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Average per capita spending on video games in Russia, \n in thousands Ruble\n(scale x100)",
      -300,
      -80
    );
    x = -width / 2 + 140; // starting x position for bars
    barWidth = 100; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rucost.length; i++) {
      fill(255);
      let barHeight = rucost[i] * 100;
      let y = height / 2 - barHeight;
      text(rucost[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rustname[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 4) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Hours", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Russia: How many hours per week do you spend playing games?\n(scale x12)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < ruhour.length; i++) {
      fill(255);
      let barHeight = ruhour[i] * 12;
      let y = height / 2 - barHeight;
      text(ruhour[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(ruhours[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 5) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Mobile Games", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Leading Mobile Games in Russia, \nin billions of USD\n(scale x150)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rupop.length; i++) {
      fill(255);
      let barHeight = rupop[i] * 150;
      let y = height / 2 - barHeight;
      text(rupop[i], x + 10, y - 30);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rupopname[i], x + 10, y - 10);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 0) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Market", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Total Sales revenue of the gaming industry in Russia, \nin billions of USD\n(scale x10)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rutotal.length; i++) {
      fill(255);
      let barHeight = rutotal[i] * 200;
      let y = height / 2 - barHeight;
      text(rutotal[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rutotaldates[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } 

  else {
  }
}

function canadaScreen() {
  image(Canada, -width / 2, -height / 2);
  image(buttons, -width / 2, -height / 2);

  if (ChinaScene == 0) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Market", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Total Sales revenue of the gaming industry in Russia, \nin billions of USD\n(scale x10)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rutotal.length; i++) {
      fill(255);
      let barHeight = rutotal[i] * 200;
      let y = height / 2 - barHeight;
      text(rutotal[i], x + 10, y - 20);
      image(caimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rutotaldates[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 1) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Market", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Total Sales revenue of the gaming industry in Russia, \nin billions of USD\n(scale x10)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rutotal.length; i++) {
      fill(255);
      let barHeight = rutotal[i] * 200;
      let y = height / 2 - barHeight;
      text(rutotal[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rutotaldates[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 2) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Market", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Total Sales revenue of the gaming industry in Russia, \nin billions of USD\n(scale x10)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rutotal.length; i++) {
      fill(255);
      let barHeight = rutotal[i] * 200;
      let y = height / 2 - barHeight;
      text(rutotal[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rutotaldates[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 3) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Market", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Total Sales revenue of the gaming industry in Russia, \nin billions of USD\n(scale x10)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rutotal.length; i++) {
      fill(255);
      let barHeight = rutotal[i] * 200;
      let y = height / 2 - barHeight;
      text(rutotal[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rutotaldates[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 5) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Market", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Total Sales revenue of the gaming industry in Russia, \nin billions of USD\n(scale x10)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rutotal.length; i++) {
      fill(255);
      let barHeight = rutotal[i] * 200;
      let y = height / 2 - barHeight;
      text(rutotal[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rutotaldates[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else if (ChinaScene == 4) {
    textSize(32);
    fill(255);
    text("Gaming in Russia: Market", -300, -300);
    textSize(16);
    text(" ", -300, -250);
    textSize(20);
    fill(0, 200, 50);
    text(
      "Total Sales revenue of the gaming industry in Russia, \nin billions of USD\n(scale x10)",
      -300,
      -80
    );
    x = -width / 2 + 40; // starting x position for bars
    barWidth = 60; // width of each bar

    // loop through data array and draw bars
    for (let i = 0; i < rutotal.length; i++) {
      fill(255);
      let barHeight = rutotal[i] * 200;
      let y = height / 2 - barHeight;
      text(rutotal[i], x + 10, y - 20);
      image(ruimages[i], x, y, barWidth, barHeight); // draw the image as the bar
      text(rutotaldates[i], x + 10, y + barHeight);
      x += barWidth + 20; // add some spacing between bars
    }
  } else {
  }
}

class Star {
  constructor() {
    // Set the initial position of the star randomly in 3D space
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width); // Max distance is also width
    this.speed = 2;
  }

  update() {
    this.z -= this.speed; // Move the star closer to the camera
    if (this.z < 1) {
      // If the star has moved past the camera, reset its position and speed
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);
      this.speed = 2;
    }
  }

  show() {
    fill(255);
    noStroke();

    let sx = map(this.x / this.z, 0, 1, 0, width); // Divide x or y by the z distance and map it to the x or y position on the canvas to create the x and y movement of the stars from the centre point
    let sy = map(this.y / this.z, 0, 1, 0, height);

    let r = map(this.z, 0, width, 5, 1); // Map the size of the star to the Z distance of the star

    ellipse(sx, sy, r, r); // Draw the star as a white circle
  }
}

function mouseClicked() {
  if (scene == 0) {
    if (distCN < 45) {
      scene = 1;
    }
    if (distRU < 45) {
      scene = 2;
    }
    if (distCA < 45) {
      scene = 4;
    }
    if (distUK < 45) {
      scene = 6;
    }
    if (distUS < 45) {
      scene = 5;
    }
    if (distGR < 45) {
    } else {
    }
  }

  if (scene > 0) {
    if (button1 < 30) {
      ChinaScene = 1;
    } else if (button2 < 30) {
      ChinaScene = 2;
    } else if (button3 < 30) {
      ChinaScene = 3;
    } else if (button4 < 30) {
      ChinaScene = 4;
    } else if (button5 < 30) {
      ChinaScene = 5;
    } else if (button6 < 30) {
      ChinaScene = 0;
    } else if (button7 < 30) {
      scene = 0;
    } else if (button8 < 30) {
      scene = 0;
    }
    }
  }


// countries (united states of america, united kingdom, canada)

// united kingdom (uk)

function ukScreen() {
  background(212, 230, 255);

  // titles and headings

  fill(100, 149, 237);
  textSize(32);
  text("United Kingdom", -120, -317);

  textSize(14);
  text("Gender:", -355, -240);
  text("Platform Preferences:", -355, 100);

  // introduction paragraph

  fill(255);
  textSize(11);
  text(
    "The United Kingdom (UK)'s Gaming Market is one of the largests in Europe, sixth on a world-wide scale, worth a record-breaking £7.16b as of the\nyear 2022. Due to the increase of video game availability and accessability for audiences, the region's population of players has grown in the past\ndecade, as well as the platform and genre of games prominently played.",
    -355,
    -290
  );

  // gender range data (it will do 2013 vs modern times 2022)

  text("(Information 2013 - 2022) in Audience Reach", -300, -241);

  // get string uses row and col as parametres

  let ukGender = dataset.getString(0, 0); // directly refers to the gender type in text (e.g., male)
  let ukGenderF = dataset.getString(4, 0);

  // 2013

  let ukPercentage = dataset.getNum(0, 2); // percentage of men in 2013 (e.g., 46%)
  let ukPercentageF = dataset.getNum(4, 2);

  let ukPer1 = dataset.getString(0, 2);
  let ukPer2 = dataset.getString(4, 2);

  // 2022

  let ukPercentage2 = dataset.getNum(2, 2);
  let ukPercentageF2 = dataset.getNum(5, 2);

  let ukPer3 = dataset.getString(2, 2);
  let ukPer4 = dataset.getString(5, 2);

  let ukYear = dataset.getNum(0, 1); // 2013
  let ukYear1 = dataset.getNum(2, 1); // 2022

  let scaledUK = scaleFactor * ukPercentage;
  let scaledUK1 = scaleFactor * ukPercentageF;
  let scaledUK2 = scaleFactor * ukPercentage2;
  let scaledUK3 = scaleFactor * ukPercentageF2;

  // text

  text(ukYear, -250, -95); // 2013
  text(ukYear1, -20, -95); // 2022

  text(ukGender, -300, -100); // men
  text(ukGender, -80, -100);

  text(ukGenderF, -200, -100); // women
  text(ukGenderF, 40, -100);

  text(ukPer1, -300, -90);
  text(ukPer2, -195, -90);
  text(ukPer3, -80, -90);
  text(ukPer4, 45, -90);

  // circles to represent the change

  noStroke();
  fill(100, 149, 237);

  ellipse(-288, -170, scaledUK, scaledUK);
  ellipse(-182, -170, scaledUK1, scaledUK1);
  ellipse(-68, -170, scaledUK2, scaledUK2);
  ellipse(57, -170, scaledUK3, scaledUK3);

  // gender summary paragraph

  fill(255);
  textSize(11);
  text(
    "In the United Kingdom (between 2013 - 2022) the percentages of the population gaining intrests in video games has immensely increased towhere it is fairly equal amoung men and women, with a 25% upsurge in with womens intrests in a female playerbase, gaming penetration\nwise, we see how its reach in the media is broadening manys horizons as a form of interactive entertainment. Whereas, the distribution of buyers\n(based on gender) in 2021 was 60.3% men, 39.7% women.",
    -355,
    -52
  );
  text(
    "Specifically in Mobile Gaming the greatest shift is seen, in 2013 it had a 16% reach for men and 10% with women, for the following years it was\noriginally more popular amoungst men however in recent years it has gained a larger playerbase in women, them at 40% with men at 31% as of\n2022.",
    -355,
    0
  );
  text(
    "The increase of Gaming, not only in the United Kingdom but on a world-wide scale is partially due to the growing ownership of smartphones thus\ndownloads of mobile games, majority of them with a free-to-play business model with either micro-transactions and or ads, it has lead to the\nsuccess of games on this platform as they can be played casually, on-the-go with a large libary with games of all genres.",
    -355,
    50
  );

  // platform preferences

  // platform preferences paragraph

  text(
    "With 74.9 of internet users the United Kingdom saying they use any device to play video games, we see their differences in playstyles from their\npreferred platform.",
    -355,
    120
  );
  text("(Information from 2021)", -212, 100);

  // platform preferences data

  // (discussing the most popular platforms to see the difference since its surprising) note

  let ukSmartPhone = datasetA.getString(0, 0); // smartphone line
  let gameConsole = datasetA.getString(1, 0); // console line
  let desktopLaptop = datasetA.getString(2, 0); // desktop line
  let tablet = datasetA.getString(3, 0); // tablet line

  // percentage line

  let smartphoneA = datasetA.getString(0, 1); // e.g., 52%
  let gameconsoleA = datasetA.getString(1, 1);
  let desktopA = datasetA.getString(2, 1);
  let tabletA = datasetA.getString(3, 1);

  // numbers for the data demonstration

  let smartphoneB = datasetA.getNum(0, 1); // e.g., 52%
  let gameconsoleB = datasetA.getNum(1, 1);
  let desktopB = datasetA.getNum(2, 1);
  let tabletB = datasetA.getNum(3, 1);

  text(ukSmartPhone, -300, 220);
  text(gameConsole, -200, 220);
  text(desktopLaptop, -100, 220);
  text(tablet, 0, 220);

  text(smartphoneA, -283, 233);
  text(gameconsoleA, -180, 233);
  text(desktopA, -78, 233);
  text(tabletA, -2, 233);

  noStroke();
  fill(100, 149, 237);

  ellipse(-270, 175, smartphoneB, smartphoneB);
  ellipse(-165, 175, gameconsoleB, gameconsoleB);
  ellipse(-63, 175, desktopB, desktopB);
  ellipse(13, 175, tabletB, tabletB);

  fill(255);
  text(
    "Upon a look at the most popular platforms for Gaming, on-the-go devices such as Smartphones, Laptops and Tablets have high usage rates,\nmainly due the convenience of it as well as multitude of free game options for casuals (26% playing an average of 1 - 5 hours a week).",
    -355,
    260
  );
  text(
    "Smartphones takes a large lead of 52% considering the amount of people in the United Kingdom who own a smartphone, as well as how\naccessible they are to audiences.",
    -355,
    294
  );
}

// canada

function canadaScreenA() {
  background(240, 126, 126); // using colour to match the scheme of the country flags
  
  // titles and headings

  fill(230, 44, 44);
  textSize(32);
  text("Canada", -60, -317);

  textSize(14);
  text("Gender:", -355, -225);
  text("Age Preferences:", -355, -17);
  text("Player Reasoning:", -355, 100);

  // back button
  
 circle(0)
  
  
  // introduction paragraph

  fill(255);
  textSize(11);
  //text("(Previous Page)", 272, 280);
  text(
    "In Canada, from looking at data regarding player preferences in gender, reasoning and age-range we can gain insight on what interests individuals\ninto gaming and how they decide to dedicate that time being 1 - 5 (27%) hours a week for the average person. In 2022, earning itself 3.16 billion\nin revenue for soley digital downloads, the gaming industry in Canada is growing at a rapid rate, thus an increase of indie-game companies\nconsisting of smaller teams (e.g., 509 micro, 370 standard, and 58 large ones exisitng in July of 2021) it's successful.",
    -355,
    -290
  );

  // remember datasetB = gender, datasetC = preference, datasetD = reasoning

  // gender data

  text("(Information 2009 - 2022)", -303, -226);

  let canadaGenderM = datasetB.getString(0, 0); // male
  let canadaGenderF = datasetB.getString(2, 0); // female

  // 2009

  let canadaMPer = datasetB.getString(0, 2);
  let canadaFPer = datasetB.getString(2, 2);

  let canadaMPer1 = datasetB.getNum(0, 2);
  let canadaFPer1 = datasetB.getNum(2, 2);

  // 2022

  let canadaMPerA = datasetB.getString(1, 2);
  let canadaFPerA = datasetB.getString(3, 2);

  let canadaMPerA1 = datasetB.getNum(1, 2);
  let canadaFPerA2 = datasetB.getNum(3, 2);

  let canadaYear = datasetB.getNum(0, 1); // 2009
  let canadaYear2 = datasetB.getNum(1, 1); // 2022

  // scaling the numbers slightly so that the ellipse will be larger

  noStroke();
  fill(255);
  textSize(11);

  text(canadaGenderM, -300, -90);
  text(canadaGenderM, -80, -90);
  text(canadaGenderF, -200, -90);
  text(canadaGenderF, 40, -90);

  text(canadaMPer, -305, -80); // men
  text(canadaMPerA, -81, -80);
  text(canadaFPer, -200, -80); // women
  text(canadaFPerA, 45, -80);

  text(canadaYear, -250, -85); // 2013
  text(canadaYear2, -18, -85); // 2022

  text(
    "In 2009 men were the majority population of players leading by 64.3% and women with 34.9% however, in 2022 gaming is slightly more popular\namoungst women, them being 51% whilst men are at 49%; gender-wise the player population is fairly balanced.",
    -355,
    -54
  );

  let men2009 = scaleFactor * canadaMPer1;
  let men2022 = scaleFactor * canadaMPerA1;
  let women2009 = scaleFactor * canadaFPer1;
  let women2022 = scaleFactor * canadaFPerA2;

  fill(230, 44, 44);

  ellipse(-287, -160, men2009, men2009);
  ellipse(-182, -160, women2009, women2009);
  ellipse(-68, -160, men2022, men2022);
  ellipse(56, -160, women2022, women2022);

  // age preferences
  // datasetC = preference

  fill(255);

  // subheadings

  text("(Information from 2022)", -243, -18);
  text("Children and Teens (6 - 17):", -355, 20);
  text("Adults (18+):", -355, 35);

  // preferences

  text("(Playing Online)", 0, 0);
  text("(Playing Alone)", -110, 0);
  text("(Playing with Friends)", 110, 0);

  let ctOnline = datasetC.getString(0, 1); // percentages
  let ctkp = datasetC.getString(1, 1);
  let ctalone = datasetC.getString(2, 1);
  let aOnline = datasetC.getString(3, 1);
  let ap = datasetC.getString(4, 1);
  let aAlone = datasetC.getString(5, 1);

  text(ctOnline, 25, 20); // online
  text(aOnline, 23, 35);
  text(ctkp, 150, 20); // friends
  text(ap, 150, 35);
  text(ctalone, -90, 20); // alone
  text(aAlone, -87, 35);

  text(
    "Children and Teenagers are more social in gaming, playing online more often alongside friends whereas adults have a preference for playing\nalone, why is this? let us begin to discuss the reasoning behind player preferences below.",
    -355,
    60
  );

  // player reasoning

  text("(Information from 2022)", -238, 99);
  text(
    "With 34.3% of Gamers in Canada being adults between the ages 25 to 34 (the most prominent part of players in the country) they believe they\nhave many every-day benefits such as: feeling joy, a form of stress relief, a fun way to spend free-time and more, popular reasonings behind\npeople playing video games are the following:",
    -355,
    125
  );

  // subheadings

  text("(Have Fun)", -300, 185);
  text("(Unwind)", -200, 185);
  text("(Personal Time)", -110, 185);
  text("(Escape)", 16, 185);
  text("(Thinking)", 110, 185);
  text("(Comfort)", 210, 185);

  // datasetD = canada reasoning

  let haveFunPer = datasetD.getString(0, 1); // percentages
  let unwindPer = datasetD.getString(1, 1);
  let personalTPer = datasetD.getString(2, 1);
  let escapePer = datasetD.getString(3, 1);
  let useBPer = datasetD.getString(4, 1);
  let comfortPer = datasetD.getString(5, 1);

  let hf = datasetD.getNum(0, 1);
  let uw = datasetD.getNum(1, 1);
  let pt = datasetD.getNum(2, 1);
  let esc = datasetD.getNum(3, 1);
  let brain = datasetD.getNum(4, 1);
  let cft = datasetD.getNum(5, 1);

  // larger scale circles to represent data

  haveFun = scaleFactor * hf;
  unwind = scaleFactor * uw;
  personaltime = scaleFactor * pt;
  escape = scaleFactor * esc;
  thinking = scaleFactor * brain;
  comfort = scaleFactor * cft;

  fill(230, 44, 44);

  ellipse(-275, 240, haveFun, haveFun);
  ellipse(-177, 240, unwind, unwind);
  ellipse(-70, 240, personaltime, personaltime);
  ellipse(38, 240, escape, escape);
  ellipse(132, 240, thinking, thinking);
  ellipse(235, 240, comfort, comfort);

  fill(255);

  text(haveFunPer, -285, 300);
  text(unwindPer, -187, 300);
  text(personalTPer, -81, 300);
  text(escapePer, 24, 300);
  text(useBPer, 120, 300);
  text(comfortPer, 223, 300);

  text(
    "Canada reveals the main reasoning behind people playing video games is to have fun through a means of escapism, allowing them to unwind and\nbeing a sense of comfort for many, and a challenge where they must think to others, all wanting to immerse themselves in for a multitude of\nreasons. ",
    -355,
    326
  );
}

// united states of america (usa)

function usaScreen() {
  background(170, 180, 222);

  // titles and headings

  fill(112, 134, 246);
  textSize(32);
  text("United States of America", -184, -317);
  textSize(14);
  text("Purchasing Preferences:", -355, -240);
  text("Player Behaviour:", -355, 92);

  // introduction paragraph

  fill(255);
  textSize(11);
  text(
    "The United States of America (USA) is one of the top leading countries in the gaming industry, thus containing lengthy analysis on the purchasing\npatterns of its players, as well as their habbits and behaviours. Furthermore, the USA is a pool of information to understand how the way in which\nvideo games have been brought over the past years as this form of entertainment has consistently continued to increase in popularity.",
    -355,
    -290
  );

  // remember datasetE = sort of sales

  // purchasing preferences

  text("(Information 2017 - 2021) Sales in Millions", -196, -241);
  text("Digital Downloads", -315, -40);
  text("Digital Downloads", -5, -40);
  text("Physical Copies", -156, -40);
  text("Physical Copies", 161, -40);

  // summary paragraph

  text(
    "In the coming years, digital downloads have been on the rise due to the instant access to the product being more convenient (rather than ordering\nonline and or collecting it at a store) as well as the impact of COVID-19's lockdown restrictions, temporary discounts and so on. Therefore, real\ncopies of video games, though selling in the tens of millions each year, are on the decline. Those who remain purchasing physical versions do\nso for: freedom, re-sell value, collectors, and so on.",
    -355,
    5
  );
  text(
    "We see a 28.9% increase in digital downloads from 2017 to 2021 whereas, an 12.3% decrease in purchases of physical copies.",
    -355,
    70
  );

  let digital = datasetE.getString(0, 1); // percentages
  let digitalB = datasetE.getString(2, 1);
  let physical = datasetE.getString(1, 1);
  let physicalB = datasetE.getString(3, 1);

  let digital1 = datasetE.getNum(0, 1);
  let digital2 = datasetE.getNum(2, 1);
  let physical1 = datasetE.getNum(1, 1);
  let physical2 = datasetE.getNum(3, 1);

  let dpyear = datasetE.getNum(0, 2); // year (e.g., 2017)
  let dpyearA = datasetE.getNum(3, 2);

  text(digital, -290, -28);
  text(digitalB, 20, -28);
  text(physical, -134, -28);
  text(physicalB, 184, -28);

  text(dpyear, -205, -30); // 2017
  text(dpyearA, 110, -30); // 2021

  noStroke();
  fill(112, 134, 246);

  ellipse(-271, -140, digital1, digital1);
  ellipse(-120, -140, physical1, physical1);
  ellipse(40, -140, digital2, digital2);
  ellipse(200, -140, physical2, physical2);

  // player behaviour

  fill(255);

  text("(Information from 2021)", -240, 91);
  text(
    "Moveover, many see the benefits of Gaming such as a source of stress relief, a way to express creativity, a self-challenge and so on however,\nsome have expressed how their love for gaming has negatively impacted their daily lives, mainly by missing important things to them.",
    -355,
    115
  );

  // datasetF = usa miss

  let social = datasetF.getString(0, 1);
  let shower = datasetF.getString(1, 1);
  let sleep = datasetF.getString(2, 1);
  let work = datasetF.getString(3, 1);
  let eat = datasetF.getString(4, 1);

  let socialA = datasetF.getNum(0, 1);
  let showerA = datasetF.getNum(1, 1);
  let sleepA = datasetF.getNum(2, 1);
  let workA = datasetF.getNum(3, 1);
  let eatA = datasetF.getNum(4, 1);

  text("Socialising", -327, 230);
  text("Showering", -225, 230);
  text("Sleeping", -123, 230);
  text("Working", -20, 230);
  text("Eating", 84, 230);

  text(social, -316, 240);
  text(shower, -217, 240);
  text(sleep, -113, 240);
  text(work, -17, 240);
  text(eat, 82, 240);

  // paragraph(s)

  text(
    "Majority of gamers in the United States have admitted that there have been times where they should've and or needed to sleep however didn't due\nto how immersed they have been in a video game by a 54% lead. It has affected other aspects of their lives such as socialising, work efficiently\nand more, this being experienced by casuals too.",
    -355,
    280
  );
  text(
    "This deeper dive on the negative affects reflect how video games can still be enjoyed with well-paced screen time breaks therefore players can\ncontinue to do so in a more positive manner!",
    -355,
    330
  );

  fill(112, 134, 246);
  ellipse(-300, 180, socialA, socialA);
  ellipse(-200, 180, showerA, showerA);
  ellipse(-100, 180, sleepA, sleepA); // biggest at 54%
  ellipse(0, 180, workA, workA);
  ellipse(100, 180, eatA, eatA);
}
