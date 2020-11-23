// Removing values from an array but retrieving them in another array.

const colors = ['red', 'blue', 'green', 'yellow', 'brown', 'purple'];

const removedColors = colors.splice(1, 2);

console.log('Current colors: ' + colors);
console.log('Removed colors ' + removedColors);
