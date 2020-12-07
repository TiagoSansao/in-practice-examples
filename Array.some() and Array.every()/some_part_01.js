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

const isThereAVegetable = foods.some((food) => food.type === 'vegetable');
const isThereAMeat = foods.some((food) => food.type === 'meat');

console.log('Is there at least one vegetable? ' + isThereAVegetable);
console.log('Is there at least one meat? ' + isThereAMeat);
