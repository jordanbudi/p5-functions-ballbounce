var x = 300;
var y = 200;
var speedx = 6;
var speedy = 4;
var img;

function preload() {
  img = loadImage("budi.png");
}

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0);

    display();

    move();
    
    bounce();
    
}

function display(){
    //display ball
    stroke(255);
    strokeWeight(4);
    fill(50,250,50);
    image(img, x, y, 100, 100);
}

function move(){
    //make ball move
    y = y + speedy;
    x = x + speedx;
}

function bounce(){
    //ball changes direction when it hits wall
    if(x + 100 >600 || x < 0){
        speedx = -speedx;
    }
     if(y + 100 > 400 || y < 0){
        speedy = -speedy;
    }
}