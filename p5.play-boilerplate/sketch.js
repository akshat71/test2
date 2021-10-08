
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world,a,score=0
var invisible1,invisible2,invisible3,invisible4,camera1
var NPC1,NPC2
var SmallStone1,SmallStone2,SmallStone3,SmallStone4,SmallStone5,SmallStone6,SmallStone7,SmallStone8,SmallStone9,
    SmallStone10,SmallStone11,SmallStone12,SmallStone13,SmallStone14,SmallStone15




function preload(){
bgfield=loadImage("Background field.jpeg")
ironImg=loadImage("iron pickaxe.png")
WoodImg=loadImage("Pickaxe wooden.png")
StoneImg=loadImage("stone pickaxe.jpeg")
ManIMG=loadImage("man_walking1-removebg-preview.png")
ZombieImg=loadImage("zombie-removebg-preview.png")
} 

function setup() {

  createCanvas(2000,975);

 engine = Engine.create()
 world=engine.world

//Visible Sprites

a = createSprite(50,50,40,40)
a.addImage("man",ManIMG)
a.scale=0.25

NPC1=createSprite(1000,475,40,40)
NPC1.addImage("Zombie",ZombieImg)
NPC1.scale=0.5
NPC2=createSprite(1000,400,40,40)
NPC2.addImage("Zombie",ZombieImg)
NPC2.scale=0.5

SmallStone1 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone2 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone3 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone4 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone5 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone6 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone7 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone8 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone9 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone10= createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone11 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone12 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone13 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone14 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)
SmallStone15 = createSprite(Math.round(random(10,1900)),Math.round(random(10,975)),25,25)

//groups
  SmallStone=createGroup()



//Velocity

NPC1.velocityX=Math.round(random(-10,10))
NPC1.velocityY=Math.round(random(-10,10))

NPC2.velocityX=Math.round(random(-10,5))
NPC2.velocityY=Math.round(random(-15,5))

                

//Invisible Sprites

invisible1=createSprite(0,1000,15,2000)
invisible2=createSprite(1000,0,3100,15)
invisible3=createSprite(1000,970,3100,15)
invisible4=createSprite(1900,475,15,2000)

invisible1.visible=false
invisible2.visible=false
invisible3.visible=false
invisible4.visible=false



}

function draw() {
  background(bgfield);  
  text("Score:"+score , 1000,10)

//WASD Movement
  if(keyIsDown(LEFT_ARROW)){
     writePosition(-10,0); 
    }

    if(keyIsDown(RIGHT_ARROW)){
      writePosition(10,0); 
     }

     if(keyIsDown(UP_ARROW)){
      writePosition(0,-10); 
     }

     if(keyIsDown(DOWN_ARROW)){
      writePosition(0,10); 
     }


    

     edges = createEdgeSprites()
     NPC1.bounceOff(edges)
     
     NPC1.bounceOff(NPC2)
     NPC2.bounceOff(NPC1)
     NPC2.bounceOff(edges)

     if(NPC1.isTouching(invisible3)){
      NPC1.velocityX=Math.round(random(-7,9))
      NPC1.velocityY=Math.round(random(-3,9))
      
     }

     if(NPC1.isTouching(invisible2)){
      NPC1.velocityX= Math.round(random(-8,13))
      NPC1.velocityY=Math.round(random(6,10))
      
     }

     if(NPC1.isTouching(invisible1)){
      NPC1.velocityX=Math.round(random(-6,7))
      NPC1.velocityY=Math.round(random(-11,5))
      
     }

     if(NPC1.isTouching(invisible4)){
     NPC1.velocityX=Math.round(random(-8,10))
     NPC1.velocityY=Math.round(random(5,13))
  
     }

     if(NPC2.isTouching(invisible3)){
      NPC2.velocityX=Math.round(random(-8,10))
      NPC2.velocityY=Math.round(random(-12,10))
      
     }

     if(NPC2.isTouching(invisible2)){
      NPC2.velocityX= Math.round(random(-2,6))
      NPC2.velocityY=Math.round(random(-10,8))
      
     }

     if(NPC2.isTouching(invisible1)){
      NPC2.velocityX=Math.round(random(-10,10))
      NPC2.velocityY=Math.round(random(-10,10))
      
     }

     if(NPC2.isTouching(invisible4)){
     NPC2.velocityX=Math.round(random(-10,10))
     NPC2.velocityY=Math.round(random(-10,10))
  
     }

     

     SmallStone.add(SmallStone1)
     SmallStone.add(SmallStone2)
     SmallStone.add(SmallStone3)
     SmallStone.add(SmallStone1)
     SmallStone.add(SmallStone5)
     SmallStone.add(SmallStone6)
     SmallStone.add(SmallStone7)
     SmallStone.add(SmallStone8)
     SmallStone.add(SmallStone9)
     SmallStone.add(SmallStone10)
     SmallStone.add(SmallStone11)
     SmallStone.add(SmallStone12)
     SmallStone.add(SmallStone13)
     SmallStone.add(SmallStone14)
     SmallStone.add(SmallStone15)


if(a.isTouching(SmallStone)){
  score=score+5
}

  
  drawSprites();
}


function writePosition(x,y){
   a.x=a.x + x
   a.y=a.y + y 
   
  }
