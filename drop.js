class Drop
{
    constructor(x,y)
    {
       var options =
       {
           restitution: 0.3,
           friction: 0.1,
           stiffness: 0.01,
           isStatic: false
       }

       this.x = x;
       this.y = y;
       this.body = Bodies.circle(this.x,this.y,2,options);
       World.add(world,this.body);
    }
    
    display()
    {
        var pos = this.body.position;

        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,2);
    }

    update()
    {
        if(this.body.position.y > 400)
        {
           Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }

    update1()
    {
        if(this.body.position.y > 550)
        {
           Matter.Body.setPosition(this.body,{x:random(0,400),y:random(470,550)});
        }
    }
}