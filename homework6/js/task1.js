// Your code goes here
const a1 = parseInt(prompt('enter a1'));
const a2 = parseInt(prompt('enter a1'));
const b1 = parseInt(prompt('enter a1'));
const b2 = parseInt(prompt('enter a1'));
const c1 = parseInt(prompt('enter a1'));
const c2 = parseInt(prompt('enter a1'));
const mid1 = (a1 + b1) / 2;
const mid2 = (a2 + b2) / 2;
if (c1 === mid1 && c2 === mid2) {
  console.log(true);
} else {
  console.log(false);
}
