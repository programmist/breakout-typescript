import Ball from "./Ball";
import Controller from "./Controller";
import { canvas, context } from "./GameCanvas";
import Paddle from "./Paddle";

const PADDLE_SPEED = 3;
const ball = new Ball(canvas, 50, 50, 10, [2, 2]);
const paddle = new Paddle(canvas, 75, 10);
const controller = new Controller();

function update() {
  ball.update();
  if (controller.active) {
    paddle.update(controller.direction, PADDLE_SPEED);
  }
}

function draw(tFrame?: DOMHighResTimeStamp) {
  if (tFrame) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();
  }
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
  requestAnimationFrame(main);
  draw(tFrame);
  update();
}

main();
