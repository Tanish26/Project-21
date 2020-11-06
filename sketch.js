var thickness, wall;
var  bullet,speed, weight;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60, thickness, height/2);
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
  }

  if(damage<10)
  {
     wall.shapeColor=color(255,0,0);

  }
   
   hasCollided()
  
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=1bullet.x +1bullet.width;
  wallLeftEdge=1wall.x;
   if (bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   
   return false;
}