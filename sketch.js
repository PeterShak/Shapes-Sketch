function setup() {
  createCanvas(800, 800);
}
function draw(){
  esb(220,90,200,230)
}

function esb(x,y,w,h) {
  background(220);
  stroke(0)
  fill(255, 165, 0)
  beginShape()
  vertex(x+270/800*w, y+110/800*h)
  vertex(x+50/800*w, y+20/800*h)
  vertex(x+140/800*w, y+130/800*h)
  endShape()
  beginShape()
  vertex(x+330/800*w, y+110/800*h)
  vertex(x+600/800*w, y+30/800*h)
  vertex(x+505/800*w, y+155/800*w)
  endShape()
  circle(x+320/800*w, y+210/800*h, 100)
  fill(255)
  circle(x+245/800*w, y+175/800*h, 20)
  circle(x+400/800*w, y+175/800*h, 20)
  fill (255, 182, 193)
  triangle(x+280/800*w, y+230/800*h, x+360/800*w, y+230/800*h, x+320/800*w, y+260/800*h)
  line (x+320/800*w, y+300/800*h, x+320/800*w, y+260/800*h)
  noFill()
  arc(x+320/800*w, y+275/800*h, w-150, h-215, 0, PI)
  fill(255, 165, 0)
  triangle(x+320/800*w, y+385/800*h, x+20/800*w, y+h, x+620/800*w, y+h)
  triangle(x+70/800*w, y+h, x+180/800*w, y+650/800*h, x+270/800*w, y+h)
  triangle(x+550/800*w, y+h, x+370/800*w, y+h, x+440/800*w, y+650/800*h)
  triangle(x+510/800*w, y+650/800*h, x+730/800*w, y+550/800*h, x+615/800*w, y+790/800*h)
}