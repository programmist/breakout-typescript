import Ball from "./Ball";
import { canvas, context } from "./GameCanvas";
import Paddle from "./Paddle";

function update() {
  ball.update();
  paddle.update();
}

function draw(tFrame?: DOMHighResTimeStamp) {
  if (tFrame) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
    paddle.draw();
  }
}

const ball = new Ball(canvas, 50, 50, 10, [2, 2]);
const paddle = new Paddle(canvas, 75, 10);

function main(tFrame?: DOMHighResTimeStamp) {
  requestAnimationFrame(main);
  draw(tFrame);
  update();
}

main();
