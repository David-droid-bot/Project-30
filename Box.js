class Box extends BaseClass{
  constructor(x, y, width, height){
    super(x,y,width,height);
    //this.Visiblity=255;
  }
display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
rectMode(CENTER);
fill("blue");
rect(0, 0, this.width, this.height);
pop();
}
};
