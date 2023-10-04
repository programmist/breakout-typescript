class Controller {
  constructor(
    public leftPressed: boolean = false,
    public rightPressed: boolean = false
  ) {}

  get active() {
    return this.leftPressed || this.rightPressed;
  }

  get direction() {
    return this.leftPressed ? -1 : 1;
  }

  pressLeft() {
    this.rightPressed = false;
    this.leftPressed = true;
  }

  pressRight() {
    this.leftPressed = false;
    this.rightPressed = true;
  }

  releaseLeft() {
    this.leftPressed = false;
  }

  releaseRight() {
    this.rightPressed = false;
  }
}

export default Controller;
