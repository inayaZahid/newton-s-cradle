class Bob{
  constructor(x,y,r){
      var options={
          isStatic:true,
          'restitution':1,
         'friction':0,
         'density':7.8
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body = Bodies.circle(x,y,20,options)
      World.add(world,this.body);

     // console.log(this.body);


  }
  display(){
    var paperPos=this.body.position;
    push();
    translate(paperPos.x,paperPos.y)
    ellipseMode(RADIUS);
    fill(254,0,255);
    ellipse(0,0,25,25)
   pop();

  }
}