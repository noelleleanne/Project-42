const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var idk;
var drops = [];
var maxDrops = 100;

function preload(){
    img1 = loadImage("1.png");
    img2 = loadImage("2.png");
    img3 = loadImage("3.png");
    img4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;


    umbrella = new Umbrella(180,500);
if(frameCount % 150 === 0){
   for(var i=0;i<maxDrops;i++){
       drops.push(new createDrop(random(0,400),random(0,400)));
   }
    }
}

function draw(){
    background("black");
    Engine.update(engine);

    //drops.display();
    for(var i =0;i<maxDrops;i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    umbrella.display();
    spawnLightning();
    drawSprites();
}   
function spawnLightning(){
    if(frameCount % 120 === 0){
        var lightning = createSprite(width/2, 100,40,40);
        var rand = Math.round(random(1,4));
        switch(rand){
            case 1: lightning.addImage(img1);
            break;
            case 2: lightning.addImage(img2);
            break;
            case 3: lightning.addImage(img3);
            break;
            case 4: lightning.addImage(img4);
            default: break;
        }
        lightning.lifetime = 25;
        lightning.scale = 0.5;
    }
}

