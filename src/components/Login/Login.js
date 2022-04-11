import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const navigate = useNavigate();

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>Login</h2>
        <form onSubmit={handleUserSignIn}>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input
              onBlur={handleEmailBlur}
              type='email'
              name='email'
              id='email'
              autoComplete='username'
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='password'>Password</label>
            <input
              onBlur={handlePasswordBlur}
              type='password'
              name='password'
              id='password'
              autoComplete='current-password'
              required
            />
          </div>
          <p style={{ color: 'red' }}>{error?.message}</p>
          <p style={{ color: 'green' }}>{loading && 'Loading...'}</p>
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
