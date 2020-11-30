var car,wall,speed,weight,deform

function setup() {
  createCanvas(800,300);
 car  =  createSprite(200,140,20,20);
 wall =  createSprite(700,140,20,190);
 speed =  random(55,90);
 weight =  random(400,1500);
 car.velocityX = speed;

}

function draw() {
  background(0);  
 if(car.isTouching(wall)){
    car.velocityX= 0 ;
    deform =  0.5*weight*speed*speed/22500;
if (deform<100){
  car.shapeColor = "green";
}
  
if (deform<180 && deform>100){
  car.shapeColor = "yellow";
}
  
if (deform>180){
  car.shapeColor = "red";
}
 }
  drawSprites();
}



