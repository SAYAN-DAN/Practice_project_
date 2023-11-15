 if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
    snakeArr.unshift({
      x: snakeArr[0].x + direction.x,
      y: snakeArr[0].y + direction.y,
    });
    let a = 2;
    let b = 34;
    food;
    {
      x: Math.round(a + (b - a) * Math.random());
      y: Math.round(a + (b - a) * Math.random());
    }
  }