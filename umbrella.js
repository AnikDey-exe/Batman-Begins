class Umbrella
{
    constructor(x,y)
    {
       var options =
       {
          isStatic: true
       }

       this.x = x;
       this.y = y;
       this.body = Bodies.rectangle(this.x,this.y,100,120,options);
       this.image = loadImage("man.png");
       World.add(world,this.body);
    }

    display()
    { 
       var pos = this.body.position;
       imageMode(CENTER);
       image(this.image,pos.x,pos.y,100,120);
    }
}