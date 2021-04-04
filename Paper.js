class Paper{
    constructor(x,y,width,height)  {
        var options={
            isStatic:false,
            restitution:0.83,
            friction:0.5,
            density:1.2

            }
        this.body=Body.ellipse(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)

         } 
         display(){
             var pos=this.body.position
            
             translate(pos.x,pos.y)
             
             ellipseMode(CENTER)
             fill("green")
             ellipse(pos.x,pos.y,this.width,this.height)
          
         }
}