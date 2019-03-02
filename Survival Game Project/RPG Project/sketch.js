var player;
var tile;
var world;

var renderWidth = 800;
var renderHeight = 600;

function setup() {
  createCanvas(800, 600);

  player = new Player();
  tile = new Tile();
  world = new World();
}

function draw() {
  background(51);
  
  player.draw();
  player.update();
  world.show();
}

function Player(){
  this.width = 64;
  this.height = 64;
  this.x = width / 2 - (this.width / 2);
  this.y = height / 2 - (this.height / 2);
  this.moveSpeed = 3;
  
  this.update = function(){
    
  }
  this.draw = function(){
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }
}

function Tile(){
  this.width = 64;
  this.height = 64;

  this.show = function(){

  }
}

function World(){
  this.widthInTiles = renderWidth / tile.width;
  this.heightInTiles = renderHeight / tile.height;

  this.show = function(){
    for(var tileX = 0; tileX < world.widthInTiles; tileX++){
      for(var tileY = 0; tileY < world.heightInTiles; tileY++){
        var newTile = new Tile();
      }
    }
  }
}