var car , wall;

var carspeed , weight;

var deformation;

function setup() {
  createCanvas(1600,400);

  carspeed = random(55,90);
  weight = random(400,1500);

  deformation = 0.5*weight*carspeed*carspeed/22500;

  car = createSprite(50, 200, 100, 50);
  car.shapeColor = "blue";
  car.velocityX = carspeed;


  wall = createSprite(1500,200,60,height/2)
  wall.shapeColor = "brown";

  
  
}

function draw() {
  background("black");  
 
  if(wall.x - car.x < (car.width+wall.width)/2){

   car.velocityX = 0;

    if(deformation > 180){

      car.shapeColor = "red";

    }

    if(deformation < 180 && deformation > 100){

      car.shapeColor = "yellow";

    }

    if(deformation < 100){

      car.shapeColor = "green";

    } 

  }

  drawSprites();
}