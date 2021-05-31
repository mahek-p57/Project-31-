class Particle{
    constructor(x,y,width){
        var options={
            isStatic:false,
            gravity:3

        }
        this.body.x=x;
        this.body.y=y;
        this.body.width=width;
        this.body=Bodies.circle(x,y,this.r,options);
        this.r=5;
        this.color=color(random(0,255),random(0,255),random(0,255))
        World .add(world,this.body);
    }
  display(){

   

     this.body.color.display(); 
  }
}