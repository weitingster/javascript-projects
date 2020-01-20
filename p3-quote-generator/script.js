/***
Weiting's 30 days of Vanilla Javascript:
Project #3: quote generator
where clicking on a button generates a randomized quote and person who said it
where all quotes and names comes from somewhere on the web, using an API
***/

var generateNewQuoteButton = document.getElementById("generateNewQuoteButton");
var quotePhrase = document.getElementById("quotePhrase");
var authorName = document.getElementById("authorName");

var needNewQuote = function() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(`${data.content} —${data.author}`) // leave this in here for reminder
      quotePhrase.innerText = data.content;
      authorName.innerText = data.author;
    })
}

generateNewQuoteButton.addEventListener("click", needNewQuote);

needNewQuote();