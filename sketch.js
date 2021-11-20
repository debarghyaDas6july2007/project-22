const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, arrow;
var baseimage;
var arrowimage;
var playerArcherimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  //arrowimage = loadImage("./assets/arrow.png");
  playerArcherimage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  

  //create player base body
  var options = {
   isStatic:true

  }
  playerBase = Bodies.rectangle(200, 350, 180, 150, options)
  World.add(world, playerBase);
  //create player body
  player = Bodies.rectangle(250, 180, 50, 180, options)
  World.add(world, player)
  
  //arrow = Bodies.rectangle(290, 180, 50, 180, options)
  //World.add(world, arrow)

  playerArcher = Bodies.rectangle(285, 165, 230, 200, options)
  World.add(world, playerArcher)

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
 //image(playerimage, 250, player.position.y-160, 180, 150)
  //show the playerbase image using image() function
 //image(baseimage, 250, player.position.y-160, 50, 180)

  Engine.update(engine);
  push()
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)
  image(playerimage,player.position.x,player.position.y,50,180)
  //image(arrowimage,arrow.position.x,arrow.position.y,50,180)
  image(playerArcherimage,playerArcher.position.x,playerArcher.position.y,50,120)
  // Title
  fill("#FFFF");
  pop()
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
  
  
}
