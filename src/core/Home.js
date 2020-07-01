import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  const [products, setproducts] = useState([]);
  const [error, seterror] = useState(false);

  const loadAllProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        seterror(data.error);
      } else {
        setproducts(data);
      }
    });
  };
  useEffect(() => {
    loadAllProducts();
  }, []);
  return (
    <Base title='Home Page' description='Welcome to T-shirt Store'>
        <h1 className='text-white text-center mb-4'>All Of TS</h1>
      <div className='row text-center'>
        {products.map((prduct, index) => {
          return (
            <div key={index} className='col-4 mb-4'>
              <Card  />
            </div>
          );
        })}
      </div>
    </Base>
  );
}
