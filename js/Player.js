class Player{
    constructor(){
      this.stamina=50
      this.life=3
    
        var options={
            restitution:0.001,
            friction:1,
            density :1
        }
       this.body= Bodies.circle(250,250,20,options)
       World.add(world,this.body)
    }
    show(){
        if(!gamestate==0){
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,20)
        }
        if(gamestate==0){
           Matter.World.remove(world,this.body) 
        }
    }
    movement(){
        if(!gamestate==0){
        if(keyDown("up_arrow")){
            if(this.stamina>0){
        Matter.Body.applyForce(this.body, {x:0,y:0}, {x:0,y:-3})
        this.stamina-=0.5
            }
        }
        if(keyDown("right_arrow")){
            Matter.Body.applyForce(this.body,{x:0,y:0},{x:1,y:0})
        } 
        if(keyDown("left_arrow")){
            Matter.Body.applyForce(this.body,{x:0,y:0},{x:-1,y:0})
        }  
        if(keyDown("down_arrow")){
            Matter.Body.applyForce(this.body,{x:0,y:0},{x:0,y:5 })
        }
       
        if(this.body.velocity.x>=15){
         Matter.Body.setVelocity(this.body,{x:15,y:0})
        }
        if(this.body.velocity.x<-15){
            Matter.Body.setVelocity(this.body,{x:-15,y:0})
        }
        if(this.body.velocity.y>=10){
            Matter.Body.setVelocity(this.body,{x:0,y:10})
        }
        if(this.stamina<0){
          this.stamina=0  
        }
        if(this.stamina>50){
            this.stamina=50
        }
    }
    }
    
   
}