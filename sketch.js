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
  createCanvas(800, 800);
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
  esb(220,90,200,230)
}


function esb(x,y,w,h) {
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
  vertex(x+505/j*w, y+155/j*w)
  endShape()
  circle(x+p/j*w, y+210/j*h, 100)
  fill(Ong)
  circle(x+245/j*w, y+n/j*h, m)
  circle(x+400/j*w, y+n/j*h, m)
  fill (Ong, oNg+17, onG+193)
  triangle(x+280/j*w, y+g/j*h, x+360/j*w, y+g/j*h, x+p/j*w, y+l/j*h)
  line (x+p/j*w, y+300/j*h, x+p/j*w, y+l/j*h)
  noFill()
  arc(x+p/j*w, y+275/j*h, w-150, h-215, 0, PI)
  fill(Ong, oNg, onG)
  triangle(x+p/j*w, y+385/j*h, x+m/j*w, y+h, x+620/j*w, y+h)
  triangle(x+70/j*w, y+h, x+180/j*w, y+e/j*h, x+270/j*w, y+h)
  triangle(x+f/j*w, y+h, x+370/j*w, y+h, x+440/j*w, y+e/j*h)
  triangle(x+510/j*w, y+e/j*h, x+730/j*w, y+f/j*h, x+615/j*w, y+790/j*h)
}
