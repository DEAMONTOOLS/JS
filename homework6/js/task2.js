// Your code goes here
let a = +prompt('enter A');
let b = +prompt('enter B');
let c = +prompt('enter C');
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
