import Entity from "./Entity";

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

  checkCollisions() {
    const {
      x,
      y,
      radius,
      velocity: [dy, dx],
      canvas: { width, height },
    } = this;

    if (y + dy < radius) {
      this.velocity[0] = -this.velocity[0];
    }

    if (x + dx < radius || x + dx > width - radius) {
      this.velocity[1] = -this.velocity[1];
    }
  }

  get isOutOfBounds() {
    return this.y > this.canvas.height;
  }

  update() {
    this.checkCollisions();
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
