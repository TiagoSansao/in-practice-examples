// Using .map() to iterate on an array using its values to create a new array.

const adjectives = ['beautiful', 'handsome', 'awesome', 'attractive', 'humble'];
const truth = adjectives.map(function (value) {
  return `Tiago is ${value}`;
});

console.log(adjectives); // the iterated array hasn't changed
console.log(truth);
