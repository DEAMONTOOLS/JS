// Your code goes here
let a1 = +prompt('enter a1');
let a2 = +prompt('enter a2');
let b1 = +prompt('enter b1');
let b2 = +prompt('enter b2');
let c1 = +prompt('enter c1');
let c2 = +prompt('enter c2');
let mid1 = (a1 + b1) / 2;
let mid2 = (a2 + b2) / 2;
if (c1 === mid1 && c2 === mid2) {
  console.log(true);
} else {
  console.log(false);
}
