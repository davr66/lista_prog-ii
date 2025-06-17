/*
Crie um jogo de corrida simples em que um número escalável de cavalos
possa participar. Cada cavalo deve ter uma cor diferente gerada
aleatoriamente e a sua velocidade deve mudar aleatoriamente a cada
momento da corrida.
*/
let cavalos = [];
let numCavalos = parseInt(prompt("Digite o número de cavalos da corrida:"));
let ACABOU = false;
let ganhador = 0;
function setup() {
  createCanvas(1000, numCavalos*75);
  colorMode(HSB,360,100,100);
  textAlign(CENTER,CENTER);
  frameRate(30);
  for (let i = 0; i < numCavalos; i++) {
    let cor = parseInt(random(0, 360));
    let vel = random(1, 5);
    let cavalo = {
      num: i + 1,
      cor: cor,
      velocidade: vel,
      posX: 0,
      posY: 25 +i * 30,
    };
    cavalos.push(cavalo);
  }
}

function draw() {
  background(220);
  setTimeout(mudaVelocidade(),1000);
  
  if(ACABOU) fimDaCorrida(ganhador);
  else corrida();
}

function corrida() {
  for (let i = 0; i < cavalos.length; i++) {
    fill(0,0,100);
    rect(0, i * 75, width, 75);
    fill(cavalos[i].cor,80,70);
    rect(cavalos[i].posX,i*45+ cavalos[i].posY, 50, 25);
    fill(0,0,100);
    textSize(20);
    text(`${cavalos[i].num}`,cavalos[i].posX+15,i*45+ cavalos[i].posY+15);
    
    cavalos[i].posX +=cavalos[i].velocidade;
    
    if (cavalos[i].posX > width){
      ganhador = cavalos[i].num;
      ACABOU = true;
    }
  }
}

function mudaVelocidade(){
  for(let cavalo of cavalos){
    cavalo.velocidade = random(2,7)
  }
}
function fimDaCorrida(numCavalo){
  fill(0,0,0);
  textSize(30);
  text(`A corrida acabou!\nO cavalo de número ${numCavalo} é o vencedor!`,width/2,height/2);
}