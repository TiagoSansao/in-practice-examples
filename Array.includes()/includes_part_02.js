// includes method check if element is in array

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

if (numbers.includes(5, -5)) console.log('Number 5 was found.');

// Check if number is present without using .includes() method;

for (let c = 0; c < numbers.length; c += 1) {
  if (numbers[c] === 5) {
    console.log('Number 5 is present');
    break;
  }
}
