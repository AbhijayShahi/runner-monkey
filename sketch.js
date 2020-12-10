
var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananasGroup, obstaclesGroup;
var ground;
var survivalTime = 0
var jungle;
var backgroundImg;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
 obstacleImage = loadImage("obstacle.png");
 backgroundImg=loadImage("jungle.png")
}


function setup() {
 
 createCanvas(400,400);

 jungle = createSprite(200,200,10,10);
  jungle.addImage(backgroundImg);
  jungle.scale=1.1;
  jungle.x = jungle.width / 2;

  monkey = createSprite(50, 350, 20, 50);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;

  ground = createSprite(200, 350, 600, 5);
  ground.visible = false;
  
  obstaclesGroup = new Group();
  bananasGroup = new Group();
}

function draw() {
  jungle.velocityX = -4;
  if (jungle.x < 0) {
    jungle.x = jungle.width / 2;
  }
 

     if (keyDown("space") && monkey.y >= 250) {
    monkey.velocityY = -12;
  }
    
    
    monkey.velocityY = monkey.velocityY + 0.8;
  if(obstaclesGroup.isTouching(monkey)){
  monkey.x=0
  jungle.velocityX = 0;
 obstaclesGroup.setVelocityXEach(0);
    bananasGroup.setVelocityXEach(0);
     obstaclesGroup.setLifetimeEach(-1);
    bananasGroup.setLifetimeEach(-1);
  }
    
  drawSprites();
   stroke("black");
    textSize("30");
    fill("black");
    survivalTime = Math.ceil(frameCount / frameRate())
    text("SURVIVAL TIME =" + survivalTime, 100, 50)


  
  
  
  
  obstacles();
  bananas();

   
  monkey.collide(ground);
  
}

function obstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 330, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.25
    obstacle.velocityX = -4
    obstacle.lifetime = 300;
    
    obstaclesGroup.add(obstacle)
    
  }
}

function bananas() {
  if (frameCount % 150 === 0) {
    banana = createSprite(400,-500,20,600);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4
    banana.lifetime = 300;
    bananasGroup.add(banana);
    banana.y = Math.round(random(200, 280));
  }

}






