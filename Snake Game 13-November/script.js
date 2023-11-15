//All constants and variables
// const direction = { x: 0, y: 0 };
let direction = { x: 0, y: 0 };
const foodSound = new Audio("food.mp3");
const gameoverSound = new Audio("gameover.mp3");
const moveSound = new Audio("move.mp3");
const musicSound = new Audio("music.mp3");

let speed = 6;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 18, y: 15 }];
let food = { x: 10, y: 11 };

// All Function

function main(currentTime) {
  window.requestAnimationFrame(main);

  if ((currentTime - lastPaintTime) / 1000 < 1 / speed) {
    return;
  }
  lastPaintTime = currentTime;
  gameEngine();
}

function isCollide(sArr) {
  return false;
}
function gameEngine() {
  // Updating the snaake array and food

  if (isCollide(snakeArr)) {
    gameoverSound.play();
    moveSound.pause();
    direction = { x: 0, y: 0 };
    alert("press any key to start new Game! ");
    snakeArr = [{ x: 18, y: 15 }];
    musicSound.play();
    score = 0;
  }

  // if you have eaten the food imcremenent and regenerate it

  if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    foodSound.play();
    snakeArr.unshift({
      x: snakeArr[0].x + direction.x,
      y: snakeArr[0].y + direction.y,
    });

    let a = 2;
    let b = 34;

    // Corrected syntax for generating new position for the food
    // food = {
    //   x: Math.round(a + (b - a) * Math.random()),
    //   y: Math.round(a + (b - a) * Math.random()),
    // };
    // Corrected syntax for generating new position for the food
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  //Moveing the snake

  for (let i = snakeArr.length - 2; i >= 0; i--) {
    snakeArr[i + 1] = { ...snakeArr[i] };
  }

  snakeArr[0].x += direction.x;
  snakeArr[0].y += direction.y;

  // Display: The snake and food
  // Display the snake
  board.innerHTML = "";
  snakeArr.forEach(function (element, index) {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = element.y;
    snakeElement.style.gridColumnStart = element.x;
    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("body");
    }
    board.appendChild(snakeElement);
  });

  // Display the food

  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
}

// Main logic Starts Here

window.requestAnimationFrame(main);
window.addEventListener("keydown", function (e) {
  direction = { x: 0, y: 1 };
  moveSound.play();
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      direction.x = 0;
      direction.y = -1;
      break;
    case "ArrowDown":
      console.log("ArrowDown");
      direction.x = 0;
      direction.y = 1;
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      direction.x = -1;
      direction.y = 0;
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      direction.x = 1;
      direction.y = 0;
      break;

    default:
      break;
  }
});
