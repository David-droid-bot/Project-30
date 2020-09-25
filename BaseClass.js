class BaseClass{
    constructor(x, y, width, height,angle) {
        var options = {
             'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x=x;
        this.y=y;
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");
       this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world, this.body);
      }
      display(){
        var angle=this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
       rotate(angle);
        rectMode(CENTER);
        fill("pink");
        rect( 0, 0, this.width, this.height);
        pop();
      }
}