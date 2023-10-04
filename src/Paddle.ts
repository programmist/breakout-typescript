import Entity from "./Entity";

type PaddleDirection = -1 | 1;
type PaddleSpeed = 1 | 2 | 3 | 4 | 5;

class Paddle extends Entity {
  private _x: number;
  private _y: number;

  constructor(
    canvas: HTMLCanvasElement,
    public width: number,
    public height: number
  ) {
    super(canvas);
    this._x = (canvas.width - width) / 2;
    this._y = canvas.height - this.height;
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  update(direction: PaddleDirection, speed: PaddleSpeed) {
    this._x = Math.max(
      Math.min(this._x + speed * direction, this.canvas.width - this.width),
      0
    );
  }

  draw() {
    this.context.beginPath();
    this.context.rect(this._x, this._y, this.width, this.height);
    this.context.fillStyle = "#0095DD";
    this.context.fill();
    this.context.closePath();
  }
}

export default Paddle;
