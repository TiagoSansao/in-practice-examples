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

foods.some((food, index, array) => {
  console.log(`Food: ${food.name}, index: ${index}, array: ${array}`);
  return food.type === 'vegetable';
});

/*
foods.some((food, index, array) => {
  console.log(`Food: ${food.name}, index: ${index}, array: ${array}`);
  return food.type === 'meat';
});
*/
