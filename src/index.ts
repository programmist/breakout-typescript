import Ball from "./Ball";
import Controller from "./Controller";
import { canvas, context } from "./GameCanvas";
import Paddle from "./Paddle";

let GAME_OVER = false;
const PADDLE_SPEED = 3;
const ball = new Ball(canvas, 50, 50, 10, [2, 2]);
const paddle = new Paddle(canvas, 75, 10);
const controller = new Controller();

function update() {
  ball.update();
  if (controller.active) {
    paddle.update(controller.direction, PADDLE_SPEED);
  }
  if (ball.isOutOfBounds) {
    GAME_OVER = true;
  }
}

function draw(tFrame?: DOMHighResTimeStamp) {
  if (tFrame) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();
  }
}

function gameOverMessage() {
  context.font = "60px Courier New";
  context.fillStyle = "#F00";
  context.fillText("GAME OVER", canvas.width / 6, canvas.height / 2);
}

document.addEventListener("keydown", (event: KeyboardEvent) => {
  switch (event.key) {
    case "ArrowLeft":
      controller.pressLeft();
      break;
    case "ArrowRight":
      controller.pressRight();
      break;
  }
});
document.addEventListener("keyup", (event: KeyboardEvent) => {
  switch (event.key) {
    case "ArrowLeft":
      controller.releaseLeft();
      break;
    case "ArrowRight":
      controller.releaseRight();
      break;
  }
});

function main(tFrame?: DOMHighResTimeStamp) {
  if (!GAME_OVER) {
    requestAnimationFrame(main);
    draw(tFrame);
    update();
  } else {
    gameOverMessage();
  }
}

main();
