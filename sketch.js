const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var player
var plat1,plat2,plat3
var parray
var attacking1=0
var cooldown=50
var projectiles
var attack
var attack2
var proj
var invincible=0
var score=0
var timer=50
var enemy
var enemyclass
var powersprite
var powerup
var next
var skip
var buffer=0
gamestate="intro1"
//intro1(title) intro2(player) intro3(enemy) intro4(stats) intro5(rules) settings 1(play) 0(dead) 2(win)
function preload(){


}

function setup(){
canvas=createCanvas(500,500)
engine= Engine.create()
world=engine.world
ellipseMode(RADIUS)
rectMode(CENTER)

ground= Bodies.rectangle(250,500,1000,50,{
isStatic:true
})
wall1= Bodies.rectangle(500,250,20,5000,{
  isStatic:true
  })
  wall2= Bodies.rectangle(0,250,20,5000,{
    isStatic:true
    })
ceiling= Bodies.rectangle(250,-150,500,200,{
  isStatic:true
})
World.add(world,ground)
World.add(world,ceiling)
World.add(world,wall1)
World.add(world,wall2)
player=new Player()
plat1=new Platform(525,400,-5)
plat2=new Platform(0,250,5)
plat3=new Platform(525,100,-5)
proj=new Projectile()
enemyclass=new Enemy()
powerup=new Powerup()
parray=[]
projectiles=[]
parray.push(plat1)
parray.push(plat2)
parray.push(plat3)
bar=createSprite(50,50,player.stamina,20)
bar.shapeColor="green"
bar2=createSprite(50,70,cooldown,20)
bar2.shapeColor="blue"
bar3=createSprite(50,90,player.life*15,20)
bar3.shapeColor="red"
attack=createSprite(200,200,70,70)
attack.shapeColor="cyan"
attack2=createSprite(200,200,50,50)
attack2.shapeColor="gray"
next=createSprite(200,200,100,50)
skip=createSprite(400,450,200,50)
skip.visible=false
cover=createSprite(250,250,40,40)
cover.shapeColor="green"

}

