var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM

/*** Time changes***/
var message = document.getElementById("timeEvent");

/*** Cat images variables ***/
var lolcat = document.getElementById('lolcat');
var image = "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png";

function changeImageOnPartyClick() {
  console.log(time);
  if (time == partyTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
  } else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME...";
  } else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
  } else if (time == wakeUpTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
  } else if (time < noon) {
    image = "https://the6track.com/wp-content/uploads/2017/10/Two-beautiful-cats-Good-morning-images-for-cat-lovers.jpg";
    messageText = "Good morning!";
  } else if (time > evening) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Good Evening!";
  } else {
    image = "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png";
    messageText = "Good afternoon!";
  }

  message.innerText = messageText;
  lolcat.src = image;
}

function showCurrentTime() {
  // display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }
  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
}

showCurrentTime();

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);




var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");

var partyEvent = function() {

  if (isPartyTime === false) {
    isPartyTime = true;
    time = partyTime;
    console.log("partyEvent=false " + time);
    // text in the button should read "Party Over"
    partyTimeButton.innerText = "Party Over";
    // color of the button should be "#0A8DAB" (bonus!)
    partyTimeButton.style.backgroundColor = "0A8DAB";
  } else {
    isPartyTime = false;
    time = new Date().getHours();
    console.log("partyEvent=true " + time);
    // text in the button should read "PARTY TIME!"
    partyTimeButton.innerText = "PARTY TIME!!!";
    // color of the button should be "#222" (bonus!)
    partyTimeButton.style.backgroundColor = "#222";
  }
  changeImageOnPartyClick();
};

partyTimeButton.addEventListener('click', partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function() {
  lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);

var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function() {
  napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);