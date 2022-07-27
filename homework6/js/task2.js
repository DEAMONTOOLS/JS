// Your code goes here
const a = parseInt(prompt('enter A'));
const b = parseInt(prompt('enter B'));
const c = parseInt(prompt('enter C'));
if (a + b > c) {
  if (a === b && a === c) {
    console.log('Equivalent triangle.');
  } else if (a === b || a === c || c === b) {
    console.log('Isosceles triangle.');
  } else {
    console.log('Normal triangle.');
  }
} else {
  console.log('Triangle doesn\'t exist.');
}
