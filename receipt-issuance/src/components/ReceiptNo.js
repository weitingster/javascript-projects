import React from "react"

function ReceiptNo() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  	var string_length = 10;
  	var randomstring = '';
  	for (var i=0; i<string_length; i++) {
  		var rnum = Math.floor(Math.random() * chars.length);
  		randomstring += chars.substring(rnum,rnum+1);
  	}

    return(
      <div>
        <h2>Receipt ID: {randomstring}</h2>
      </div>
    )
}

export default ReceiptNo
