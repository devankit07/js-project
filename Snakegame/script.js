const board = document.querySelector(".board");
const blockHeight = 50;
const blockWidth = 50;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("high-score");
const timeEl = document.getElementById("time");

let highScore = localStorage.getItem("highScoreSnake") || 0;
highScoreEl.textContent = highScore;

const blocks = {};
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    blocks[`${r}--${c}`] = block;
  }
}

let snake = [{ x: 2, y: 3 }];
let direction = "right";
let food = null;
let score = 0;
let time = 0;
let gameLoop = null;
let timeLoop = null;

function placeFood() {
  let fx, fy;

  do {
    fx = Math.floor(Math.random() * rows);
    fy = Math.floor(Math.random() * cols);
  } while (snake.some((s) => s.x === fx && s.y === fy));

  food = { x: fx, y: fy };
  blocks[`${fx}--${fy}`].classList.add("food");
}

function renderSnake() {
  snake.forEach((s) => {
    blocks[`${s.x}--${s.y}`].classList.add("fill");
  });
}

function clearSnake() {
  snake.forEach((s) => {
    blocks[`${s.x}--${s.y}`].classList.remove("fill");
  });
}

function update() {
  let head = { ...snake[0] };

  if (direction === "left") head.y--;
  if (direction === "right") head.y++;
  if (direction === "up") head.x--;
  if (direction === "down") head.x++;

  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    return gameOver();
  }

  if (snake.some((s) => s.x === head.x && s.y === head.y)) {
    return gameOver();
  }

  clearSnake();
  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    scoreEl.textContent = score;

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("highScoreSnake", highScore);
      highScoreEl.textContent = highScore;
    }

    blocks[`${food.x}--${food.y}`].classList.remove("food");
    placeFood();
  } else {
    snake.pop();
  }

  renderSnake();
}

function gameOver() {
  clearInterval(gameLoop);
  clearInterval(timeLoop);

  alert("Game Over!");

  snake = [{ x: 2, y: 3 }];
  direction = "right";
  score = 0;
  scoreEl.textContent = "0";
  time = 0;
  timeEl.textContent = "00-00";

  document.querySelectorAll(".fill").forEach((b) => b.classList.remove("fill"));
  document.querySelectorAll(".food").forEach((b) => b.classList.remove("food"));

  startGame();
}

function startTimer() {
  timeLoop = setInterval(() => {
    time++;
    let mm = String(Math.floor(time / 60)).padStart(2, "0");
    let ss = String(time % 60).padStart(2, "0");
    timeEl.textContent = `${mm}-${ss}`;
  }, 1000);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && direction !== "right") direction = "left";
  if (e.key === "ArrowRight" && direction !== "left") direction = "right";
  if (e.key === "ArrowUp" && direction !== "down") direction = "up";
  if (e.key === "ArrowDown" && direction !== "up") direction = "down";
});

function startGame() {
  placeFood();
  renderSnake();
  startTimer();

  gameLoop = setInterval(update, 400);
}

startGame();

let isPaused = false;

function togglePause() {
  if (!isPaused) {
    clearInterval(gameLoop);
    clearInterval(timeLoop);
    isPaused = true;
  } else {

    gameLoop = setInterval(update, 300);
    startTimer();
    isPaused = false;
  }
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "Enter") {
    togglePause();
  }
});

