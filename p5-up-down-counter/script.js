/***
Weiting's 30 days of Vanilla Javascript:
Project #5: Up and Down Counter
where user has two button options. One adds +1 each time user clicks it and the other -1 each time user clicks it.
***/

var counterLabel = document.getElementById("counterLabel");
var lowerCount = document.getElementById("lowerCount");
var addCount = document.getElementById("addCount");

//Setting the counter variable
var total = 0;

// Function to add 1 each time button is clicked
function add() {
  total = total + 1
  console.log("add" + total) // can take off but reminding myself this is how I tested the code
  counterLabel.innerText = total
}

// Function to deduct 1 each time button is clicked
function lower() {
  total = total - 1
  console.log("lower" + total) // can take off but reminding myself this is how I tested the code
  counterLabel.innerText = total
}

lowerCount.addEventListener("click", lower);
addCount.addEventListener("click", add);