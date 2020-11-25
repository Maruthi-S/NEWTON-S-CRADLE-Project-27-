
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rooftop;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(600,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball1 = new ball(200,300,6);
	ball2 = new ball(240,300,6);
  ball3 = new ball(280,300,6);
	ball4 = new ball(320,300,6);
  ball5 = new ball(360,300,6);

  rooftop = new roof(300,30,350,20);

  rope1 = new Rope(ball1.body,rooftop.body,-100,0);
  rope2 = new Rope(ball2.body,rooftop.body,-60,0);
  rope3 = new Rope(ball3.body,rooftop.body,-20,0);
  rope4 = new Rope(ball4.body,rooftop.body,20,0);
  rope5 = new Rope(ball5.body,rooftop.body,60,0);
}


function draw() {
  rectMode(CENTER);
  background(215);
  
  Engine.update(engine);

  rooftop.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
}
 
function keyPressed() {
	if(keyCode === UP_ARROW) {
    
    Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-12 , y:-40})
  
  }
}


