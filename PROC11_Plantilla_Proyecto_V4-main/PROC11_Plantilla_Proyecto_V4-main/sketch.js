var nave;
var sea, seaImg;
var shipImg1;

function preload() {
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png", "ship-2.png");
}

function setup() {
  createCanvas(400, 400);

  // Crear el primer sprite del mar
  sea = createSprite(200, 200, 400, 400);
  sea.addImage(seaImg);
  sea.scale = 0.3;
  sea.velocityX = -2;

  // Crear un segundo sprite del mar para crear un efecto continuo
  sea2 = createSprite(sea.width + 200, 200, 400, 400);
  sea2.addImage(seaImg);
  sea2.scale = 0.3;
  sea2.velocityX = -2;

  // Crear el barco y agregarle la animación
  nave = createSprite(200, 200, 50, 50);
  nave.addAnimation("movingShip", shipImg1);
  nave.scale = 0.25;
}

function draw() {
  background("blue");

  // Hacer que el mar se mueva en bucle continuo
  if (sea.x < -200) {
    sea.x = sea.width + 200;
  }
  if (sea2.x < -200) {
    sea2.x = sea2.width + 200;
  }

  // Lógica para mover el barco
  if (keyDown(RIGHT_ARROW)) {
    nave.velocityX = 2;
    nave.velocityY = 0;
  } else if (keyDown(LEFT_ARROW)) {
    nave.velocityX = -2;
    nave.velocityY = 0;
  } else if (keyDown(UP_ARROW)) {
    nave.velocityX = 0;
    nave.velocityY = -2;
  } else if (keyDown(DOWN_ARROW)) {
    nave.velocityX = 0;
    nave.velocityY = 2;
  } else {
    nave.velocityX = 0;
    nave.velocityY = 0;
  }

  drawSprites();
}

