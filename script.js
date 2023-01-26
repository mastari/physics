var ox, oy, size;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
  ox = (windowWidth) / 2;
  oy = (windowHeight) / 2;
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  ox = (windowWidth) / 2;
  oy = (windowHeight) / 2;
  scale = 20;
}//


function axis() {
  //? Origin and Label
  strokeWeight(2)
  stroke(0)
  fill(55)
  ellipse(ox, oy, scale / 4 + 12)
  textSize(scale + 20)
  fill(51, 185, 230)
  textStyle('bold')
  noStroke()
  text("O", (windowWidth) / 2 - 45, (windowHeight) / 2 + 45)

  //? Ray
  stroke(55)
  fill(55)
  strokeWeight(8)
  line(ox, oy, ox + windowWidth / 4, oy)
  strokeWeight(3)
  triangle(-10 + ox + windowWidth / 4, 10 + oy, -10 + ox + windowWidth / 4, -10 + oy, 10 + ox + windowWidth / 4, oy)
  textStyle(NORMAL)

  text("x", ox + windowWidth / 4 + 30, oy + 10)
}

function draw() {
  background(240)
  axis()
}