import Ball, { CanvasInfo } from "./Ball";
import { canvas, context } from "./GameCanvas";

function update() {
  ball.update();
}

function draw(tFrame?: DOMHighResTimeStamp) {
  if (tFrame) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
  }
}

const canvasInfo = new CanvasInfo(canvas.height, canvas.width, context);
const ball = new Ball(50, 50, 10, [2, 2], canvasInfo);

function main(tFrame?: DOMHighResTimeStamp) {
  requestAnimationFrame(main);
  draw(tFrame);
  update();
}

main();
