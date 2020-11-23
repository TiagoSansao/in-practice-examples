// Showing "index" and "array" arguments in callback.

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

const fruits = foods.filter((food, index, array) => {
  console.log(`Food: ${food.name}, index: ${index}, array: ${array}`);
  return food.type === 'fruit';
});

console.log(fruits);
