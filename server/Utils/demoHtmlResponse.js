export function snakeGame(){
    return(
`html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Snake Game</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0; /* remove scrolling */
      background: #121212;
      color: #fff;
      font-family: Arial, sans-serif;
      flex-direction: column;
      overflow: hidden; /* prevent scrolling */
    }
    canvas {
      background: #1e1e1e;
      border: 2px solid #fff;
      border-radius: 10px;
      display: block;
    }
    h1 {
      margin-bottom: 10px;
    }
    .score {
      margin: 10px 0;
    }
    .controls {
      margin-top: 15px;
      display: flex;
      gap: 10px;
    }
    button {
      padding: 8px 16px;
      font-size: 14px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      background: #0f0f0f;
      color: #fff;
      transition: 0.2s;
    }
    button:hover {
      background: #333;
    }
  </style>
</head>
<body>
  <h1>Snake Game</h1>
  <div class="score">Score: <span id="score">0</span></div>
  <canvas id="game" width="400" height="400"></canvas>
  <div class="controls">
    <button id="startBtn">Start</button>
    <button id="stopBtn">Stop</button>
    <button id="restartBtn">Restart</button>
  </div>

  <script>
    const canvas = document.getElementById('game');
    const ctx = canvas.getContext('2d');

    const box = 20;
    const canvasSize = 400;

    let snake = [{x: 10 * box, y: 10 * box}];
    let food = {x: Math.floor(Math.random()*20) * box, y: Math.floor(Math.random()*20) * box};
    let direction = "RIGHT";
    let score = 0;
    let gameInterval = null;

    function changeDirection(e) {
      if(e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
      else if(e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
      else if(e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
      else if(e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
    }

    document.addEventListener('keydown', changeDirection);

    function draw() {
      ctx.fillStyle = "#1e1e1e";
      ctx.fillRect(0, 0, canvasSize, canvasSize);

      for(let i=0;i<snake.length;i++){
        ctx.fillStyle = i === 0 ? "#0ff" : "#0a0";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
        ctx.strokeStyle = "#121212";
        ctx.strokeRect(snake[i].x, snake[i].y, box, box);
      }

      ctx.fillStyle = "#f00";
      ctx.fillRect(food.x, food.y, box, box);

      let snakeX = snake[0].x;
      let snakeY = snake[0].y;

      if(direction === "LEFT") snakeX -= box;
      if(direction === "RIGHT") snakeX += box;
      if(direction === "UP") snakeY -= box;
      if(direction === "DOWN") snakeY += box;

      if(snakeX === food.x && snakeY === food.y){
        score++;
        document.getElementById('score').innerText = score;
        food = {x: Math.floor(Math.random()*20)*box, y: Math.floor(Math.random()*20)*box};
      } else {
        snake.pop();
      }

      let newHead = {x: snakeX, y: snakeY};

      if(snakeX < 0 || snakeX >= canvasSize || snakeY < 0 || snakeY >= canvasSize || collision(newHead, snake)){
        stopGame();
        alert("Game Over! Your score: " + score);
      }

      snake.unshift(newHead);
    }

    function collision(head, array){
      for(let i=0;i<array.length;i++){
        if(head.x === array[i].x && head.y === array[i].y) return true;
      }
      return false;
    }

    function startGame(){
      if(!gameInterval){
        gameInterval = setInterval(draw, 100);
      }
    }

    function stopGame(){
      clearInterval(gameInterval);
      gameInterval = null;
    }

    function restartGame(){
      stopGame();
      snake = [{x: 10 * box, y: 10 * box}];
      direction = "RIGHT";
      score = 0;
      document.getElementById('score').innerText = score;
      food = {x: Math.floor(Math.random()*20)*box, y: Math.floor(Math.random()*20)*box};
      startGame();
    }

    document.getElementById('startBtn').addEventListener('click', startGame);
    document.getElementById('stopBtn').addEventListener('click', stopGame);
    document.getElementById('restartBtn').addEventListener('click', restartGame);

    // optional: start immediately
    // startGame();
  </script>
</body>
</html>

`);
}

