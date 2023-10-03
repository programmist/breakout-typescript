const canvas = <HTMLCanvasElement>document.getElementById("myCanvas");
const ctx = canvas.getContext("2d")!;

class Ball {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public velocity: [dy: number, dx: number]
  ) {}

  update() {
    const [dy, dx] = this.velocity;
    this.y += dy;
    this.x += dx;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
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

const ball = new Ball(50, 50, 10, [0.25, 0.5]);

function main(tFrame?: DOMHighResTimeStamp) {
  requestAnimationFrame(main);
  draw(tFrame);
  update();
}

main();
