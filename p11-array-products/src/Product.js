import React from 'react';
import ReactDOM from 'react-dom';

function Product(props) {
    return (
      <div className="product-card">
        <h2>{props.name}</h2>
        <h3>Price: ${props.price} CAD</h3>
        <p>{props.description}</p>
      </div>
    )
}

export default Product;
