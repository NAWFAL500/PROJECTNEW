var playerPaddle;
var computerPaddle;
var ball;

function setup(){
  createCanvas(400,400);
  //player Paddle
  playerPaddle = new Paddle();
  // computer paddle
  computerpaddle= new Paddle();
  ball= new Ball();
}

function draw() {
  //set background to white
  background("white");
  
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  computerpaddle.xPositon=0;
  computerpaddle.yPosition=160;
  playerPaddle.display();
  computerpaddle.display();
  ball.display1();
  //draw the ball
  
}