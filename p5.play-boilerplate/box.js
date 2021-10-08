class BoxClass {
    constructor(x,y,width,height){
        var options = {
            friction:1,
            stiffness:0.04,
        }
        this.height=height
        this.width=width
        this.body=Bodies.rectangle(x,y,this.width,this.height,options)
        World.add(world,this.body)


    }
    display(){
        var pos = this.body.position
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        
    }
}