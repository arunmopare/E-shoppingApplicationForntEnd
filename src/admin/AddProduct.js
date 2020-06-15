import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const [values, setvalues] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
  });

  const { name, description, price, stock } = values;

  const onSubmit = () => {};

  const handleChange = () => {};

  const createProductForm =  (event) => (
    <form>
      <span>Post photo</span>
      <div className='form-group'>
        <label className='btn btn-block btn-success'>
          <input
            onChange={handleChange("photo")}
            type='file'
            name='photo'
            accept='image'
            placeholder='choose a file'
          />
        </label>
      </div>
      <div className='form-group'>
        <input
          onChange={handleChange("name")}
          name='photo'
          className='form-control'
          placeholder='Name'
          value={name}
        />
      </div>
      <div className='form-group'>
        <textarea
          onChange={handleChange("description")}
          name='photo'
          className='form-control'
          placeholder='Description'
          value={description}
        />
      </div>
      <div className='form-group'>
        <input
          onChange={handleChange("price")}
          type='number'
          className='form-control'
          placeholder='Price'
          value={price}
        />
      </div>
      <div className='form-group'>
        <select
          onChange={handleChange("category")}
          className='form-control'
          placeholder='Category'
        >
          <option>Select</option>
          <option value='a'>a</option>
          <option value='b'>b</option>
        </select>
      </div>
      <div className='form-group'>
        <input
          onChange={handleChange("quantity")}
          type='number'
          className='form-control'
          placeholder='Quantity'
          value={stock}
        />
      </div>

      <button
        type='submit'
        onClick={onSubmit}
        className='btn btn-outline-success mb-3'
      >
        Create Product
      </button>
    </form>
  );

  return (
    <Base
      title='Add a Product Here!'
      description='Welcome to product creation section'
      className='container bg-info p-4'
    >
      <Link to='/admin/dashboard' className='btn btn-md btn-dark mb-3'>
        <h3> Admin Home</h3>
      </Link>
      <div className='row bg-dark text-white rounded'>
        <div className='col=md-8 offset-md-2'>{createProductForm()}</div>
      </div>
    </Base>
  );
};
export default AddProduct;
