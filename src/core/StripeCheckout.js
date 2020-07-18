import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../auth/helper";
import { cartEmpty, loadCart } from "./helper/cartHelper";
import { Link } from "react-router-dom";
import { getDefaultNormalizer } from "@testing-library/react";
import StripeCheckoutButton from "react-stripe-checkout";
import { API } from "../backend";
import { createOrder } from "./helper/orderHelper";

const StripeCheckout = ({
  products,
  setreload = (f) => f,
  reload = undefined,
}) => {
  const [data, setdata] = useState({
    loading: false,
    success: false,
    error: "",
    address: "",
  });

  const token = isAuthenticated() && isAuthenticated().token;
  const userId = isAuthenticated() && isAuthenticated().user._id;

  const getFinalPrice = () => {
    let amount = 0;
    products.map((p) => {
      amount = amount + p.price;
    });
    return amount;
  };
  const makePayment = (token) => {
    const body = {
      token,
      products,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`${API}/stripepayment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((responce) => {
        console.log(responce);
      })
      .catch((error) => console.log(error));
  };
  const showStripeButton = () => {
    return isAuthenticated() ? (
      <StripeCheckoutButton
        stripeKey='pk_test_51H15sUHrifiYqPQD6SoeekAmntJt9csDC2aQYARCOiQS6xA1SK8Gb1TEQJgORhG6czvmhqht6Ls7Vf4xb1c5Am0W00n9y0sZ9U'
        token={makePayment}
        amount={getFinalPrice() * 100}
        name='Buy T-shirts'
        shippingAddress
        billingAddress
      >
        <button className='btn btn-success'>Pay With Stripe</button>
      </StripeCheckoutButton>
    ) : (
      <Link to='/signin'>
        <button className='btn btn-warning'>Signin</button>
      </Link>
    );
  };

  return (
    <div>
      <h3 className='text-white'>
        Stripe Checkout Proce is INR. {getFinalPrice()}
      </h3>
      {showStripeButton()}
    </div>
  );
};

export default StripeCheckout;
