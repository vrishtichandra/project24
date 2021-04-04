
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box,box2,box3,ground,paper

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	Ground=new Ground(600,height,800,30)
	box=new Dustbin(600,600,60,200)
	box2=new Dustbin(660,740,100,50)
	box3=new Dustbin(760,600,60,200)
  paper=new Paper(100,650,50,70)
}


function draw() {
  background(0)
	Engine.update(engine)
  Ground.display()
  box.display()
  box2.display()
  box3.display()
paper.display()
 KeyPressed()
}
function KeyPressed(){
	if(Keycode===UP_ARROW){Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}
	
}





