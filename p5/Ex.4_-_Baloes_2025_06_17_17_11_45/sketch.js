/*
Crie um jogo onde um balão, gerado por uma função construtora, sobe da
parte inferior da tela. O balão tem uma cor aleatória, uma velocidade
aleatória e um valor de pontos aleatório, que é dado ao jogador ao ser
clicado. Se o balão sair da tela sem ser clicado, o jogador perde 3 pontos.
O jogo continua até o jogador atingir 50 pontos ou cair para -18 pontos,
com a pontuação sendo atualizada conforme o balão é estourado ou
perdido. Use apenas um balão por vez, sem listas, e altere a pontuação
conforme os eventos de clique ou falha no clique.

*/

let pontos=0;
let balao;
let COLISAO = false;
function setup() {
  createCanvas(400, 400);
  colorMode(HSB,360,100,100);
  cursor(CROSS);
  textAlign(CENTER,CENTER);
  noStroke();
}

function draw() {
  background(220);
  if(pontos>=50)telaFinal('Parabéns, você ganhou!!!');
  else if(pontos <= -18) telaFinal("Você Perdeu! :(");
  else jogo();
}

function telaFinal(texto){
  textSize(30);
  text(`${texto}`,width/2,height/2)
}

function jogo(){
  fill(0,0,0);
  textSize(20);
  text(`Pontos: ${pontos}`,width -100,20);
  if(balao == undefined)novoBalao();
  
  if (!balao.clicado && balao.posY < 0) {
    pontos -= 3;
    novoBalao();
    return;  // Sai do frame atual pra não rodar o resto
  }
  
  if (COLISAO){
    novoBalao();
    COLISAO = false;
  }
  
  if (!balao.clicado) {
    desenhaBalao();
  }
}

function desenhaBalao(){
  fill(balao.cor,70,80);
  ellipse(balao.posX,balao.posY,50,50);
  balao.posY -= balao.velocidade;
}

function novoBalao(){
  let pontosB = parseInt(random(1,5));
  let cor = parseInt(random(0,360));
  let vel = parseInt(random(3,6));
  balao = new CriaBalao(cor,vel,pontosB,400.0);
}

function CriaBalao(cor,velocidade,pontos,posY){
  this.cor = cor;
  this.velocidade = velocidade;
  this.pontos = pontos;
  this.posX = random(40,width-40);
  this.posY = posY;
  this.clicado = false;
  
  this.handleClick=function (){
    this.clicado = true;
  }
}


function colisao(){
    if(dist(balao.posX,balao.posY,mouseX,mouseY)<25){
      balao.handleClick();
      pontos+=balao.pontos;
      COLISAO = true;
    }
}

function mousePressed(){
  colisao();
}