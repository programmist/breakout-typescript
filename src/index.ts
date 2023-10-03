const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
const ctx = canvas.getContext("2d")!;

class CanvasInfo {
  constructor(
    public height: number,
    public width: number,
    public context: CanvasRenderingContext2D
  ) {}
}

class Ball {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public velocity: [dy: number, dx: number],
    private canvas: CanvasInfo
  ) {}

  checkCollisions() {
    const {
      x,
      y,
      radius,
      velocity: [dy, dx],
      canvas: { width, height },
    } = this;

    if (y + dy < radius || y + dy > height - radius) {
      this.velocity[0] = -this.velocity[0];
    }

    if (x + dx < radius || x + dx > width - radius) {
      this.velocity[1] = -this.velocity[1];
    }
  }

  update() {
    this.checkCollisions();
    const [dy, dx] = this.velocity;
    this.y += dy;
    this.x += dx;
  }

  draw() {
    const { context } = this.canvas;

    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
  }

  setVelocity(velocity: [number, number]) {
    this.velocity = velocity;
  }

  setPosition(y: number, x: number) {
    this.y = y;
    this.x = x;
  }
}

function update() {
  ball.update();
}

function draw(tFrame?: DOMHighResTimeStamp) {
  if (tFrame) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ball.draw();
  }
}

const canvasInfo = new CanvasInfo(canvas.height, canvas.width, ctx);
const ball = new Ball(50, 50, 10, [2, 2], canvasInfo);

function main(tFrame?: DOMHighResTimeStamp) {
  requestAnimationFrame(main);
  draw(tFrame);
  update();
}

main();
