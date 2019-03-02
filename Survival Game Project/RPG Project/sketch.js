var player;
var cell;
var world;

var renderWidth = 1024;
var renderHeight = 768;

function setup() {
  createCanvas(renderWidth, renderHeight);

  player = new Player();
  cell = new Cell();
  world = new World();
}

function draw() {
  background(51);
  
  player.show();
  player.update();
  world.show();
}

function Cell(){
  this.cellWidth = 32;
  this.cellHeight = 32;
}

function World(){
  this.colCells = renderWidth / 32;
  this.rowCells = renderHeight / 32;

  this.generate = function(){
        
  }
  this.show = function(){
    for(var x = 0; x < this.colCells; x++){
      for(var y = 0; y < this.rowCells; y++){
        var i = x*cell.cellWidth;
        var j = y*cell.cellHeight;
        stroke(0);
        fill(255);
        rect(i, j, cell.cellWidth, cell.cellHeight);
      }
    }
  }
}

function Player(){
  this.width = 32;
  this.height = 32;
  this.x = width / 2 - (this.width / 2);
  this.y = height / 2 - (this.height / 2);
  this.moveSpeed = 3;
  
  this.update = function(){
    //Player movement controls
  }
  this.show = function(){
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }
}