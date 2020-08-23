const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, bob1, bob2, bob3, bob4, bob5 ;
var rope1, rope2, rope3, rope4, rope5;

// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
	ground = Bodies.rectangle(400, 250, 300, 20 , {isStatic:true} );
 	World.add(world, ground);
	
	 bob1 = new Bob(400,450,30);
	 bob2 = new Bob(340,450,30);
	 bob3 = new Bob(280,450,30);
	 bob4 = new Bob(460,450,30);
   bob5 = new Bob(520,450,30);
  
    rope1 = new Rope(bob1.body, {x:ground.position.x, y:250});
    rope2 = new Rope(bob2.body, {x:ground.position.x-2*bob2.radius, y:250});
    rope3 = new Rope(bob3.body, {x:ground.position.x-4*bob3.radius, y:250});
    rope4 = new Rope(bob4.body, {x:ground.position.x+2*bob4.radius, y:250});
    rope5 = new Rope(bob5.body, {x:ground.position.x+4*bob5.radius, y:250});



	Engine.run(engine);
  
}


function draw() {
  background("grey");

  Engine.update(engine);
  rectMode(CENTER);
  
  fill(255,0,0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,20);

  fill("gold")
   bob1.display();
   bob2.display();
   bob3.display();
   bob4.display();
   bob5.display();
  
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW ){
    Matter.Body.applyForce(bob3.body, bob3.body.position,{x:-200,y:100});
  }
}



