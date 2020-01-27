/***
Weiting's 30 days of Vanilla Javascript:
Project #B: ES6 small practice #4
where we're trying to refactor vanilla javascript into easier syntax

Following: https://scrimba.com/g/gintrotoes6

***/


/* Spread Operator ************************************/

let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];

example2.push(true);

console.log(example2);


/* Rest Operator ************************************/
//When you don't know how many values you will have, you can use the rest operator.

function add(...nums) {
  console.log(nums);
}

add(5, 3, 6, 2);