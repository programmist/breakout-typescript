class Entity {
  protected context: CanvasRenderingContext2D;
  constructor(protected canvas: HTMLCanvasElement) {
    this.context = canvas.getContext("2d")!;
  }
}

export default Entity;
