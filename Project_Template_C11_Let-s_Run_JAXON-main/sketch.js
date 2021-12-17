
function preload(){
  pathImg=loadImage("path.png")
  boyAnimation=loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.scale=1.2
  boy=createSprite(200,350)
  boy.addAnimation("abc",boyAnimation)
  boy.scale=0.1
  leftBoundary=createSprite(75,0,25,800)
  leftBoundary.shapeColor="white"
}
function draw() {
  background(0);
if(path.y>400){
  path.y=height/2
}
boy.x=mouseX
drawSprites()
}
