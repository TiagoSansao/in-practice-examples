import { Rectangle } from './rectangle';
import { Square } from './square';

function test(rectangle: Rectangle) {
  rectangle.setHeight(3);
  rectangle.setWidth(4);

  const area = rectangle.area();
  console.log(area);
}

const rectangle = new Square();
test(rectangle);
