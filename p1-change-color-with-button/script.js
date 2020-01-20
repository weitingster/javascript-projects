/***
Weiting's 30 days of Vanilla Javascript:
Project #1: click a button to change background,
where background is a randomized colour.
***/

var onClick = document.getElementById("onClick");

//Selecting a random colour to display as background colour
function onClickNow() {
  var colorPicker = ["red", "blue", "grey", "green", "purple", "pink", "lightblue"];
  var randomColor = colorPicker[Math.floor(Math.random() * colorPicker.length)];
  document.body.style.background = randomColor;
}

onClick.addEventListener("click", onClickNow); //Hit the button to change the color