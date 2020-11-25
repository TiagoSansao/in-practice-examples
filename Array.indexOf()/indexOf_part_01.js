// Finding the index of word's first letter if the word exists in the given string.

const text = 'this coffee is smelling good, I will drink this coffee!';

const indexOfCoffee = text.indexOf('coffee');

const indexOfTea = text.indexOf('tea');

console.log(`\nCoffe's index: ${indexOfCoffee}`);
console.log(`Tea's index: ${indexOfTea}\n`);

// If .indexOf() returns -1 it's because the value targeted wasn't found. If not, it will return the word's first letter's index.
