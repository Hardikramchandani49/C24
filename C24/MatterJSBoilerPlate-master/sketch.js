
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ball,bar1,bar2,bar3;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 ground1 = new Ground(200,650,1150,10);
 ball = new Ball(100,635,5,5); 
 bar1 =new Ground(600,580,10,90);
 bar2 =new Ground(650,630,100,10);
 bar3 = new Ground(700,580,10,90);
	

	
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);

  ground1.display();
  ball.display();
  bar1.display();
  bar2.display();
  bar3.display();
 

  
  keyPressed();
  drawSprites();
}

function keyPressed(){
  if(keyDown === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.positon,{x :85,y : -85});
  }
}



