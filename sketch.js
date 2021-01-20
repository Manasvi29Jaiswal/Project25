const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,box1,box2,box3;
var bin;
var BinSprite,BinImage;

function preload()
{
	BinImage=loadImage("dustbin.png")
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	BinSprite=createSprite(660,600,50,50)
	BinSprite.addImage(BinImage)
	BinSprite.scale=0.5
	
	paper = new Paper(50,620);
	ground = new Ground(500,690,width,20);
	
	box1 = new Dustbin(600,600,10,165);
	box2 = new Dustbin(720,600,10,165);
	box3 = new Dustbin(660,675,130,10);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("chartreuse");

  paper.display();
  ground.display();
  
  box1.display();
  box2.display();
  box3.display();
 
  
  keyPressed();
  
  drawSprites();
 
}


function keyPressed(){

if(keyDown("UP_ARROW")){

Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70})

}

}

