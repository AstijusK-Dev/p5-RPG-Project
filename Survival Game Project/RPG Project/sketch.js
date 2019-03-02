var renderWidth = 1024;
var renderHeight = 768;

var player;
var world;

var colCells = renderWidth / 32;
var rowCells = renderHeight / 32;
var possibleColours = [];

function setup() {
  createCanvas(renderWidth, renderHeight);

  player = new Player();
  world = new World();
  world.asignTiles();
}

function draw() {
  background(51);

  world.generate();
  player.show();
  player.update();
}

function World(){
  this.generate = function(){
    for(var i = 0; i < colCells; i++){
      for(var j = 0; j < rowCells; j++){
        var x = i*32;
        var y = j*32;
        fill(possibleColours[i][j]);
        stroke(0);
        rect(x, y, 32, 32);
      }
    }
  }
  this.asignTiles = function(){
    for(var i = 0; i < colCells; i++){
      possibleColours[i] = [];
      for(var j = 0; j < rowCells; j++){
        possibleColours[i][j] = random(255);
      }
    }
  }
}

function Player(){
  this.width = 32;
  this.height = 32;
  this.x = 0;
  this.y = 0;
  this.moveSpeed = 3;
  
  this.update = function(){
    //Player movement controls
    if(keyIsDown(LEFT_ARROW)){
      if(this.x > 0){
        this.x -= this.moveSpeed;
      }
    }
    if(keyIsDown(RIGHT_ARROW)){
      if(this.x < (renderWidth - player.width)){
        this.x += this.moveSpeed;
      }
    }
    if(keyIsDown(UP_ARROW)){
      if(this.y > 0){
        this.y -= this.moveSpeed;
      }
    }
    if(keyIsDown(DOWN_ARROW)){
      if(this.y < (renderHeight - player.height)){
        this.y += this.moveSpeed;
      }
    }
  }
  this.show = function(){
    fill(0, 255, 0);
    rect(this.x, this.y, this.width, this.height);
  }
}