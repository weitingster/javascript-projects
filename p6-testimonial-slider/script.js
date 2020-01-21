/***
Weiting's 30 days of Vanilla Javascript:
Project #6: Testimonial Slider
where user can click the forward or backward arrow keys to see 3 client testimonials.
where the testimonials are hardcoded within objects.

Disclaimer: I know there are better ways to build this with fewer lines of code.
This was my hack to get it working. My way of implementation doesn't take into consideration
if a client has the same name. If they did, then the if statements may break.

In the future, I will do a refactor on this project.
***/

//Setting the Lorem Ipsum testimonials
var testimonial0 = {
  avatar: "https://comicvine1.cbsistatic.com/uploads/scale_small/13/132327/6507037-28872490_1638064799604695_1250122498385004714_n.jpg",
  name: "Superman",
  stars: "★	★	★	★ ☆",
  testimonial: "Swine ribeye pastrami, shankle beef picanha biltong pork chop filet mignon strip steak prosciutto tail t-bone. Capicola brisket jowl, pork ham beef ribs drumstick pork chop tenderloin doner short ribs meatball."
};

var testimonial1 = {
  avatar: "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96747/6884361-inviswoman_cvr.jpg",
  name: "Invisible Woman",
  stars: "★	★	☆ ☆ ☆",
  testimonial: "Sirloin flank ground round, alcatra short loin chislic filet mignon landjaeger pancetta porchetta jerky ball tip beef ribs kevin frankfurter."
};

var testimonial2 = {
  avatar: "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/4479803-vision.jpg",
  name: "Vision",
  stars: "★	★	★	★ ★",
  testimonial: "Bacon ipsum dolor amet swine doner kevin pancetta, pastrami flank bresaola meatball alcatra. "
};

//grouping the 3 testimonial objects together
// did not end up using this array but I know the solution should use it...
//var groupTestimonial = [testimonial0, testimonial1, testimonial2];

//Grabbing all the HTML elements that will change
var leftArrow = document.getElementById("leftArrow");
var rightArrow = document.getElementById("rightArrow");
var clientAvatar = document.getElementById("clientAvatar");
var clientName = document.getElementById("clientName");
var clientStars = document.getElementById("clientStars");
var clientTestimonial = document.getElementById("clientTestimonial");

//Setting a default on page load on testimonial0, aka the first testimonial
clientAvatar.src = testimonial0.avatar;
clientName.innerText = testimonial0.name;
clientStars.innerText = testimonial0.stars;
clientTestimonial.innerText = testimonial0.testimonial;

//on clicking the left arrow key, go to the previous (-1) testimonial
function leftArrowClick() {

  if (clientName.innerText == testimonial0.name) {
    clientAvatar.src = testimonial2.avatar;
    clientName.innerText = testimonial2.name;
    clientStars.innerText = testimonial2.stars;
    clientTestimonial.innerText = testimonial2.testimonial;
  } else if (clientName.innerText == testimonial2.name) {
    clientAvatar.src = testimonial1.avatar;
    clientName.innerText = testimonial1.name;
    clientStars.innerText = testimonial1.stars;
    clientTestimonial.innerText = testimonial1.testimonial;
  } else {
    clientAvatar.src = testimonial0.avatar;
    clientName.innerText = testimonial0.name;
    clientStars.innerText = testimonial0.stars;
    clientTestimonial.innerText = testimonial0.testimonial;
  }
}

//on clicking the right arrow key, go to the next (+1) testimonial
function rightArrowClick() {
  if (clientName.innerText == testimonial0.name) {
    clientAvatar.src = testimonial1.avatar;
    clientName.innerText = testimonial1.name;
    clientStars.innerText = testimonial1.stars;
    clientTestimonial.innerText = testimonial1.testimonial;
  } else if (clientName.innerText == testimonial1.name) {
    clientAvatar.src = testimonial2.avatar;
    clientName.innerText = testimonial2.name;
    clientStars.innerText = testimonial2.stars;
    clientTestimonial.innerText = testimonial2.testimonial;
  } else {
    clientAvatar.src = testimonial0.avatar;
    clientName.innerText = testimonial0.name;
    clientStars.innerText = testimonial0.stars;
    clientTestimonial.innerText = testimonial0.testimonial;
  }
}

leftArrow.addEventListener("click", leftArrowClick);
rightArrow.addEventListener("click", rightArrowClick);




/*** After reviewing the code with my partner, the following was shared with me
for future consideration to modify the above code I wrote. This method eliminates many
lines of code I wrote;

var curIndex = 0;

function leftArrowClick() {
  curIndex = ((curIndex - 1) + 3) % 3;
  clientAvatar.src = groupTestimonial[curIndex].avatar;
  clientName.innerText = groupTestimonial[curIndex].name;
  clientStars.innerText = groupTestimonial[curIndex].stars;
  clientTestimonial.innerText = groupTestimonial[curIndex].testimonial;

  ***/