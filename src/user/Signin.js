import React from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";

const Signin = () => {
  const SigninForm = () => {
    return (
      <div className='row'>
        <div className='col-md-6 offset-sm-3 text-left'>
          <form>
            <div className='form-group'>
              <label className='text-white'>Email</label>
              <input className='form-control' type='email'></input>
            </div>
            <div className='form-group'>
              <label className='text-white'>Password</label>
              <input className='form-control' type='password'></input>
            </div>
            <button className='btn btn-success btn-block'>Submit</button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title='Sign In Page' description='A Page for User To Sign In!'>
      {SigninForm()}
    </Base>
  );
};
export default Signin;
