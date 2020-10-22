//var paper,paper_img,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  paper_img = loadImage("paper.png");
}


function setup() {
	createCanvas(800, 300);

	engine = Engine.create();
	world = engine.world;
	
	ground = createSprite(10,275,1600,20);
	ground.shapeColor = "yellow"
	
    var paper_options ={
		restitution:0.3,
		friction:0.5,
		density:1.2
    }

	box1 = createSprite(730,255,150,20);
	box1.shapeColor = "red";
	box2 = createSprite(665,230,20,60);
	box2.shapeColor = "red";
	box3 = createSprite(795,230,20,60);
	box3.shapeColor = "red";

	paper = Bodies.circle(70,10,9,paper_options);
	World.add(world,paper);
	
	ground = Bodies.rectangle(10,275,1600,20,{isStatic:true});
	World.add(world,ground);

	box1 = Bodies.rectangle(730,255,150,20,{isStatic:true});
	World.add(world,box1);

	box2 = Bodies.rectangle(665,230,20,60,{isStatic:true});
	World.add(world,box2);

	box3 = Bodies.rectangle(795,230,20,60,{isStatic:true});
	World.add(world,box3);

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  imageMode(CENTER);
  image(paper_img,paper.position.x,paper.position.y,20,20);
  drawSprites();
 
}
function keyPressed(){
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(paper,paper.position,{x:13,y:-13})
  }
}


