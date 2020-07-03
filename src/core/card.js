import React, { useState, useEffect } from "react";
import ImageHelper from "../admin/helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart } from "./helper/cartHelper";
const Card = ({ product, addtoCart = true, removeFromCart = false }) => {
  const [redirect, setredirect] = useState(false);
  const [count, setcount] = useState(product.count)

  const cardTitle = product ? product.name : "A Photo From DB";
  const cardDescription = product ? product.description : "Default Description";
  const cardPrice = product ? product.price : "DEFAULT";

  const addToCart = () => {
    addItemToCart(product, () => setredirect(true));
  };

  const getRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to='/cart' />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button
          onClick={addToCart}
          className='btn btn-block btn-outline-success mt-2 mb-2'
        >
          Add to Cart
        </button>
      )
    );
  };
  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {}}
          className='btn btn-block btn-outline-danger mt-2 mb-2'
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div className='card text-white bg-dark border border-info col-xs-12 col-sm-12 '>
      <div className='card-header lead'>{cardTitle}</div>
      <div className='card-body'>
      {getRedirect(redirect)}
        <ImageHelper product={product}></ImageHelper>
        <p className='lead bg-success font-weight-normal text-wrap'>
          {cardDescription}
        </p>
        <p className='btn btn-success rounded  btn-sm px-4'>${cardPrice}</p>
        <div className='row'>
          <div className='col-12'>{showAddToCart(addtoCart)}</div>
          <div className='col-12'>{showRemoveFromCart(removeFromCart)}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
