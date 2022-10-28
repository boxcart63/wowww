class Powerup{
    constructor(){
        powersprite=createSprite(random(100,400),random(100,400),10,10)
        this.cooldown=10
        this.random=1
        this.onscreen=0
        this.what=1
    }
    meat(){


        if(this.cooldown<=0){
            this.random=Math.round(random(1,10))
            if(this.random==1){
                this.what=1
            }else if(this.random==2||this.random==3||this.random==4){
                this.what=2
            }else{
                this.what=3
            }
            this.onscreen=1
        }
       if(this.onscreen==0){
            this.cooldown-=0.1
            powersprite.visible=false
        }
        if(this.onscreen==1){
            powersprite.visible=true
            if(this.cooldown<=0){
                this.cooldown=20
            if(this.what==1){
                powersprite.shapeColor="red"
            }
            if(this.what==2){
                powersprite.shapeColor="blue"
            }
            if(this.what==3){
                powersprite.shapeColor="green"
            }
           
           
            }
            if (powersprite.isTouching(cover)){
                if(this.what==1){
                   player.life+=1
                }
                if(this.what==2){
                    cooldown+=25
                }
                if(this.what==3){
                    player.stamina+=25
                }
                this.onscreen=0
              
                powersprite.x=random(100,400)
                powersprite.y=random(100,400)
            }
        }
    



    }
}