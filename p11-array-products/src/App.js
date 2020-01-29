import React from 'react';
import logo from './logo.svg';
import './App.css';
import productsData from './products'
import Product from './Product'

function App() {
  const productList = productsData.map(product =>
    <Product key={product.id} name={product.name} price={product.price} description={product.description}
    /> )

  return (
    <div>
      <h1>Weiting's Set of Test Products</h1>
      <div className="product-listing-grid">
        {productList}
      </div>
    </div>
  );
}

export default App;
