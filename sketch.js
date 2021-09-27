var fundo, fundoImg;
var foguete, fogueteImg;
var meteoroImg;
var estrelaImg;
var placar;
var JOGAR = 1;
var ENCERRAR = 0
var estados = JOGAR;
var gameover;

function preload(){
fundoImg = loadImage("C19/backgroundspace-1.png");
  fogueteImg = loadImage("C19/rocketsprite.png");
  estrelaImg = loadImage("C19/starsprite.png");
  meteoroImg = loadImage("C19/meteorSprite.png");
  gameover = loadImage("C19/gameOver.png");
}

function setup() {
 createCanvas(400, 400);
  fundo = createSprite(200,200,20,20);
  fundo.addImage(fundoImg);
  fundo.scale = 1.5;
  fundo.velocityY = 4;
 
  foguete = createSprite(300,320,10,10);
  foguete.addImage(fogueteImg);
  foguete.scale = 0.05;
  
  GrupoEstrela = new Group();
  GrupoMeteoro = new Group();
  
  placar = 0;
  
}

function draw() {
  background(220);
 if(fundo.y>400){
   
   fundo.y = height/6;
 }
  text("Score:"+ placar, 60,20);
  
  
  foguete.x = mouseX;
  foguete.y = mouseY;
  
  estrelaPontos = Math.round(random(25,50,75));
  if(foguete.isTouching(GrupoEstrela)){
    
  switch(estrelaPontos){
    case 1: placar = placar + 25;
      break;
    case 2: placar = placar + 50;
      break;
    case 3: placar = placar + 75;
  }
    if(foguete.isTouching(GrupoMeteoro)){
      
      estados = ENCERRAR;
      
    }
  }
 else if(estados== ENCERRAR){
    GrupoMeteoro.setVelocityYEach(0);
    GrupoEstrela.setVelocityYEach(0);
    foguete.destroyEach();
    GrupoEstrela.setLifetimeEach(-1);
    GrupoMeteoro.setLifetimeEach(-1);
    foguete.addImage(gameover);
    
  }
  GerarEstrelas();
  GerarMeteoros();
  drawSprites();
}
function GerarEstrelas(){
  if(frameCount % 60== 0){
    var estrela = createSprite(50,40,15,15);
   estrela.addImage(estrelaImg);
    estrela.x = Math.round(random(50,350));
    estrela.velocityY = 3;
    estrela.scale = 0;
    estrela.lifetime = 134;
    
    GrupoEstrela.add(estrela);}
}

 function GerarMeteoros(){
   if(frameCount % 100 == 0){
var meteoro = createSprite(30,250,20,20);
meteoro.addImage(meteoroImg);
meteoro.x = Math.round(random(30,250));
meteoro.velocityY = 5;
meteoro.scale = 0.4
meteoro.lifetime = 80;

GrupoMeteoro.add(meteoro);}
 }