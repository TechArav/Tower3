
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  block1,block3;
var platform;
var hex, slingshot;

var gameState = "onSling";
//var bg = "sprites/bg1.png";
var score = 0;

//function preload() {
    //getBackgroundImg();
//}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    platform = new Ground(600,height,1200,20);
   
    
    block1 = new Block(810, 350);
    

   
    block3 = new Block(810, 220);

    

    hex = new Hex(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(hex.body,{x:200, y:50});
}

function draw(){
    
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
  
    block1.display();
    block1.score();
    

  
    block3.display();
    block3.score();
    

   

    hex.display();
    platform.display();
    //log6.display();
    slingshot.display();
    console.log(hexagon.body.speed);    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && hex.body.speed < 1){
       Matter.Body.setPosition(hex.body,{x:200, y:50});
       slingshot.attach(hex.body);
    }
}

