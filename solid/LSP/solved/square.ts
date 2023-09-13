import { Shape } from './shape';

class Square implements Shape {
  private sideLength: number;

  public setSideLength(sideLength: number) {
    this.sideLength = sideLength;
  }

  public area(): number {
    return this.sideLength * this.sideLength;
  }
}

export { Square };
