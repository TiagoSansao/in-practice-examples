// Sort with arguments, it'll correctly sort numbers now.

const numbers = [190, 400, 530, 1500, 770, 530];

// numbers.sort((a, b) => a - b); // arrow function without curly braces {} has return implicitly.

// or

numbers.sort(function (a, b) {
  console.log(a + '|' + b);
  return a - b;
});

console.log(numbers);
