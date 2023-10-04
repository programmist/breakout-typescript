import Ball from "./Ball";
import Entity from "./Entity";

export interface Brick {
  x: number;
  y: number;
  width: number;
  height: number;
  live: boolean;
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

  get bricks(): readonly Brick[][] {
    return this.liveBricks;
  }

  get count() {
    return this.liveBricks.reduce(
      (count, row) =>
        count +
        row.reduce((rowCount, brick) => rowCount + (brick.live ? 1 : 0), 0),
      0
    );
  }

  createBricks() {
    const [brickWidth, brickHeight] = this.brickDimensions;
    const bricks: Brick[][] = [[], [], []];
    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < this.rows; row++) {
        const x = 30 + (brickWidth + this.brickpadding) * col;
        const y = 30 + (brickHeight + this.brickpadding) * row;
        bricks[row][col] = {
          x,
          y,
          width: brickWidth,
          height: brickHeight,
          live: true,
        };
      }
    }
    return bricks;
  }

  update() {
    // FIXME: test missing brick
  }

  drawBrick(brick: Brick) {
    const { x, y, width, height } = brick;
    this.context.beginPath();
    this.context.rect(x, y, width, height);
    this.context.fillStyle = "#0095DD";
    this.context.fill();
    this.context.closePath();
  }

  draw() {
    const [brickWidth, brickHeight] = this.brickDimensions;

    for (let col = 0; col < this.cols; col++) {
      for (let row = 0; row < this.rows; row++) {
        const brick = this.liveBricks[row][col];
        if (brick.live) {
          this.drawBrick(brick);
        }
      }
    }
  }
}

export default Bricks;
