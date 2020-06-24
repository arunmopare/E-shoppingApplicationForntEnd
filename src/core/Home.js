import React from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";

export default function Home() {
  return (
    <Base title='Home Page' description='Welcome to T-shirt Store'>
      <h1 className='text-white'>Hello FrontEnd </h1>
      <div className='row text-center'>
        <div className='col-4'>
          <Card></Card>
        </div>
        <div className='col-4'>
          <Card></Card>
        </div>
        <div className='col-4'>
          <Card></Card>
        </div>
      </div>
    </Base>
  );
}
