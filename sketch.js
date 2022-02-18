var moon,moonImage;
var skyImage;
var pipe,pipeImage;
var hero,heroImage;
var score=0
var obsGroup;
var play=1,end=0;
var gameState=play
var pipe1

function preload(){

skyImage=loadImage("bg.png")
moonImage=loadImage("moon.png")
pipeImage=loadImage("pipe.png")
heroImage=loadImage("hero.png")
//boom
}

function setup(){
    createCanvas(1279,600)
    moon=createSprite(1250,100,6,6)

    hero=createSprite(200,300,200,200)
    hero.addImage(heroImage)
    hero.scale=0.1
   obsGroup=createGroup()

   moon.addImage(moonImage)
   moon.velocity.x=-3
   moon.scale=0.09
 
  }

function draw(){
  if(keyDown("R")){
    console.log("restart")
   
  }
 if(gameState===play){

  if(keyDown("SPACE")){
    hero.y=hero.y-10
  }  
  else{
hero.y=hero.y+7
  }
// the below one is to move moon
  if(moon.x<-10){
    moon.x=1250
    }

    score =score + Math.round(frameCount/100);

    if(obsGroup.isTouching(hero)){
     gameState=end
    
     
       } 
       begin();
 
       background(skyImage)
      }

       if(gameState===end){

      
       
       
       
         hero.y=200
         
      
     hero.x=200

      
       textSize(59)
     
       text("TRY AGAIN ",450,300)

      obsGroup.destroy();
      moon.destroy();

     
       }
   
  
    
    
   
   

    
    
    textSize(59)
    text("Score-"+score,900,50)


   
    
   
   
    drawSprites();}

function begin(){
  
if(frameCount%70===0){

pipe=createSprite(1450,520,30,30)
pipe1=createSprite(1450,30,30,30)

pipe1.addImage(pipeImage)
pipe.addImage(pipeImage)

obsGroup.add(pipe,pipe1)

pipe.velocityX=-(1+score/3);
pipe1.velocityX=-(1+score/3);

pipe.scale=(random(0.20,0.50))
pipe1.scale=(random(0.20,0.40))

pipe.lifeTime=5
pipe1.lifeTime=5 

}

}