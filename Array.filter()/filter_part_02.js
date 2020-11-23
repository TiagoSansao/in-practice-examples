// Filtering values from an array using filter method.

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

const fruits = foods.filter((food) => food.type === 'fruit');

// OR

// const fruits = foods.filter(function (food) {
//   return food.type === 'fruit';
// });

console.log(fruits);