function draw(){
  if(buffer>0){
    buffer-=0.1
  }
  if(buffer<0){
    buffer=0
  }
  background("light_gray")
  Engine.update(engine)
  rect(ground.position.x,ground.position.y,500,50)
  //Player
  console.log("gamestate:"+gamestate+" buffer:"+buffer)
 
  drawSprites()
  player.show()
  player.movement()
  fill("black")
  if(gamestate=="intro1"){
    enemy.visible=false
  powersprite.visible=false
  bar.visible=false
  bar2.visible=false
  bar3.visible=false
  textSize(40)
    text("Welcome, to this thing ",70,200)
    fill("green")
    text("start?",200,300)
    fill("red")
    text("skip tutorial",300,450)
    next.x=250
    next.y=290
    
    if(mousePressedOver(next)&&buffer==0){
      gamestate="intro2"
      buffer=5
    }
  }
  if(gamestate=="intro2"){
    textSize(20)
    text("You are the little blue ball",100,100)
    textSize(15)
    text("press Up to go up(not infinte tho (: ) ",50,150)
    text("LEFT and RIGHT to move... left and right",50,200)
    text("DOWN do stomp downwards",50,250)
    textSize(40)
    fill("green")
    text("Next",200,300)
    fill("red")
    text("skip tutorial",300,450)
    if(mousePressedOver(next)&&buffer==0){
      gamestate="intro3"
      buffer=10
    }
  }
  if(gamestate=="intro3"){
    textSize(20)
    text("This is your main enemy that you kill,or kills you",20,50)
    textSize(15)
    enemyclass.meat() 
    proj.meat()
    player.life=3
    cooldown=50
    text("it shoots homing projectiles every few seconds",100,150)
    text("both it and the projectiles can be destoyed by pressing SPACE ",20,200)
    text("touching enemy or projectile makes you lose life",20,250)
   
    if(mousePressedOver(next)&&buffer==0){
      gamestate="intro4"
      buffer=10
    }
  }
  if(gamestate=="intro4"){
    bar.visible=true
  bar2.visible=true
  bar3.visible=true
  enemy.visible=false
  powersprite.visible=true
  textSize(20)
  text("These are your stats pay attention at all cost",60,50)
  textSize(15)
  fill("green")
  text("Green is stamina(how much you can fly)",50,125)
  fill("red")
  text("Red is health(reach 0 you die)",50,150)
  fill("blue")
  text("Blue is your attack cooldown(how long you can attack)",50,175)
  powerup.meat()
  fill("black")
  text("You will see little pixels that spawn.",10,250)
  text("These are powerups that increase your stats dependant on color",10,300) 
  if(mousePressedOver(next)&&buffer==0){
    gamestate="intro5"
    buffer=10
  }
}
if(gamestate=="intro5"){
  text
  enemy.visible=false
  powersprite.visible=false
  bar.visible=false
  bar2.visible=false
  bar3.visible=false
  text("Killing enemies give SCORE",10,100)
  text("Have the timer go down to 0 and have a score of 5 or more to win",10,125)
  text("if life=0 or not enough score you lose",10,150)
  text("Good luck and good bye blue ball",10,175)

  if(mousePressedOver(next)&&buffer==0){
    gamestate=1
    buffer=10
    enemy.visible=true
  powersprite.visible=true
  bar.visible=true
  bar2.visible=true
  bar3.visible=true
  }
}
  if(mousePressedOver(skip)){
    if(gamestate=="intro1"||gamestate=="intro2"||gamestate=="intro3"||gamestate=="intro4"||gamestate=="intro5")
    gamestate=1
  }
  if(gamestate==1||gamestate==2||gamestate==0){
  plat1.show()
  plat1.move()
  plat2.show()
  plat2.move()
  plat3.show()
  plat3.move()
  
  proj.meat()
  powerup.meat()
  //console.log("cooldown:"+powerup.cooldown+", what:"+powerup.what+", onscreen:"+powerup.onscreen)
  
  enemyclass.meat() 
  if(player.stamina>0){
  bar.width=player.stamina
  }else{
    bar.width=1
  }
  if(cooldown>0){
    bar2.width=cooldown
    }else{
      cooldown=1
    }
    if(player.life>0){
      bar3.width=player.life*15
      }else{
        bar3.width=0
      }

}
cover.depth=player.depth+1
  cover.x=player.body.position.x
 cover.y=player.body.position.y
 for(var i=0;i<3;i+=1){
  var collision=Matter.SAT.collides(player.body,parray[i].body)
  if(collision.collided){
    player.stamina+=1
  }
  if(player.life==0){
    gamestate=0
  }
   if(gamestate==0){
    textSize(40)
    text("You Lose",250,100)
    textSize(15)
    text("R to restart",250,200)
    if(keyDown("r")){
     location.reload()
    }
   } 
   if(gamestate==1){
    textSize(15)
    text("Timer:"+Math.round(timer),350,50)
    text("Score:"+score,350,70)
    timer-=1/60
   }
   attacking()
} 

groundmina()

if(invincible>0){
  
  
  invincible-=0.1
  invincEffx()
}else{
  invincible=0
  cover.visible=false
}
  
}
function groundmina(){
  var collision=Matter.SAT.collides(player.body,ground)
  if(collision.collided){
    player.stamina+=1
  }
}
function attacking(){
  if(keyDown("space")&&cooldown>5){
   attacking1=1
   cooldown-=5 
  }else{
    attacking1=0
    if(cooldown<50){
    cooldown+=0.1
    }
  }

  attack.x=player.body.position.x
  attack.y=player.body.position.y
  attack2.x=player.body.position.x
  attack2.y=player.body.position.y
  attack.rotation=attack.rotation+40
  attack2.rotation+=30
  if(attacking1==1){
    attack.visible=true
    attack2.visible=true
  }else{
    attack.visible=false
    attack2.visible=false
  }
}
function invincEffx(){
  cover.visible=true
 
  
}