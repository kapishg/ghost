var ab
var d
function setup() {
  createCanvas(800,400);
  ab=createSprite(400, 200, 50, 50);
  d = createSprite(500,200,30,30);

}

function draw() {
  background(255,255,255);  

if(ab.x-d.x<ab.width/2+d.width/2
&&ab.y-d.y<ab.width/2+d.width/2
  &&d.y-ab.y<ab.width/2+d.width/2
  &&d.x-ab.x<ab.width/2+d.width/2
){
alert("hi")
}
  d.y=mouseY
d.x=mouseX




  drawSprites();
}