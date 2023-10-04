import { Brick } from "./Bricks";
import Entity from "./Entity";
import Paddle from "./Paddle";

class Ball extends Entity {
  constructor(
    canvas: HTMLCanvasElement,
    protected x: number,
    protected y: number,
    public radius: number,
    public velocity: [dy: number, dx: number]
  ) {
    super(canvas);
  }

  private updateOnCollision(paddle: Paddle) {
    const {
      x,
      y,
      radius,
      velocity: [dy, dx],
      canvas: { width, height },
    } = this;

    if (y + dy < radius) {
      this.velocity[0] = -this.velocity[0];
    } else if (y + dy > height - paddle.height) {
      // check for paddle collision
      if (x > paddle.x && x < paddle.x + paddle.width) {
        this.velocity[0] = -this.velocity[0];
      }
    }

    if (x + dx < radius || x + dx > width - radius) {
      this.velocity[1] = -this.velocity[1];
    }
  }

  public updateOnBrickCollision(bricks: readonly Brick[][]) {
    const rows = bricks.length;
    const cols = bricks[0].length;
    outer: for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const brick = bricks[row][col];
        if (brick.live) {
          const { x: x1, y: y1, width, height } = bricks[row][col];
          const x2 = x1 + width;
          const y2 = y1 + height;
          if (this.x > x1 && this.x < x2 && this.y > y1 && this.y < y2) {
            this.velocity[0] = -this.velocity[0];
            brick.live = false;
            break outer;
          }
        }
      }
    }
  }

  get isOutOfBounds() {
    return this.y > this.canvas.height;
  }

  update(paddle: Paddle, bricks: readonly Brick[][]) {
    this.updateOnCollision(paddle);
    this.updateOnBrickCollision(bricks);
    const [dy, dx] = this.velocity;
    this.y += dy;
    this.x += dx;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.fillStyle = "#0095DD";
    this.context.fill();
    this.context.closePath();
  }

  setVelocity(velocity: [number, number]) {
    this.velocity = velocity;
  }

  setPosition(y: number, x: number) {
    this.y = y;
    this.x = x;
  }
}

export default Ball;
