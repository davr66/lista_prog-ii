/*
Crie uma animação interativa usando p5.js , onde uma "nuvem" de círculos
se move pela tela. A posição e o movimento desses círculos devem ser
repelidos com base na posição do mouse, de forma que os círculos se
afastem do cursor conforme ele se move.

*/
let ellipses = [
  { offX: 0, offY: 0 },
  { offX: 25, offY: 2 },
  { offX: 50, offY: 0 },
  { offX: 35, offY: -25 },
  { offX: 15, offY: -25 },
];

let directions = { dX: 3, dY: 3.5 };
let startCoord = { x: 200, y: 200 };

function setup() {
  createCanvas(500, 500);
  noStroke();
}

function draw() {
  background(100, 150, 255);
  
 startCoord.x += directions.dX;
 startCoord.y += directions.dY;

  colisao();

  drawCloud();
}

function drawCloud() {
  
  for (let ellipseObj of ellipses) {
    let x = startCoord.x + ellipseObj.offX;
    let y = startCoord.y + ellipseObj.offY;
    ellipse(x, y, 50, 50);
  }
}

function colisao(){
  if (startCoord.x <= 50 || startCoord.x >= width - 25) directions.dX = -directions.dX;
  if (startCoord.y <= 50 || startCoord.y >= height - 25) directions.dY = -directions.dY;

  let distanceX = mouseX - startCoord.x;
  let distanceY = mouseY - startCoord.y;

  let distance = dist(mouseX, mouseY, startCoord.x, startCoord.y);

  if (distance < 100) {
    let moveAmount = 2;

    if (distanceX > 0 && startCoord.x - moveAmount > 0) startCoord.x -= moveAmount;
    else if (distanceX <= 0 && startCoord.x + moveAmount < width) startCoord.x += moveAmount;

    if (distanceY > 0 && startCoord.y - moveAmount > 0) startCoord.y -= moveAmount;
    else if (distanceY <= 0 && startCoord.y + moveAmount < height) startCoord.y += moveAmount;
  }
}