var rocaImg;
var roca;
var plat;
var rocas = [];
var comidaImg;
var comidas = [];
var powerImg;
var powerups = [];
var pacmanImg;
var pacman;

function preload(){
  rocaImg = loadImage("/Img/wall.png");
  comidaImg = loadImage("/Img/orange.png");
  powerImg = loadImage("/Img/manzana.png");
  pacmanImg = loadImage("/Img/pac.png");
}


function setup() {
  createCanvas(600,600);
  roca = new Roca(200,300);
  plat = new Plataforma();
  for(var i = 0 ; i < plat.filas; i++){
    for(var j = 0 ; j < plat.columnas; j++){
      if(plat.plataform[i][j] === '*')
        rocas.push(new Roca(j * 32,i * 32))
      if(plat.plataform[i][j] === '-')
        comidas.push(new Comida(j * 32,i * 32))
      if(plat.plataform[i][j] === '0')
        powerups.push(new Powerup(j * 32,i * 32))
      if(plat.plataform[i][j] === 'p')
        pacman = new Pacman(j * 32,i * 32)
    }
  }
}

function draw() {
  background(0);
  for(var i = 0; i < rocas.length; i++)
    rocas[i].show();
  for(var i = 0; i < comidas.length; i++)
    comidas[i].show();
  for(var i = 0; i < powerups.length; i++)
    powerups[i].show();
  pacman.show();
  for(var i = 0; i < comidas.length; i++){
    if(pacman.eat(comidas[i])){
      comidas.splice(i,1);
    }
  }
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    if(plat.plataform[pacman.y/32][pacman.x/32 + 1] !== '*')
    pacman.move(0);
  }
  if(keyCode === DOWN_ARROW){
    if(plat.plataform[pacman.y/32 + 1][pacman.x/32] !== '*')
    pacman.move(1);
  }
  if(keyCode === LEFT_ARROW){
    if(plat.plataform[pacman.y/32][pacman.x/32 - 1] !== '*')
    pacman.move(2);
  }
  if(keyCode === UP_ARROW){
    if(plat.plataform[pacman.y/32 - 1][pacman.x/32] !== '*')
    pacman.move(3);
  }
}