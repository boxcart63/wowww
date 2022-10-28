class Platform{
    constructor(x,y,v){
        this.x=x
        this.y=y
        var options={
            restitution:0,
            isStatic:true
        }
        this.body=Bodies.rectangle(this.x,this.y,100,10,options)
        this.velocityX=v
                World.add(world,this.body)
    }
    show(){
        push()
        rect(this.body.position.x,this.body.position.y,100,10)
        pop()
    }
   
    move(){
        Matter.Body.setPosition(this.body,{x:this.body.position.x+this.velocityX,y:this.body.position.y})
        if(this.body.position.x>550){
            Matter.Body.setPosition(this.body,{x:-50,y:random(100,400)})
             this.velocityX=random(1,10)
             
         }
         if(this.body.position.x<-50){
             Matter.Body.setPosition(this.body,{x:550,y:random(100,400)})
             this.velocityX=random(-10,-1)
         }
    }
}