pa = null;
Game_manager = null;
pb = null;
back_manager = null;
var play_img, background_img, bird_img;

function preload() 
{
  background_img = loadImage("background.png");
  bird_img = loadImage("flappy.jpg");
  play_img = loadImage("play.png");
}

function setup() 
{

  createCanvas(500, 500);
  bird_height = 60;
  pa = new Pipe_above();
  pb = new Pipe_below();
  Game_manager = new game_manager();
  back_manager = new Background_manager(background_img);

}

function draw() 
{

  image(background_img, 0, 0);
  pa.x -= 1;
  pb.x -= 1;
  pa.draw();
  pb.draw();
  back_manager.draw();
  Game_manager.run();

}

class game_manager
{
  pipes = [];

  constructor()
  {
    this.pipes.push(new PipePair())
  }

  run()
  {
    if(this.pipes.length != 0)
    {

      let front_pipe = this.pipes[0]

      this.pipes.forEach(pipe => {
        pipe.dec_x(1);
        pipe.draw();
      })

      if(front_pipe.get_x() == 200)
      {
  
        this.pipes.push(new PipePair())
  
      }

      if(front_pipe.get_x() <- 100)
      {
        this.pipes.shift()
      }

    }

  }

}

class PipePair
{
  constructor()
  {
    this.pipe_above = new Pipe_above();
    this.pipe_below = new Pipe_below();
  }

  draw()
  {
    this.pipe_above.draw();
    this.pipe_below.draw();
  }

  dec_x(num)
  {
    this.pipe_below.x -= num;
    this.pipe_above.x -= num;
  }

  get_x()
  {
    return this.pipe_above.x;
  }

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
    this.x = width + 100;
  }
}

class Pipe_below extends Pipe{

  constructor(){
    super();
    this.h = random() * (height / 2 - bird_height);
    this.x = width + 100;
  }

  draw(){
    fill(rgb(23,166,18));
    rect(this.x, height - this.h, 70, this.h);
  }

}

class Background
{
  constructor(background_img)
  {
    this.image = background_img;
    this.x = width + 100;
  }

  draw()
  {
    image(this.image, this.x, 0);
    image(this.image, this.x + this.image.width, 0);
  }
}

class Background_manager
{
  constructor(background_img)
  {
    this.image = background_img;
    this.blacklist = [];
    this.blacklist.push(new Background(background_img, 0))
    this.blacklist.push(new Background(background_img, width))
    this.speed = 0.5;
  }

  draw()
  {
    this.blacklist.forEach(bg => 
      {
        bg.x -= this.speed;
        bg.draw();
      })

      if(this.blacklist.length != 0)
      {
        if(this.blacklist[0].x + this.image.width < 0)
        {
          this.blacklist.shift();
          this.blacklist.push(new Background(this.image, width));
        }
      }

  }

}
