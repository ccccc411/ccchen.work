let imgElement;
let imgElement1,
  imgElement2,
  imgElement3,
  imgElement4,
  imgElement5,
  imgElement6,
  imgElement7,
  imgElement8;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  translate(width / 2, height / 2);
  imgElement = createImg("homepageimage/GreenRabbit.png", "rabbit");
  imgElement.position(250, 100);
  imgElement.size(1000, 550);
  imgElement1 = createImg("homepageimage/Shape1.png", "shape1");
  imgElement1.position(1200, 550);
  imgElement1.size(120, 110);
  imgElement2 = createImg("homepageimage/Shape2.png", "shape2");
  imgElement2.position(700, 25);
  imgElement2.size(200, 190);
  imgElement3 = createImg("homepageimage/Shape3.png", "shape3");
  imgElement3.position(1150, 100);
  imgElement3.size(120, 110);
  imgElement4 = createImg("homepageimage/Shape4.png", "shape4");
  imgElement4.position(900, 250);
  imgElement4.size(180, 170);
  imgElement5 = createImg("homepageimage/Shape5.png", "shape5");
  imgElement5.position(400, 400);
  imgElement5.size(160, 150);
  imgElement6 = createImg("homepageimage/Shape6.png", "shape6");
  imgElement6.position(550, 280);
  imgElement6.size(150, 140);
  imgElement7 = createImg("homepageimage/Shape7.png", "shape7");
  imgElement7.position(250, 100);
  imgElement7.size(290, 240);
  imgElement8 = createImg("homepageimage/line1.png", "line");
  imgElement8.position(725, 375);
  imgElement8.size(40, 200);
}
function draw() {
  const angleDeg = (second() % 60) * 6;
  imgElement1.position(1200, 550 + sin(frameCount / 50) * 10);
  imgElement2.position(700, 25 + sin(frameCount / 50) * 10);
  imgElement3.position(1150, 100 + sin(frameCount / 50) * 10);
  imgElement4.position(900, 250 + sin(frameCount / 50) * 10);
  imgElement5.position(400, 400 + sin(frameCount / 50) * 10);
  imgElement6.position(550, 280 + sin(frameCount / 50) * 10);
  imgElement7.position(250, 100 + sin(frameCount / 50) * 10);
  imgElement8.style("transform", `rotate(${angleDeg}deg)`);
}

