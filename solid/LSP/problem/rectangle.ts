class Rectangle {
  protected width: number;
  protected height: number;

  public setWidth(width: number) {
    this.width = width;
  }

  public setHeight(height: number) {
    this.height = height;
  }

  public area(): number {
    return this.width * this.height;
  }
}

export { Rectangle };
