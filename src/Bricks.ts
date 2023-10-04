import Ball from "./Ball";
import Entity from "./Entity";

interface Brick {
  x: number;
  y: number;
}

class Bricks extends Entity {
  margin = 30;
  brickDimensions: [w: number, h: number] = [75, 20];
  brickpadding = 10;
  rows = 3;
  // TODO: calculate based on canvas width
  cols = 6;

  private liveBricks: Brick[][] = [];

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.liveBricks = this.createBricks();
  }

  createBricks() {
    const [brickWidth, brickHeight] = this.brickDimensions;
    const bricks: Brick[][] = [[], [], []];
    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < this.rows; row++) {
        const x = 30 + (brickWidth + this.brickpadding) * col;
        const y = 30 + (brickHeight + this.brickpadding) * row;
        bricks[row][col] = { x, y };
      }
    }
    return bricks;
  }

  update() {
    // FIXME: test missing brick
    delete this.liveBricks[2][4];
  }

  drawBrick(brick: Brick, width: number, height: number) {
    this.context.beginPath();
    this.context.rect(brick.x, brick.y, width, height);
    this.context.fillStyle = "#0095DD";
    this.context.fill();
    this.context.closePath();
  }

  draw() {
    const [brickWidth, brickHeight] = this.brickDimensions;

    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < this.rows; row++) {
        const brick = this.liveBricks[row][col];
        if (brick) {
          this.drawBrick(brick, brickWidth, brickHeight);
        }
      }
    }
  }
}

export default Bricks;
