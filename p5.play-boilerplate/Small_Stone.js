class SmallStone{
    constructor(x,y,width,height){
              var options = {
                density:1,
                friction:1 
            } 
            this.height=height
            this.width=width
            this.body=Bodies.rectangle(x,y,this.width,this.height,options)
          World.add(world,this.body)        
    }
   display(){
       rectMode(CENTER)
       rect(x,y,this.width,this.height)
       fill("White")
       Stroke(4)
       strokeFill("black")
   }
}