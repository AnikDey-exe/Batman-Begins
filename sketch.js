const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var rand;
var man,lightning,lightningImg1,lightningImg2;
var drops = [];
var drops1 = [];
var maxDrops = 100;
var maxDrops1 = 50;
var lightningDuration;

function preload()
{
   lightningImg1 = loadImage("lighting.png");
   lightningImg2 = loadImage("lighting.png");
}
function setup()
{
   var canvas = createCanvas(400,550); 
   engine = Engine.create();
   world = engine.world;
   man = new Umbrella(200,490);

   for(var i = 0; i < maxDrops; i++)
   {
      drops.push(new Drop(random(0,400),random(0,550)));
   }
    
   for(var j = 0; j < maxDrops1; j++)
   {
      drops1.push(new Drop(random(0,400),random(470,550)));
   }

}

function draw()
{
   Engine.update(engine);
   background("black");

   var rand = Math.round(random(1,2));

   if(frameCount % 100 == 0)
   {
      lightningDuration = frameCount;
      lightning = createSprite(200,100,20,20);
      lightning.scale = 0.5;
      switch(rand){
        case 1: lightning.addImage(lightningImg1);
        break;
        case 2: lightning.addImage(lightningImg2);
        default: break;
      }
   }

   if(lightningDuration + 10 == frameCount)
   {
       lightning.destroy();
   }
   
   man.display();
   
   for(var i = 0; i < maxDrops; i++)
   {
     drops[i].display();
     drops[i].update();
   }

   for(var j = 0; j < maxDrops1; j++)
   {
     drops1[j].display();
     drops1[j].update1();
   }

   drawSprites();
 
}   


