/*
5. Crie uma animação onde várias estrelas caem do topo da tela com
tamanhos, posições e velocidades aleatórias. Use uma função construtora
para gerar cada estrela com brilho e velocidade próprios. As estrelas
devem se mover para baixo continuamente e, ao saírem da tela, voltarem
ao topo com novas características
*/
let estrelas =[];
let numEstrelas;
function setup() {
  createCanvas(400, 600);
  numEstrelas = parseInt(random(40,70));
  noStroke();
}

function draw() {
  background(0);
  if(estrelas.length <1)novasEstrelas();
  desenhaEstrelas();
}

function desenhaEstrelas(){
  for(let estrela of estrelas){
    fill(255,255,255,estrela.brilho);
    ellipse(estrela.posX,estrela.posY,estrela.tamanho,estrela.tamanho);
    estrela.posY += estrela.velocidade;
    
    if(estrela.posY > height) estrela.atualizaProps();
  }
}

function novasEstrelas(){
  for(let i=0;i<numEstrelas;i++){
    let brilho = parseInt(random(10,101));
    let posX = parseInt(random(30,width-30));
    let posY = parseInt(random(0,height/6));
    let velocidade = parseInt(random(2,6));
    let tamanho = parseInt(random(2,10));
    
    let estrela = new CriaEstrela(brilho,velocidade,posX,posY,tamanho);
    estrelas.push(estrela);
  }
}

function CriaEstrela (brilho,velocidade,posX,posY,tamanho){
  this.posX = posX;
  this.posY = posY;
  this.brilho = brilho;
  this.velocidade = velocidade;
  this.tamanho = tamanho;
  
  this.atualizaProps = function(){
    this.brilho = parseInt(random(10,101));
    this.posX = parseInt(random(30,width-30));
    this.posY = parseInt(random(0,height/4));
    this.velocidade = parseInt(random(2,6));
    this.tamanho = parseInt(random(2,10));
  }
}