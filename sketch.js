var fixedRect,movingRect
var rect1,rect2
var rect3,rect4
var obj1,obj2,obj3,obj4
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
fixedRect.shapeColor="green"
obj1 = createSprite(100,100,50,50)
obj1.shapeColor= "green"
obj2 = createSprite(200,100,50,50)
obj2.shapeColor= "green"
obj3 = createSprite(300,100,50,50)
obj3.shapeColor= "green"
obj4 = createSprite(400,100,50,50)
obj4.shapeColor= "green"
  movingRect=createSprite(400, 200, 80, 30);
 movingRect.shapeColor="green"
 fixedRect.debug=true
 movingRect.debug=true
 rect1=createSprite(400,100,80,80)
 rect1.shapeColor="yellow"
 rect2=createSprite(400,600,80,80)
 rect2.shapeColor="blue"
 rect1.velocityY=+5
 rect2.velocityY= -5
 rect3=createSprite(100,400,50,50)
 rect3.shapeColor="orange"
 rect4=createSprite(600,400,50,50)
 rect4.shapeColor="pink"
 rect3.velocityX=5
 rect4.velocityX=-5
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX
  movingRect.y=mouseY
  if(isTouching(movingRect,obj2)){
    movingRect.shapeColor="red"
    obj2.shapeColor="red"
  }
  else{  
    movingRect.shapeColor="green"
  obj2.shapeColor="green"
  }
  bounceOff(rect1,rect2)
  bounceOff(rect3,rect4)
  drawSprites();
}
