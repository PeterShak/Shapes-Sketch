function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill(100)
  square(0,0,600)
  stroke(0)
  fill(255, 165, 0)
  beginShape()
  vertex(270, 110)
  vertex(240, 90)
  vertex(255, 125)
  endShape()
  beginShape()
  vertex(330, 110)
  vertex(370, 93)
  vertex(347, 130)
  endShape()
  circle(300, 150, 100)
  fill(255)
  circle(280, 140, 20)
  circle(320, 140, 20)
  fill (255, 182, 193)
  triangle(290, 155, 310, 155, 300, 165)
  line (300, 165, 300, 180)
  noFill()
  arc(300, 174, 50, 15, 0, PI)
  fill(255, 165, 0)
  triangle(300, 200, 220, 320, 380, 320)
  triangle(250, 320, 290, 320, 270, 280)
  triangle(328, 280, 350, 320, 310, 320)
  triangle(380, 320, 420, 260, 360, 290)
}