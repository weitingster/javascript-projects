/***
Weiting's 30 days of Vanilla Javascript:
Project #8: Dynamic Object Card Display
where system contains 6 object variables and HTML only has one card styled.
Objective is to dynamically display it onto the page.
the page.

Dislcaimer: got it to show up, sized half way. Missing consistent width of each product card.
***/


var product1 = {
  image: "img/annual-membership-fee.png",
  name: "Annual Membership Fee",
  category: "Membership",
  priceTag: "$99.00 CAD",
  productDescription: "Active: July 1 to June 30 of each year."
};

var product2 = {
  image: "img/half-year-membership.png",
  name: "Half-Year Membership Fee",
  category: "Membership",
  priceTag: "$49.00 CAD",
  productDescription: "Active: January to June 30 of each year."
};

var product3 = {
  image: "img/club-tshirt.png",
  name: "Club T-Shirt",
  category: "SWAG",
  priceTag: "$15.00 CAD",
  productDescription: "Wear a cool t-shirt around when you partake in activities."
};

var product4 = {
  image: "img/district7070-pin.png",
  name: "District 7070 Pin",
  category: "SWAG",
  priceTag: "$3.00 CAD",
  productDescription: "A Toronto skyline pin to wear on your shirt when you attend functions."
};

var product5 = {
  image: "img/rotaract-club-pin.png",
  name: "Rotaract Pin",
  category: "SWAG",
  priceTag: "$8.00 CAD",
  productDescription: "A Rotaract specific pin to wear on your shirt when you attend functions."
};

var product6 = {
  image: "img/name-badge.png",
  name: "Name Badge",
  category: "Custom Product",
  priceTag: "$5.00 CAD",
  productDescription: "Wear your name badge so everyone recognizes who you are."
};

var allProducts = [product1, product2, product3, product4, product5, product6];
/***
var productImage = document.getElementById("product-image");
var productName = document.getElementById("product-name");
var productCategory = document.getElementById("product-category");
var productPrice = document.getElementById("product-price");
var productDescription = document.getElementById("product-description");
***/
var parentElement = document.getElementById("innerRow");

/*
<div id="product-card">
  <img src="" alt="info here" id="product-image"/>
  <h2 id="product-name"></h2>
  <p id="product-category"></p>
  <h3 id="product-price"></h3>
  <p id="product-description"></p>
</div>
*/

function showProductContent() {
  for (var i = 0; i < allProducts.length; i++) {
    var productCard = document.createElement('div');
    productCard = parentElement.appendChild(productCard);

    var image = document.createElement('img');
    image = productCard.appendChild(image);
    image.src = allProducts[i].image;

    var name = document.createElement('h2');
    name = productCard.appendChild(name);
    name.innerText = allProducts[i].name;

    var category = document.createElement('p');
    category = productCard.appendChild(category);
    category.innerText = allProducts[i].category;

    var priceTag = document.createElement('h3');
    priceTag = productCard.appendChild(priceTag);
    priceTag.innerText = allProducts[i].priceTag;


    var productDescription = document.createElement('p');
    productDescription = productCard.appendChild(productDescription);
    productDescription.innerText = allProducts[i].productDescription;

    console.log(allProducts[i]); // shows that the above is looping and all printing
  }
  console.log("done"); //for personal use; to know code is working
}

showProductContent();