// Copy values from array with second argument being negative

const colors = ['red', 'blue', 'green', 'yellow', 'brown', 'purple'];

/* in this case .slice() will copy from the given index and finish two values before the end of the array, you can think it as array.length - (second argument) */
const copy = colors.slice(1, -2);

console.log(copy);
