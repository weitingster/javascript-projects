/***
Weiting's 30 days of Vanilla Javascript:
Project #2: click a button to change background,
where background is a randomized colour;
where the hex colour code displays in the text label; and
where on page load, it displays white because there isn't a colour chosen yet
***/

var onClick = document.getElementById("onClick");
var hexCodeLabel = document.getElementById("hexCodeLabel");

hexCodeLabel.innerText = "#FFF";
//Selecting a random colour to display as background colour and change the text label
function onClickNow() {
  var colorPicker = ["#EC694C", "#ECCF4C", "#C7EC4C", "#4CECB6", "#4CB6EC", "#966BEE", "#E274D5", "#E2748B"];
  var randomColor = colorPicker[Math.floor(Math.random() * colorPicker.length)];
  document.body.style.background = randomColor;
  hexCodeLabel.innerText = randomColor;
}

onClick.addEventListener("click", onClickNow); //Hit the button to change the color