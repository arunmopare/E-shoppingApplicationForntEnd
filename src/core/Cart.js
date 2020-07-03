import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { loadCart } from "./helper/cartHelper";

const Cart = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    setproducts(loadCart());
  }, []);

  const loadAllProducts = () => {
    return (
      <div className='text-center'>
        <h2>This section is for load products</h2>
        {products.map((product, index) => (
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
          />
        ))}
      </div>
    );
  };

  const LoadCheckout = () => {
    return (
      <div className='text-center'>
        <h2>This section is for checkout</h2>
      </div>
    );
  };

  return (
    <Base title='Cart Page' description='Ready to Checkout'>
      <div className='row text-center'>
        <div className='col-6'>{loadAllProducts()}</div>
        <div className='col-6'>{LoadCheckout()}</div>
      </div>
    </Base>
  );
};

export default Cart;
