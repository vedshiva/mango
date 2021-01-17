
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy, stone, tree;

function preload()
{
	boy = loadImage ("Plucking mangoes/boy.png");
	tree = loadImage ("Plucking mangoes/tree.png");
}

function setup() {
	createCanvas(1200, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango (900,350);
	mango2 = new Mango (880,460); 
	mango3 = new Mango (950,420);
	mango4 = new Mango (1010,380);
	mango5 = new Mango (1050,430);

	stone = new Stone (80,450,50);

	rubber = new Rubber(stone.body,{x:185,y:475})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  image (boy,150,400,200,300);

  image (tree,800,300,300,400);

  stone.display();

  mango1.display ();
  mango2.display ();
  mango3.display ();
  mango4.display ();
  mango5.display ();

  rubber.display ();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  
  drawSprites();
 
}

function keyPreesed(){
	if (keyCode = 32){
		Matter.body.setPosition(stone.body,{x:80,y:450});
		rubber.attach (stone.body);
	}
}

function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if (distance<=lmango.r+lstone.r){
		Matter.body.setStatic (lmango.body,false);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    fly();
}