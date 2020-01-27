/***
Weiting's 30 days of Vanilla Javascript:
Project #B: ES6 small practice #5
where we're trying to refactor vanilla javascript into easier syntax

Following: https://scrimba.com/g/gintrotoes6

***/


/* Arrow Functions ************************************/
//Arrow functions eliminate some of the extra work around the broilerplate of callback functions.


//Another way to do the old way is to use the => and eliminate some brackets
function add(...nums) {
  let total = nums.reduce((x, y) => x + y);
  console.log(total);
}

add(5, 3, 6, 2);

/*
//OLD WAY
function add(...nums) {
  let total = nums.reduce(function(x, y) {
    return x + y;
  });
  console.log(total);
}

add(5, 3, 6, 2);
*/