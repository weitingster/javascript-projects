/***
Weiting's 30 days of Vanilla Javascript:
Project #B: ES6 small practice Set 3
where we're trying to refactor vanilla javascript into easier syntax

Following: https://scrimba.com/g/gintrotoes6

***/


/* For of Loop (Challenge) ************************************/


// This prints no change onto the arrays of the incomes variable. If we wanted to do that, we should assign new variables.
let incomes = [6000, 8000, 9000];

for (let income of incomes) {
  income += 5000;
}

console.log(incomes);


/* #2 ------
// This prints out every single character one by one into the console
let funPhrase = "Weiting's working through ES6 exercises!";

for (const char of funPhrase) {
  console.log(char);
}
*/


/* #1 -----------
// this prints out each item in the array and then prints the addition of it all together into the console

let incomes = [6000, 8000, 9000];
let total = 0;

for (const income of incomes) {
  console.log(income);
  total += income;
}

console.log(total);
*/