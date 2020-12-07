const foods = [
  {
    name: 'broccoli',
    type: 'vegetable',
  },
  {
    name: 'carrot',
    type: 'vegetable',
  },
  {
    name: 'spinach',
    type: 'vegetable',
  },
  // Uncomment below here and check the results again.
  // {
  //   name: 'chicken',
  //   type: 'meat',
  // },
];

const areThereOnlyVegetables = foods.every((food) => food.type === 'vegetable');
const areThereOnlyMeats = foods.every((food) => food.type === 'meat');

console.log('All the foods are vegetables? ' + areThereOnlyVegetables);
console.log('All the foods are meats? ' + areThereOnlyMeats);
