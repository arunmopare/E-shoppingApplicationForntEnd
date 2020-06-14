import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import { createCategory } from "./helper/adminapicall";

const AddCategory = () => {
  const [name, setname] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);
  const { user, token } = isAuthenticated();

  const goback = () => {
    return (
      <div className='mt-5'>
        <Link className='btn btn-sm btn-success mb-3' to='/admin/dashboard'>
          Admin Home
        </Link>
      </div>
    );
  };

  const hadleChange = (event) => {
    seterror("");
    setname(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    seterror("");
    setsuccess(false);

    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        seterror(true);
      } else {
        seterror("");
        setsuccess(true);
        setname("");
      }
    });
  };

  const successMessage = () => {
    if (success) {
      return <h4 className='text-success'>Category Created Successully</h4>;
    }
  };

  const errorMessage = () => {
    if (error) {
      return <h4 className='text-danger'>Failed to Create Category</h4>;
    }
  };

  const myCategoryForm = () => {
    return (
      <form>
        <div className='form-group'>
          <p>Enter The Category</p>
          <input
            type='text'
            className='form-control my-3'
            onChange={hadleChange}
            value={name}
            autoFocus
            required
            placeholder='Eg Summer'
          ></input>
          <button onClick={onSubmit} className='btn btn-outline-info'>
            Create Catogory
          </button>
        </div>
      </form>
    );
  };

  return (
    <Base
      title='Create a new category from here'
      description='Add a category for New-Tshirts'
      className='container bg-info p-4'
    >
      <div className='row bg-white rounded'>
        <div className='col-md-8 offset-md-2'>
          <h1>
            {myCategoryForm()} {goback()} {errorMessage()}
            {successMessage()}
          </h1>
        </div>
      </div>
    </Base>
  );
};
export default AddCategory;
