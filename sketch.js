const Engine = Matter.Engine;
const Worldc= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21,b22,b23,b24,b25,b26,b27,b28,b29,b30,b31;
var shooter1;
var chain1;


function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(900,530,400,20);

    b1 = new box(720,500,40,40);
    b2 = new box(760,500,40,40);
    b3 = new box(800,500,40,40);
    b4 = new box(840,500,40,40);
    b5 = new box(880,500,40,40);
    b6 = new box(920,500,40,40);
    b7 = new box(960,500,40,40);
    b8 = new box(1000,500,40,40);
    b9 = new box(1040,500,40,40);
    b10 = new box(1080,500,40,40);

    b11= new box(760,460,40,40);
    b12= new box(800,460,40,40);
    b13= new box(840,460,40,40);
    b14= new box(880,460,40,40);
    b15= new box(920,460,40,40);
    b16= new box(960,460,40,40);
    b17= new box(1000,460,40,40);
    b18= new box(1040,460,40,40);

    b19= new box(800,420,40,40);
    b20= new box(840,420,40,40);
    b21= new box(880,420,40,40);
    b22= new box(920,420,40,40);
    b23= new box(960,420,40,40);
    b24= new box(1000,420,40,40);

    b25= new box(840,380,40,40);
    b26= new box(880,380,40,40);
    b27= new box(920,380,40,40);
    b28= new box(960,380,40,40);

    b29= new box(880,340,40,40);
    b30= new box(920,340,40,40);

    b31 = new box(900,300,40,40,);

    shooter1 = new shooter(200,400,30);

    chain1 = new chain(shooter1.body,{x:200,y:400});
  
}

function draw() {
  background(108,225,215);  

  Engine.update(engine);

  ground1.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();

  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();

  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();

  b25.display();
  b26.display();
  b27.display();
  b28.display();

  b29.display();
  b30.display();

  b31.display();

  shooter1.display();

  chain1.display();
  
  drawSprites();
}

function mouseDragged(){

Matter.Body.setPosition(shooter1.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

  chain1.fly();

}

function keyPressed(){

if(keyCode === 32){

chain1.attach(shooter1.body);

}


}