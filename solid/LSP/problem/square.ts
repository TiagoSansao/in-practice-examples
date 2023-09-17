import { Rectangle } from './rectangle';

class Square extends Rectangle {
  public setWidth(width: number) {
    this.width = width;
    this.height = width;
  }

  public setHeight(height: number) {
    this.height = height;
    this.width = height;
  }
}

export { Square };
