import Entity from "./Entity";

type PaddleDirection = -1 | 1;
type PaddleSpeed = 1 | 2 | 3 | 4 | 5;

class Paddle extends Entity {
  private x: number;
  private y: number;

  constructor(
    canvas: HTMLCanvasElement,
    public width: number,
    public height: number
  ) {
    super(canvas);
    this.x = (canvas.width - width) / 2;
    this.y = canvas.height - this.height;
  }

  update(direction: PaddleDirection, speed: PaddleSpeed) {
    this.x = Math.max(
      Math.min(this.x + speed * direction, this.canvas.width - this.width),
      0
    );
  }

  draw() {
    this.context.beginPath();
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.fillStyle = "#0095DD";
    this.context.fill();
    this.context.closePath();
  }
}

export default Paddle;
