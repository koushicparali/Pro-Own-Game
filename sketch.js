var backgroundSprite,shipSprite
var backgroundImage,shipImage,obstacle1,obstacle2
var obstacleGroup
var score=0
var gameState=1

function preload() {
backgroundImage=loadImage("assets/download.png")
shipImage=loadImage("assets/download (1).png")
obstacle1=loadImage("assets/download (2).png")
obstacle2=loadImage("assets/download (3).png")
gameoverSound=loadSound("assets/Game Over sound effect.wav")

}

function setup(){

createCanvas(800,600)

backgroundSprite = createSprite(100,10,1000,1200)
backgroundSprite.velocityY=3
shipSprite=createSprite(50,350,50,50)

obstacleGroup=new Group()

}


function draw() {
  background("White")
  
  if (gameState===1){ 
    score=Math.round(score+(getFrameRate()/60))   
  background("grey")
  backgroundSprite.addImage(backgroundImage)
  backgroundSprite.scale = 2.5
  shipSprite.addImage(shipImage)


  if(backgroundSprite.y > 399)
  {
    backgroundSprite.y = 200
  }
  if (keyDown("UP_ARROW")) {
    shipSprite.y=shipSprite.y-4
 }
 if (keyDown("LEFT")) {
    shipSprite.x=shipSprite.x-4
 }
 if (keyDown("DOWN_ARROW")) {
    shipSprite.y=shipSprite.y+4
 }
 if (keyDown("Right")) {
    shipSprite.x=shipSprite.x+4
 }   
  spawnObstacles()      
  if(shipSprite.isTouching(obstacleGroup)){
    gameoverSound.play()
      gameState=0
  }
}
else if(gameState===0){
    
console.log(123)
 obstacleGroup.destroyEach()
backgroundSprite.visible=false
 shipSprite.visible=false
background("black")
 fill("white")
 textSize(45)



text("Game Over",300,300)
text("Total Score:"+score,300,350)

 obstacleGroup.setVelocityEach(0,0)
 obstacleGroup.setLifetimeEach(0)
 backgroundSprite.velocityY=2
 shipSprite.velocityY=0

}
  drawSprites();
  textSize(25)
  fill("black")
  text("Score:"+score,200,50)
  
}
function spawnObstacles (){

  if(World.frameCount % 100 === 0)

  {
    
 obstacle=createSprite(Math.round(random(10,1000)),200,50,50  )
 var rand = Math.round(random(1,2))
 switch(rand){
   
   case 1 : obstacle.addImage(obstacle1)
            break;
   case 2: obstacle.addImage(obstacle2)
   break
   default : break;
 }
 
 obstacle.scale=0.2
 obstacle.velocityY=1.4 
 obstacleGroup.add(obstacle)

 

  }
}  
