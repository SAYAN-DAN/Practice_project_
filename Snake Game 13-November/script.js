//All constants and variables
const direction = [(X = 0), (Y = 0)];
const foodSound = new Audio("food.mp3");
const gameoverSound = new Audio("gameover.mp3");
const moveSound = new Audio("move.mp3");
const musicSound = new Audio("music.mp3");

let speed = 2;

// All Function

function main(currentTime) {
  window.requestAnimationFrame(main);

  if ((currentTime - lastPaintTime)/1000 < 1/speed) {
    return;
  }
  lastPaintTime =currentTime
  gameEngine()
}

function gameEngine () {
    
}













// Main logic Starts Here

window.requestAnimationFrame(main);
