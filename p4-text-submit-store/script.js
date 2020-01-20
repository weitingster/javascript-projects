/***
Weiting's 30 days of Vanilla Javascript:
Project #4: Text Submit and Store
where user enters text into a text box, clicks on button, the input text should be stored inside a label.
***/

var secretMessageSend = document.getElementById("secretMessageSend");
var onClick = document.getElementById("onClick");
var secretMessageStored = document.getElementById("secretMessageStored");

function getMessage() {
  var rememberMessage = secretMessageSend.value;
  console.log(rememberMessage); // just to know it was logged into console. Can remove.
  secretMessageStored.innerText = rememberMessage;

}

onClick.addEventListener("click", getMessage);