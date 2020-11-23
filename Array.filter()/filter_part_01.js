// Example to show how to filter without using the filter method.

const foods = [
  {
    name: 'banana',
    type: 'fruit',
  },
  {
    name: 'broccoli',
    type: 'vegetable',
  },
  {
    name: 'apple',
    type: 'fruit',
  },
  {
    name: 'tomato',
    type: 'fruit',
  },
  {
    name: 'carrot',
    type: 'vegetable',
  },
];

const fruits = [];

for (let c = 0; c < foods.length; c += 1) {
  if (foods[c].type === 'fruit') {
    fruits.push(foods[c]);
  }
}

console.log(fruits);
