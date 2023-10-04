import Ball from "./Ball";
import Bricks from "./Bricks";
import Controller from "./Controller";
import { canvas, context } from "./GameCanvas";
import Paddle from "./Paddle";

/**
 * NOTE: Development of this game will likely continue on a branch refactored to use a game engine like Phaser.io
 */

/**
 * TODO:
 * - Review architecture and refactor where necessary, e.g.
 *   - Should the even listeners be encapsulated somewhere?
 *   - Should we encapsulate this index file into a Game class, or nah?
 *   - Comments needed anywhere?
 *   - Investigate Entity Component system game libraries/engines? (entities, systems, etc)
 * - Can we generalize collision detection and decouple Ball, Paddle, and Bricks?
 * - Can we refactor to generalize the game object `update` function like the `draw` function?
 */

let GAME_OVER = false;
let GAME_WIN = false;
const PADDLE_SPEED = 3;
const bricks = new Bricks(canvas);
const ball = new Ball(canvas, 150, 150, 10, [2, 2]);
const paddle = new Paddle(canvas, 75, 10);
const controller = new Controller();
const gameObjects: { draw: () => void }[] = [ball, paddle, bricks];

function update() {
  ball.update(paddle, bricks.bricks);
  bricks.update();
  if (controller.active) {
    paddle.update(controller.direction, PADDLE_SPEED);
  }
  if (ball.isOutOfBounds) {
    GAME_OVER = true;
  }
  if (bricks.count === 0) {
    GAME_WIN = true;
  }
}

function draw(tFrame?: DOMHighResTimeStamp) {
  if (tFrame) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    gameObjects.forEach((object) => object.draw());
  }
}

function gameMessage(message: string, color: string) {
  context.font = "60px Courier New";
  context.fillStyle = color;
  context.fillText(message, canvas.width / 6, canvas.height / 2);
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
  if (GAME_OVER) {
    gameMessage("GAME OVER", "#F00");
  } else if (GAME_WIN) {
    draw(tFrame);
    gameMessage("GAME WIN!", "#0F0");
  } else {
    requestAnimationFrame(main);
    draw(tFrame);
    update();
  }
}

main();
