import Entity from "./Entity";

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

  update() {
    this.x += 1;
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
