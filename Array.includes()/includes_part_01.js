// includes method to know if value is present in string giving start index

const text = 'this coffee is smelling good!';

/* ---------- */

console.log('--- COFFEE ---');

console.log(text.includes('coffee', 4)); // return true or false

if (text.includes('coffee', 4)) {
  console.log('Word "coffee" was found');
} else {
  console.log('Word "coffee" was not found');
}

/* ---------- */

console.log('--- TEA ---');

console.log(text.includes('tea')); // return true or false

if (text.includes('tea')) {
  console.log('Word "tea" was found');
} else {
  console.log('Word "tea" was not found');
}

/* ---------- */
