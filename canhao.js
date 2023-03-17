class Canhao{
constructor(x,y,w,h,angulo){
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.angulo = angulo;
this.canhaoImg = loadImage("assets/canon.png");
this.canhaoBase = loadImage("assets/cannonBase.png")
}
display(){
push();
imageMode(CENTER);
image(this.canhaoImg,this.x,this.y,this.w,this.h);
pop();
image(this.canhaoBase,70,20,200,200);
noFill();
}
}