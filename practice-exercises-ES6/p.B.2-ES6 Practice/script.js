/***
Weiting's 30 days of Vanilla Javascript:
Project #B: ES6 small practice Set 2
where we're trying to refactor vanilla javascript into easier syntax

Following: https://scrimba.com/g/gintrotoes6

***/


/* Object Literal ************************************/
function addressMaker(address) {
  const {
    city,
    state
  } = address; //this gives us an opportunity to skip address.city

  const newAddress = {
    city,
    state,
    country: 'United States'
  };
  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)

  /* Old Version
  const newAnddress = {
    //city: address.city,
    //state: address.state,
    //country: 'United States'
  };
  */
}

addressMaker({
  city: 'Austin',
  state: 'Texas'
});