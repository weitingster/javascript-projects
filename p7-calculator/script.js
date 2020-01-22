/***
Weiting's 30 days of Vanilla Javascript:
Project #7: Calculator
where user clicks on a combination of numbers and operators to generate a formula
where user then clicks on "=" which will prompt computer to calculate the formula user input
where user clicks "C", the computer will erase past history
where if user does not click "C", and user clicks an operator and a number, then computer will continue to store the number for the next formula
where if user does not click "C", and user clicks a number, then computer will clear the current formula to start a new one

Disclaimer: I tried to add an error prompt to warn user something is wrong with the formula if any of the following occurs:
This doesn't take into consideration double (or more) of the same operator entered consecutively within the formula
This doesn't take into consideration a formula ending with an operator
this doesn't take into consideration double negatives (e.g. --3 will return syntax error)
***/

//labelling all actionable pieces on the calculator
var display = document.getElementById("display");
var clickMultiply = document.getElementById("clickMultiply");
var clickDivide = document.getElementById("clickDivide");
var clickSubtract = document.getElementById("clickSubtract");
var clickAdd = document.getElementById("clickAdd");
var clickPeriod = document.getElementById("clickPeriod");
var click9 = document.getElementById("click9");
var click8 = document.getElementById("click8");
var click7 = document.getElementById("click7");
var click6 = document.getElementById("click6");
var click5 = document.getElementById("click5");
var click4 = document.getElementById("click4");
var click3 = document.getElementById("click3");
var click2 = document.getElementById("click2");
var click1 = document.getElementById("click1");
var click0 = document.getElementById("click0");
var clickEqual = document.getElementById("clickEqual");
var clickClear = document.getElementById("clickClear");

//ensures there is no prewritten text within the display formula when user loads the calculator
display.innerText = "";

function putMultiplyIntoDisplay() {
  display.innerText += clickMultiply.value;
}

function putDivideIntoDisplay() {
  display.innerText += clickDivide.value;
}

function putSubtractIntoDisplay() {
  display.innerText += clickSubtract.value;
}


function putAddIntoDisplay() {
  display.innerText += clickAdd.value;
}

function putPeriodIntoDisplay() {
  display.innerText += clickPeriod.value;
}

function click9Display() {
  display.innerText += click9.value;
}

function click8Display() {
  display.innerText += click8.value;
}

function click7Display() {
  display.innerText += click7.value;
}

function click6Display() {
  display.innerText += click6.value;
}

function click5Display() {
  display.innerText += click5.value;
}

function click4Display() {
  display.innerText += click4.value;
}

function click3Display() {
  display.innerText += click3.value;
}

function click2Display() {
  display.innerText += click2.value;
}

function click1Display() {
  display.innerText += click1.value;
}

function click0Display() {
  display.innerText += click0.value;
}

function showAnswer() {
  var displayAnswer = eval(display.innerText);
  display.innerText = displayAnswer;

  window.onerror = function() {
    alert("Something is wrong with the formula you entered.");
    return true;
  }
}

function clearDisplay() {
  display.innerText = "";
}

//On click of the calculator buttons, take an action accordingly
clickMultiply.addEventListener("click", putMultiplyIntoDisplay);
clickDivide.addEventListener("click", putDivideIntoDisplay);
clickSubtract.addEventListener("click", putSubtractIntoDisplay);
clickAdd.addEventListener("click", putAddIntoDisplay);
clickPeriod.addEventListener("click", putPeriodIntoDisplay);
click9.addEventListener("click", click9Display);
click8.addEventListener("click", click8Display);
click7.addEventListener("click", click7Display);
click6.addEventListener("click", click6Display);
click5.addEventListener("click", click5Display);
click4.addEventListener("click", click4Display);
click3.addEventListener("click", click3Display);
click2.addEventListener("click", click2Display);
click1.addEventListener("click", click1Display);
click0.addEventListener("click", click0Display);
clickEqual.addEventListener("click", showAnswer);
clickClear.addEventListener("click", clearDisplay);