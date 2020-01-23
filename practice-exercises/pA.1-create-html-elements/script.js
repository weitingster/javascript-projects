/***
Weiting's 30 days of Vanilla Javascript:
Project A.1: Create HTML Elements
where Appending a child element into parent
***/

//On click of the button, this occurs:
function latestNews() {
  // stating I want to create a <p> tag somewhere
  var newPara = document.createElement("p");

  //naming another variable so it stores the text easily
  var add_news = document.createTextNode("Adding my content into the p tag");

  //take the text we just stored and put it inside the <p> tag we created by using appendChild()
  newPara.appendChild(add_news);

  //get the element ID named #footer
  var getFooter = document.getElementById("footer");

  //use insertBefore() to put newPara before footer
  document.body.insertBefore(newPara, getFooter);
}