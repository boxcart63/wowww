class Projectile{
    constructor(){
       
    }
    shoot(x,y){
        if(projectiles.length<10){
        var proj=createSprite(x,y,30,30)
        proj.shapeColor="red"
        
        projectiles.push(proj)
        }
    }
    meat(){

        for(var i=0;i<projectiles.length;i+=1){
           
            if(projectiles[i]!==undefined){
            if(projectiles[i].isTouching(attack)&&attacking1==1){
               
                projectiles[i].remove()
                delete projectiles[i]
            }else if (projectiles[i].isTouching(cover)&&attacking1==0){
                if(gamestate==1){
                if(invincible<=0){
               player.life-=1
               invincible=2
                projectiles[i].remove()
                delete projectiles[i]
                }
            }
            }
            if(projectiles[i]){ 
            projectiles[i].attractionPoint(1,attack.x,attack.y)
            projectiles[i].rotation+=5
            }
        }
        }
    }
}