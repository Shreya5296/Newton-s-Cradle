const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//Create multiple bobs, mulitple ropes varibale here

var roof;
var ball,bal2,ball3,ball4,ball5;
var con,con2,con3,con4,con5;
var world;

function setup() {
	createCanvas(800,600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var  ball_options = {
		    restitution: 0.8,
			isStatic : false,
			friction:0,
			density:0.8
		  }
		  
		  ball = Bodies.circle(320,380,20,ball_options);
		  World.add(world,ball);
		
		  ball2 = Bodies.circle(360,380,20,ball_options);
		  World.add(world,ball2);
		
		  ball3 =Bodies.circle(400,380,20,ball_options);
		  World.add(world,ball3);
         
		  ball4 =Bodies.circle(440,380,20,ball_options);
		  World.add(world,ball4);

		  ball5 =Bodies.circle(480,380,20,ball_options);
		  World.add(world,ball5);

		con = new rope(ball,roof,-80,0);
		con2 = new rope(ball2,roof,-40,0);
		con3 = new rope(ball3,roof,0,0);
		con4 = new rope(ball4,roof,40,0);
		con5 = new rope(ball5,roof,80,0);
		Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	con.display();
    con2.display();
    con3.display();
	con4.display();
	con5.display();

  //create ellipse shape for multiple bobs here
     ellipse(ball.position.x,ball.position.y,30);
     ellipse(ball2.position.x,ball2.position.y,30);
     ellipse(ball3.position.x,ball3.position.y,30);
	 ellipse(ball4.position.x,ball3.position.y,30);
	 ellipse(ball5.position.x,ball3.position.y,30);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

 function keyPressed(){

	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:-50,y:-45});
	}
 }