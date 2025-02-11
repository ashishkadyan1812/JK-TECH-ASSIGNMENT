import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, loginWithGoogle } from '../redux/actions/authActions';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleGoogleSuccess = (credentialResponse) => {
    dispatch(loginWithGoogle(credentialResponse.credential));
    navigate('/');
  };

  const handleGoogleError = () => {
    console.error('Google login failed');
  };

  return (
    <>
      <div className="login-container">
        <h2 className="login-title">Login</h2>
        
        {error && <div className="error-message">{error}</div>}

        <div className="mb-6">
          <GoogleLogin onSuccess={handleGoogleSuccess} onError={handleGoogleError} useOneTap />
        </div>
      </div>
	<style>
        {`
          .login-container {
            max-width: 400px;
            margin: 50px auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
          }

          .login-title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 20px;
          }

          .error-message {
            margin-bottom: 15px;
            padding: 10px;
            background: #ffe5e5;
            color: #d9534f;
            border-radius: 5px;
          }

          .or-divider {
            position: relative;
            margin: 20px 0;
            text-align: center;
          }

          .or-divider hr {
            border: none;
            height: 1px;
            background: #ccc;
            margin: 0;
          }

          .or-divider span {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            background: white;
            padding: 0 10px;
            color: #777;
          }

          .input-field {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          .submit-btn {
            width: 100%;
            padding: 10px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
          }

          .submit-btn:hover {
            background: #0056b3;
          }
        `}
      </style>
    </>
  );
};

export default LoginForm;
