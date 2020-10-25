pa = null;
pb = null;

function setup() {
  createCanvas(500, 500);
  bird_height = 60;
  pa = new Pipe_above();
  pb = new Pipe_below();
}

function draw() {
  background(rgb(107,206,255));
  pa.x -= 1;
  pb.x -= 1;
  pa.draw();
  pb.draw();
}

class Pipe{
  x;
  h; 

  draw(){
    fill(rgb(23,166,18));
    rect(this.x, 0, 70, this.h);
  }
}

class Pipe_above extends Pipe{

  constructor(){
    super();
    this.h = random() * (height / 2 - bird_height);
    this.x = width  + 100;
  }
}

class Pipe_below extends Pipe{

  constructor(){
    super();
    this.h = random() * (height / 2 - bird_height);
    this.x = width  + 100;
  }

  draw(){
    fill(rgb(23,166,18));
    rect(this.x, height - this.h, 70, this.h);
  }

}