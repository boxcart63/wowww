class Enemy{
    constructor(){
        enemy=createSprite(random(100,300),100,50,50)
        this.cooldown=0
        this.cooldown2=5
    }
    meat(){
        
     if(this.cooldown==0){
        if(enemy.isTouching(attack)&&attacking1==1){
              score+=1 
              this.cooldown=2
              enemy.x=random(100,300)
       
        }else if (enemy.isTouching(cover)&&attacking1==0){
            if(invincible<=0){
           player.life-=1
           invincible=2
            
            }
         }
        }
        if(this.cooldown>0){
            this.cooldown-=0.05
            enemy.visible=false
            
        }else{
            enemy.visible=true
            if(this.cooldown2>0){
                this.cooldown2-=0.05
            }else{
                proj.shoot(enemy.x,enemy.y)
                this.cooldown2=5
            }
        }
       
      
       
        if(this.cooldown<0){
            this.cooldown=0
        }
        if(this.cooldown2<0){
            this.cooldown=0
        }
    
    }       
}