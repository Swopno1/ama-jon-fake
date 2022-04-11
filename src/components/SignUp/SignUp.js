import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate('/home');
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Your two password did not matched!');
      return;
    }

    if (password.length < 6) {
      setError('Password minimum 6 character in length!');
    }

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className='form-container'>
      <div>
        <h2 className='form-title'>SignUp</h2>
        <form onSubmit={handleCreateUser}>
          <div className='input-group'>
            <label htmlFor='email'>Email</label>
            <input
              onBlur={handleEmailBlur}
              type='email'
              name='email'
              id='email'
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
              required
            />
          </div>
          <div className='input-group'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type='password'
              name='confirm-password'
              id='confirm-password'
              required
            />
          </div>
          <p style={{ color: 'red' }}>{error}</p>
          <input className='form-submit' type='submit' value='Sign Up' />
        </form>
        <p className='signup-text'>
          Already have an account?{' '}
          <Link className='form-link' to='/login'>
            Login
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

export default SignUp;
