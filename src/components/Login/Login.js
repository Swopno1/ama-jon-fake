import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>Login</h2>
        <form action=''>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' required />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' required />
          </div>
          <input className='form-submit' type='submit' value='Login' />
        </form>
        <p className='signup-text'>
          New to Ema-jon?{' '}
          <Link className='form-link' to='/signup'>
            Create an Acount
          </Link>
        </p>
        <div className='horizontal-line'>
          <div className='line'>
            <hr></hr>
          </div>
          <p>or</p>
          <div className='line'>
            <hr></hr>
          </div>
        </div>
        <button className='btn-google-signin'>
          <img
            className='icon-google'
            src='https://developers.google.com/identity/images/g-logo.png'
            alt=''
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
