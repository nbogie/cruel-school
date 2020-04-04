var preload = function () {
  fontRye = loadFont("Monoton-Regular.ttf");
  bg = loadImage("nature_sky.jpg");
};
var setup = function () {
  createCanvas(windowWidth, windowHeight);
  noLoop();
};

var drawRandomWords = function (wordList, colorList, sizes) {
  var myColor = random(colorList);
  fill(myColor);

  var randomWord = random(wordList);

  textSize(random(sizes));
  textFont(fontRye);

  var textW = textWidth(randomWord);
  var textH = textSize();
  var x = random(100, width - (textW + 100));
  var y = random(100, height - (textH + 100));

  //translate (width/width,height/height);
  rotate(PI / random(0, 1.5));
  text(randomWord, x, y);
};

var draw = function () {
  background(bg);

  var wordList = ["The", "Cruel", "School", "by", "Duru", "Cavus"];
  var colorList = ["#EE8609", "#EBCC36", "#F34413", "#9C1612", "#80CED6"];
  var sizes = [50, 60, 70, 50, 50, 80, 60, 70, 50, 80, 90, 75, 85, 128];

  for (var i = 0; i < 100; i++) {
    drawRandomWords(wordList, colorList, sizes);
  }
};

var mousePressed = function () {
  redraw();
};
