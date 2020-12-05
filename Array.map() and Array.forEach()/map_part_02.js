// Using .map() to iterate on an array passing three arguments in the callback

const array = [1, 2, 3, 4, 5];
const newArray = array.map((value, index, arr) => {
  console.log(`Value: ${value}, index: ${index}, array: ${arr}`);
  return value * value * 3.14;
});

console.log(newArray);
