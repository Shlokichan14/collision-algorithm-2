var fixedRect, movingRect,gameObj1,gameObj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1=createSprite(100,100,50,50);
  gameObj1.shapeColor="yellow";
  gameObj2=createSprite(200,100,50,50);
  gameObj2.shapeColor="pink";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObj2)){
    movingRect.shapeColor = "blue";
  gameObj2.shapeColor = "blue";

  }
  else{
    movingRect.shapeColor = "green";
  gameObj2.shapeColor = "pink";

  }
 
  drawSprites();
}
function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
  
     return true; 
}
else {
  return false;
}
}