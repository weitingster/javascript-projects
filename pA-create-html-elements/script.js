/***
Weiting's 30 days of Vanilla Javascript:
Project #A: Learn - Create HTML Elements Using Javascript
where...

****** FOR REFERENCE ******
<div id="bookmarks">                <-- parent element
  <div>https://facebook.com</div>   <-- child element
  <div>https://instagram.com</div>  <-- child element
  <div>https://twitter.com</div>    <-- child element
</div>
***/


var bookmarks = [];
var childElement, appendChildElement, parentElement;

// Bind to id bookmarks
parentElement = document.getElementById("bookmarks");

// Add bookmarks
bookmarks.push({
  url: "https://facebook.com"
});
bookmarks.push({
  url: "https://instagram.com"
});
bookmarks.push({
  url: "https://twitter.com"
});


// Add child elements
for (let bookmark of bookmarks) {
  childElement = document.createElement("div");
  //Line 35 creates child divs inside parent div that didn't exist in index.html. See: https://wontosa.d.pr/dahDoN
  appendChildElement = parentElement.appendChild(childElement)
  appendChildElement.innerHTML = bookmark.url
}