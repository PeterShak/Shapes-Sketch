let j 
let k
let Ong
let oNg
let p
let n
let m
let g
let l
let f
let e
function setup() {
  createCanvas(600, 600);
   j = 800
   k = 110
   Ong = 255
   oNg = 165
   onG = 0
   p = 320
   n = 175
   m = 20
   g = 230
   l = 260
   f = 550
   e = 650
}
function draw(){
  myShape(220,90,200,230)
}


function myShape(x,y,w,h) {
  background(220);
  stroke(0)
  fill(Ong, oNg, onG)
  beginShape()
  vertex(x+270/j*w, y+k/j*h)
  vertex(x+50/j*w, y+20/j*h)
  vertex(x+140/j*w, y+130/j*h)
  endShape()
  beginShape()
  vertex(x+330/j*w, y+k/j*h)
  vertex(x+600/j*w, y+30/j*h)
  vertex(x+505/j*w, y+155/j*h)
  endShape()
  fill (Ong, oNg, onG)
  beginShape()
  vertex(x+30/j*w, y+100/j*h)
  vertex(x+30/j*w, y+385/j*h)
  vertex(x+600/j*w, y+385/j*h)
  vertex(x+600/j*w, y+100/j*h)
  vertex(x+30/j*w, y+100/j*h)
  endShape()
  fill(0)
  beginShape()
  vertex(x+150/j*w, y+160/j*h)
  vertex(x+240/j*w, y+160/j*h)
  vertex(x+240/j*w, y+190/j*h)
  vertex(x+150/j*w, y+190/j*h)
  endShape()
  beginShape()
  vertex(x+400/j*w, y+160/j*h)
  vertex(x+500/j*w, y+160/j*h)
  vertex(x+500/j*w, y+190/j*h)
  vertex(x+400/j*w, y+190/j*h)
  endShape()
  fill (Ong, oNg+17, onG+193)
  triangle(x+280/j*w, y+g/j*h, x+360/j*w, y+g/j*h, x+p/j*w, y+l/j*h)
  fill(Ong, oNg, onG)
  triangle(x+p/j*w, y+385/j*h, x+m/j*w, 800*(y+h)/j, x+620/j*w, y+h+400/j)
  triangle(x+70/j*w, y+h+400/j, x+180/j*w, y+e/j*h, x+270/j*w, y+h+400/j)
  triangle(x+f/j*w, y+h+400/j, x+370/j*w, y+h+400/j, x+440/j*w, y+e/j*h)
  triangle(x+510/j*w, y+e/j*h, x+730/j*w, y+f/j*h, x+615/j*w, y+790/j*h)
}