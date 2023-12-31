import React from 'react';
import Login from './Login';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <div className='center-content'>
        <h1>Welcome to the App</h1>
        <p>Sign in to get started</p>
        {/* Add a Sign-In button or form here */}
        <Login />
      </div>
    </div>
  );
};

export default LandingPage;
