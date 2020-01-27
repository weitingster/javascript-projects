/***
Weiting's 30 days of Vanilla Javascript:
Project #B: ES6 small practice
where we're trying to refactor vanilla javascript into easier syntax

Following: https://scrimba.com/g/gintrotoes6

***/


/* Template literals ************************************/

//Example A
let word1 = 'weiting';
let word2 = 'bollu';

//const fullName = word1 + ' ' + word2;
const fullName = `${word1} ${word2}`; //New ES6 template literal

console.log(fullName);


/* Template literals ************************************/

//Example B
let word3 = 'vishal';
let word4 = 'bollu';
let num1 = 2;
let num2 = 3;

//const fullName = word1 + ' ' + word2;
const secondFullName = `${num1 + num2} ${word3} ${word4}`; //New ES6 template literal

console.log(secondFullName);


/* Template literals ************************************/

//Example C
let hello = 'hello';
let world = 'world';
//let sample = 'Hello \n' + 'world';
let sample = `${hello}
${world}
`

console.log(sample);


/* Destructuring Objects ************************************/

const personalInformation = {
  myFirstName: 'Stacey',
  myLastName: 'Xu',
  city: 'Toronto',
  state: 'Ontario',
  zipCode: 93829
};

const {
  myFirstName: fn,
  myLastName: ln
} = personalInformation;

console.log(`${fn} ${ln}`);


/* Destructuring Arrays ************************************/
let [myNextFirstName, myNextMiddleName, myNextLastName] = ['Weiting', 'World Dominator', 'Bollu'];

myNextFirstName = 'Vishal'; //Changes the "Weiting" to "Vishal"

console.log(myNextFirstName)


/* Object Literals ************************************/
function addressMaker(myCity, myState) {
  const newAddress = {
    myCity, //newCity:
    myState //newState: myState;
  };

  console.log(newAddress)
}

addressMaker('Toronto', 'Ontario');

/* Object Literals ************************************/