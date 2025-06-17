/*
  Crie uma animação interativa onde há três formas geométricas: Triângulo,
  Quadrado e Círculo. Quando o usuário clica em qualquer uma dessas
  formas, a cor dela deve mudar aleatoriamente.

*/

let px = 0;  // ponto (mouse)
let py = 0;

//pontos do triângulo
let x1 = 600;  
let y1 = 100;
let x2 = 700;
let y2 = 250;
let x3 = 500;
let y3 = 250;
//pontos do círculo
let cX = 350;
let cY = 175;
//pontos do quadrado
let qX = 50;
let qY = 100;
let qSize = 150;
//cores
let colorT=0;
let colorC=0;
let colorQ=0;


function setup() {
  createCanvas(725, 350);
  colorMode(HSB,360,100,100);
}

function draw() {
  background(255);
  
  noStroke();
  fill(colorT,80,90);
  triangle(x1, y1, x2, y2, x3, y3);
  fill(colorC,80,90);
  ellipse(cX,cY,160,160);
  fill(colorQ,80,90);
  rect(qX,qY,qSize,qSize);

}

// Colisão Ponto/Triângulo
function triPoint(x1, y1, x2, y2, x3, y3, px, py) {
  // área do triângulo original
  let areaOrig = abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1));

  // área dos 3 subtriângulos
  let area1 = abs((x1 - px) * (y2 - py) - (x2 - px) * (y1 - py));
  let area2 = abs((x2 - px) * (y3 - py) - (x3 - px) * (y2 - py));
  let area3 = abs((x3 - px) * (y1 - py) - (x1 - px) * (y3 - py));

  // checa se o ponto está dentro do triângulo
  return (area1 + area2 + area3 == areaOrig);
}

//Colisão Ponto/Círculo
function circlePoint(px,py){
  if(dist(px,py,cX,cY)<80)return true;
  else return false;
}

//Colisão Ponto/Quadrado
function quadPoint(px,py){
  if (
    px >= qX && //mouseX é maior que o ponto X da borda esquerda (início da forma)
    px <= qX + qSize && // mouseX é menor que a borda direita
    py >= qY && // mouseY é maior que o ponto vertical inicial
    py <= qY + qSize // mouseY é menor que o ponto vertical final
  )
    return true;
  else return false;
}

function changeColor(){
  if(circlePoint(mouseX,mouseY))colorC = parseInt(random(0,360));
  else if(quadPoint(mouseX,mouseY)) colorQ = parseInt(random(0,360));
  else if(triPoint(x1, y1, x2, y2, x3, y3, mouseX, mouseY)) colorT = parseInt(random(0,360));
}

function mousePressed(){
  changeColor();
}