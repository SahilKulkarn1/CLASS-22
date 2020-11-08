const Engine= Matter.Engine;
const World= Matter.World; 
const Bodies= Matter.Bodies;

var engine,world;
var ground;
var ball; 


function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world= engine.world;

  groundOptions = { 
    isStatic : true
  }

 ground= Bodies.rectangle(200,380,400,10,groundOptions);
  World.add(world,ground)

  ballOptions = {
  restitution: 1
  }

  ball= Bodies.circle(200,50,50, ballOptions)
  World.add(world,ball)
  console.log(ground);
  
}

function draw() {
  background(0);
  
  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)

  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,50)
  
}